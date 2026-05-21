import { Page, Locator, expect } from '@playwright/test';
import { logStep } from '../utils/logger';

/**
 * ModalComponent — wraps any dialog/modal element.
 *
 * Usage:
 *   const modal = new ModalComponent(page, page.getByRole('dialog'));
 *   await modal.waitForOpen();
 *   await modal.confirm();
 */
export class ModalComponent {
  constructor(
    private readonly page: Page,
    private readonly dialog: Locator,
  ) {}

  async waitForOpen(timeout = 8_000): Promise<void> {
    await this.dialog.waitFor({ state: 'visible', timeout });
  }

  async waitForClose(timeout = 8_000): Promise<void> {
    await this.dialog.waitFor({ state: 'hidden', timeout });
  }

  async getTitle(): Promise<string> {
    return (await this.dialog.getByRole('heading').first().textContent()) ?? '';
  }

  async getBodyText(): Promise<string> {
    return (await this.dialog.textContent()) ?? '';
  }

  async confirm(buttonName = /confirm|ok|yes|submit/i): Promise<void> {
    logStep('Confirm modal');
    await this.dialog.getByRole('button', { name: buttonName }).click();
    await this.waitForClose();
  }

  async cancel(buttonName = /cancel|dismiss|close/i): Promise<void> {
    logStep('Cancel modal');
    await this.dialog.getByRole('button', { name: buttonName }).click();
    await this.waitForClose();
  }

  async closeWithX(): Promise<void> {
    logStep('Close modal with X button');
    await this.dialog.getByRole('button', { name: /close/i }).click();
    await this.waitForClose();
  }

  async assertIsOpen(): Promise<void> {
    await expect(this.dialog).toBeVisible();
  }

  async assertIsClosed(): Promise<void> {
    await expect(this.dialog).toBeHidden();
  }
}
