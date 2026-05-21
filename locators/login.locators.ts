import { Page } from '@playwright/test';

/**
 * LoginLocators — all selectors for the Login page in one place.
 *
 * WHY separate locators from pages?
 *   - When the UI changes, you update ONE file — not scattered across page methods.
 *   - Locators can be reviewed by non-developers (BAs, designers) more easily.
 *   - Prevents duplication when multiple pages share the same component.
 *
 * STRATEGY: Prefer role-based > label-based > data-testid > CSS.
 *   This order maximises resilience to DOM restructuring.
 */
export class LoginLocators {
  constructor(private readonly page: Page) {}

  // ── Form Fields ──────────────────────────────────────────────────────
  get emailInput() {
    return this.page.getByRole('textbox', { name: /email/i });
  }

  get passwordInput() {
    return this.page.getByRole('textbox', { name: /password/i });
  }

  get rememberMeCheckbox() {
    return this.page.getByRole('checkbox', { name: /remember me/i });
  }

  // ── Actions ──────────────────────────────────────────────────────────
  get signInButton() {
    return this.page.getByRole('button', { name: /sign in/i });
  }

  get forgotPasswordLink() {
    return this.page.getByRole('link', { name: /forgot password/i });
  }

  get createAccountLink() {
    return this.page.getByRole('link', { name: /create account|sign up/i });
  }

  // ── Feedback ─────────────────────────────────────────────────────────
  get errorAlert() {
    return this.page.getByRole('alert');
  }

  get fieldErrorEmail() {
    return this.page.getByText(/invalid email|email is required/i);
  }

  get fieldErrorPassword() {
    return this.page.getByText(/password is required|at least 8 characters/i);
  }

  // ── Social Auth ──────────────────────────────────────────────────────
  get googleSignInButton() {
    return this.page.getByRole('button', { name: /continue with google/i });
  }

  // ── SSO ──────────────────────────────────────────────────────────────
  get ssoEmailInput() {
    return this.page.getByTestId('sso-email-input');
  }

  get ssoSubmitButton() {
    return this.page.getByTestId('sso-submit-button');
  }
}
