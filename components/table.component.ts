import { Page, Locator, expect } from '@playwright/test';
import { logStep } from '../utils/logger';

/**
 * TableComponent — reusable component for interacting with data tables.
 *
 * Why a component instead of a page method?
 *   - Tables appear on MANY pages (Users, Orders, Products…).
 *   - Duplicating table logic in every page object violates DRY.
 *   - A component is instantiated with its container locator,
 *     making it scoped and reusable.
 *
 * Usage:
 *   const table = new TableComponent(page, page.getByTestId('users-table'));
 *   await table.sortBy('Name');
 *   const rows = await table.getRowCount();
 */
export class TableComponent {
  private readonly container: Locator;

  constructor(
    private readonly page: Page,
    containerLocator: Locator,
  ) {
    this.container = containerLocator;
  }

  // ─── Header ───────────────────────────────────────────────────────────────

  private get headers() {
    return this.container.getByRole('columnheader');
  }

  async getColumnHeaders(): Promise<string[]> {
    const headers = await this.headers.allTextContents();
    return headers.map((h) => h.trim());
  }

  async sortBy(columnName: string): Promise<void> {
    logStep(`Sort table by: ${columnName}`);
    await this.container.getByRole('columnheader', { name: columnName }).click();
  }

  // ─── Rows ─────────────────────────────────────────────────────────────────

  private get rows() {
    return this.container.getByRole('row').filter({ hasNot: this.container.getByRole('columnheader') });
  }

  async getRowCount(): Promise<number> {
    return this.rows.count();
  }

  async getRowByIndex(index: number): Promise<Locator> {
    return this.rows.nth(index);
  }

  /**
   * Find the first row that contains the specified text in any cell.
   */
  async getRowByText(text: string): Promise<Locator> {
    return this.rows.filter({ hasText: text }).first();
  }

  /**
   * Get cell text at [row, col] (0-indexed).
   */
  async getCellText(rowIndex: number, colIndex: number): Promise<string> {
    const row = await this.getRowByIndex(rowIndex);
    const cells = row.getByRole('cell');
    return (await cells.nth(colIndex).textContent()) ?? '';
  }

  /**
   * Get all text content for a given column index.
   */
  async getColumnValues(colIndex: number): Promise<string[]> {
    const count = await this.rows.count();
    const values: string[] = [];

    for (let i = 0; i < count; i++) {
      const row = this.rows.nth(i);
      const cell = row.getByRole('cell').nth(colIndex);
      values.push((await cell.textContent()) ?? '');
    }

    return values.map((v) => v.trim());
  }

  // ─── Actions on Rows ──────────────────────────────────────────────────────

  /**
   * Click an action button (e.g., Edit, Delete) within a row identified by text.
   */
  async clickRowAction(rowText: string, actionName: string): Promise<void> {
    logStep(`Click "${actionName}" on row containing: ${rowText}`);
    const row = await this.getRowByText(rowText);
    await row.getByRole('button', { name: actionName }).click();
  }

  async clickRowCheckbox(rowIndex: number): Promise<void> {
    const row = await this.getRowByIndex(rowIndex);
    await row.getByRole('checkbox').click();
  }

  // ─── Pagination ───────────────────────────────────────────────────────────

  get nextPageButton() {
    return this.page.getByRole('button', { name: /next page|>/i });
  }

  get prevPageButton() {
    return this.page.getByRole('button', { name: /previous page|</i });
  }

  get pageInfo() {
    return this.page.getByTestId('pagination-info');
  }

  async goToNextPage(): Promise<void> {
    logStep('Go to next table page');
    await expect(this.nextPageButton).toBeEnabled();
    await this.nextPageButton.click();
  }

  // ─── Search & Filter ──────────────────────────────────────────────────────

  async searchInTable(query: string): Promise<void> {
    logStep(`Search table for: ${query}`);
    const searchInput = this.container.getByRole('searchbox').or(
      this.container.getByPlaceholder(/search/i),
    );
    await searchInput.clear();
    await searchInput.fill(query);
    // Wait for table to re-render
    await this.page.waitForResponse((res) => res.url().includes('/api/') && res.status() === 200);
  }

  // ─── Assertions ───────────────────────────────────────────────────────────

  async assertRowExists(text: string): Promise<void> {
    const row = await this.getRowByText(text);
    await expect(row).toBeVisible();
  }

  async assertRowNotExists(text: string): Promise<void> {
    await expect(this.rows.filter({ hasText: text })).toHaveCount(0);
  }

  async assertTableIsEmpty(): Promise<void> {
    const emptyState = this.container.getByText(/no data|no results|empty/i);
    await expect(emptyState).toBeVisible();
  }
}
