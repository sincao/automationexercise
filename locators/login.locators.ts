import { Page } from '@playwright/test';

export class LoginLocators {
  constructor(private readonly page: Page) {}

  get loginEmailInput() { return this.page.getByTestId('login-email'); }
  get loginPasswordInput() { return this.page.getByTestId('login-password'); }
  get loginButton() { return this.page.getByTestId('login-button'); }

  get signupNameInput() { return this.page.getByTestId('signup-name'); }
  get signupEmailInput() { return this.page.getByTestId('signup-email'); }
  get signupButton() { return this.page.getByTestId('signup-button'); }

  get signupLoginLink() { return this.page.getByRole('link', { name: 'Signup / Login' }); }
}
