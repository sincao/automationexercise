import { Page } from '@playwright/test';

export class CheckoutLocators {
  constructor(private readonly page: Page) {}

  get addressDetails() { return this.page.locator('#address_delivery'); }
  get billingAddressDetails() { return this.page.locator('#address_invoice'); }
  get orderItems() { return this.page.locator('#cart_info_table tbody tr'); }
  get commentTextArea() { return this.page.locator('textarea[name="message"]'); }
  get placeOrderButton() { return this.page.getByRole('link', { name: /place order/i }); }
}
