import { Page } from '@playwright/test';

export class PaymentLocators {
  constructor(private readonly page: Page) {}

  get nameOnCardInput() { return this.page.getByTestId('name-on-card'); }
  get cardNumberInput() { return this.page.getByTestId('card-number'); }
  get cvcInput() { return this.page.getByTestId('cvc'); }
  get expiryMonthInput() { return this.page.getByTestId('expiry-month'); }
  get expiryYearInput() { return this.page.getByTestId('expiry-year'); }
  get payAndConfirmButton() { return this.page.getByTestId('pay-button'); }
  get successMsg() { return this.page.locator('.alert-success'); }
  get downloadInvoiceButton() { return this.page.locator('.btn-default.check_out'); }
}
