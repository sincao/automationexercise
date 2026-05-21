import { Page } from '@playwright/test';

export class CartLocators {
  constructor(private readonly page: Page) {}

  get cartItems() { return this.page.locator('#cart_info_table tbody tr'); }
  get proceedToCheckoutButton() { return this.page.locator('.check_out'); }
  get productPrices() { return this.page.locator('.cart_price p'); }
  get productQuantities() { return this.page.locator('.cart_quantity button'); }
  get productTotalPrices() { return this.page.locator('.cart_total_price'); }
  get removeButtons() { return this.page.locator('.cart_quantity_delete'); }
  get emptyCartMsg() { return this.page.locator('#empty_cart'); }

  // ── Subscription ──────────────────────────────────────────────────
  get subscriptionInput() { return this.page.locator('#susbcribe_email'); }
  get subscriptionButton() { return this.page.locator('#subscribe'); }
  get subscriptionSuccessMsg() { return this.page.locator('.alert-success'); }
}
