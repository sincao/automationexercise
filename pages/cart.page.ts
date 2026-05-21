import { Page } from '@playwright/test';
import { BasePage } from '@pages/base.page';
import { CartLocators } from '@locators/cart.locators';
import { logStep } from '@utils/logger';

export class CartPage extends BasePage {
  private readonly locators: CartLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new CartLocators(page);
  }

  get path(): string { return '/view_cart'; }

  async assertPageLoaded(): Promise<void> {
    await this.locators.proceedToCheckoutButton.waitFor({ state: 'visible' });
  }

  async subscribe(email: string) {
    logStep(`Subscribing with email: ${email}`);
    // More robust scroll and interaction for footer subscription
    await this.locators.subscriptionInput.evaluate(el => el.scrollIntoView());
    await this.locators.subscriptionInput.fill(email, { force: true });
    await this.locators.subscriptionButton.click({ force: true });
  }

  async getSubscriptionSuccessMessage(): Promise<string> {
    await this.locators.subscriptionSuccessMsg.waitFor({ state: 'attached', timeout: 10_000 });
    return (await this.locators.subscriptionSuccessMsg.textContent()) ?? '';
  }

  async clickProceedToCheckout() {
    logStep('Click Proceed to Checkout');
    await this.locators.proceedToCheckoutButton.click();
  }

  async removeFirstProduct() {
    logStep('Removing first product from cart');
    await this.locators.removeButtons.first().click();
  }

  async getCartProductCount(): Promise<number> {
    return this.locators.cartItems.count();
  }
}
