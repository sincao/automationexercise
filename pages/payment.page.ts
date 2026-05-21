import { Page } from '@playwright/test';
import { BasePage } from '@pages/base.page';
import { PaymentLocators } from '@locators/payment.locators';
import { logStep } from '@utils/logger';

export class PaymentPage extends BasePage {
  private readonly locators: PaymentLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new PaymentLocators(page);
  }

  get path(): string { return '/payment'; }

  async assertPageLoaded(): Promise<void> {
    await this.locators.payAndConfirmButton.waitFor({ state: 'visible' });
  }

  async fillPaymentDetails(name: string, number: string, cvc: string, month: string, year: string) {
    logStep('Filling payment details');
    await this.locators.nameOnCardInput.fill(name);
    await this.locators.cardNumberInput.fill(number);
    await this.locators.cvcInput.fill(cvc);
    await this.locators.expiryMonthInput.fill(month);
    await this.locators.expiryYearInput.fill(year);
  }

  async clickPayAndConfirm() {
    logStep('Click Pay and Confirm Order');
    await this.locators.payAndConfirmButton.click();
  }

  async downloadInvoice() {
    logStep('Downloading invoice');
    const downloadPromise = this.page.waitForEvent('download');
    await this.locators.downloadInvoiceButton.click();
    return downloadPromise;
  }
}
