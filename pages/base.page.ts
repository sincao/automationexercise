import { Page } from '@playwright/test';
import { logger, logStep } from '@utils/logger';
import { waitForNetworkIdle, waitForElementToDisappear } from '@utils/wait.helpers';

/**
 * BasePage — abstract base class for all page objects.
 *
 * Responsibilities:
 *   - Navigate to the page URL
 *   - Verify the page has loaded
 *   - Provide shared DOM/page helpers (scroll, toast text, etc.)
 *
 * Hard rules:
 *   - NO locators here — those live in locators/ files
 *   - NO expect() assertions — those belong in test files
 *   - NO business logic — keep methods generic and reusable
 */
export abstract class BasePage {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /** Relative URL path for this page. Override in every subclass. */
  abstract get path(): string;

  /**
   * Verify the page has fully loaded after navigation.
   * Override in subclasses — check a key visible element, not just URL.
   */
  abstract assertPageLoaded(): Promise<void>;

  // ─── Navigation ───────────────────────────────────────────────────────────

  async navigate(params?: Record<string, string>): Promise<void> {
    let targetPath = this.path;

    if (params) {
      const query = new URLSearchParams(params).toString();
      targetPath = `${targetPath}?${query}`;
    }

    logStep(`Navigating to: ${targetPath}`);
    await this.page.goto(targetPath);
    await this.assertPageLoaded();
  }

  // ─── Wait Helpers ─────────────────────────────────────────────────────────

  protected async waitForPageLoader(loaderSelector = '[data-testid="page-loader"]'): Promise<void> {
    const loader = this.page.locator(loaderSelector);
    await waitForElementToDisappear(loader, 20_000);
  }

  protected async waitForNetworkIdle(timeout = 10_000): Promise<void> {
    await waitForNetworkIdle(this.page, timeout);
  }

  // ─── Page State Readers ───────────────────────────────────────────────────
  // These return data — tests decide what to assert on them.

  async getTitle(): Promise<string> {
    return this.page.title();
  }

  getCurrentUrl(): string {
    return this.page.url();
  }

  /**
   * Wait for a toast/alert to appear and return its text content.
   * Does NOT assert the text — caller is responsible for that.
   *
   * WHY no expect() here:
   *   Assertions belong in test files. This method is a data reader.
   *   Test usage:
   *     const msg = await page.getToastText();
   *     expect(msg).toContain('Saved successfully');
   */
  async getToastText(timeout = 8_000): Promise<string> {
    const toast = this.page.getByRole('alert').or(this.page.getByTestId('toast'));
    await toast.waitFor({ state: 'visible', timeout });
    const text = (await toast.textContent()) ?? '';
    // Wait for auto-dismiss — ignore if toast is already gone
    await toast.waitFor({ state: 'hidden', timeout: 5_000 }).catch(() => {});
    return text.trim();
  }

  // ─── Generic Actions ──────────────────────────────────────────────────────

  async scrollToBottom(): Promise<void> {
    await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  }

  async scrollToTop(): Promise<void> {
    await this.page.evaluate(() => window.scrollTo(0, 0));
  }

  async screenshot(name: string): Promise<void> {
    logger.debug(`[Screenshot] ${name}`);
    await this.page.screenshot({ path: `test-results/screenshots/${name}.png` });
  }
}
