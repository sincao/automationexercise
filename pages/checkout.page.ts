import { Page } from '@playwright/test';
import { BasePage } from '@pages/base.page';
import { CheckoutLocators } from '@locators/checkout.locators';
import { logStep } from '@utils/logger';

export class CheckoutPage extends BasePage {
  private readonly locators: CheckoutLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new CheckoutLocators(page);
  }

  get path(): string { return '/checkout'; }

  async assertPageLoaded(): Promise<void> {
    await this.locators.placeOrderButton.waitFor({ state: 'visible' });
  }

  async placeOrder(comment: string) {
    logStep(`Placing order with comment: ${comment}`);
    await this.locators.commentTextArea.fill(comment);
    await this.locators.placeOrderButton.click();
  }

  async getDeliveryAddressText(): Promise<string> {
    return (await this.locators.addressDetails.textContent()) ?? '';
  }

  async getBillingAddressText(): Promise<string> {
    return (await this.locators.billingAddressDetails.textContent()) ?? '';
  }
}
