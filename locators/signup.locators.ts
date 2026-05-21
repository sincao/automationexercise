import { Page } from '@playwright/test';

export class SignupLocators {
  constructor(private readonly page: Page) {}

  // ── Signup Form (Initial) ──────────────────────────────────────────
  get signupNameInput() { return this.page.getByTestId('signup-name'); }
  get signupEmailInput() { return this.page.getByTestId('signup-email'); }
  get signupButton() { return this.page.getByTestId('signup-button'); }

  // ── Account Information ───────────────────────────────────────────
  get titleMr() { return this.page.locator('#id_gender1'); }
  get titleMrs() { return this.page.locator('#id_gender2'); }
  get passwordInput() { return this.page.getByTestId('password'); }
  get daysSelect() { return this.page.getByTestId('days'); }
  get monthsSelect() { return this.page.getByTestId('months'); }
  get yearsSelect() { return this.page.getByTestId('years'); }
  get newsletterCheckbox() { return this.page.locator('#newsletter'); }
  get specialOffersCheckbox() { return this.page.locator('#optin'); }

  // ── Address Information ───────────────────────────────────────────
  get firstNameInput() { return this.page.getByTestId('first_name'); }
  get lastNameInput() { return this.page.getByTestId('last_name'); }
  get companyInput() { return this.page.getByTestId('company'); }
  get address1Input() { return this.page.getByTestId('address'); }
  get address2Input() { return this.page.getByTestId('address2'); }
  get countrySelect() { return this.page.getByTestId('country'); }
  get stateInput() { return this.page.getByTestId('state'); }
  get cityInput() { return this.page.getByTestId('city'); }
  get zipcodeInput() { return this.page.getByTestId('zipcode'); }
  get mobileNumberInput() { return this.page.getByTestId('mobile_number'); }
  get createAccountButton() { return this.page.getByTestId('create-account'); }

  // ── Success/Status Messages ───────────────────────────────────────
  get accountCreatedMsg() { return this.page.getByTestId('account-created'); }
  get accountDeletedMsg() { return this.page.getByTestId('account-deleted'); }
  get continueButton() { return this.page.getByTestId('continue-button'); }
}
