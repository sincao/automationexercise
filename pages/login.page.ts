import { Page } from '@playwright/test';
import { BasePage } from '@pages/base.page';
import { LoginLocators } from '@locators/login.locators';
import { logStep } from '@utils/logger';
import { waitForApiResponse } from '@utils/wait.helpers';

/**
 * LoginPage — all user-facing actions on the login screen.
 *
 * Rules:
 *   - Methods describe user intent, not DOM interactions
 *   - No expect() assertions — those belong in test files
 *   - No locators defined here — all in LoginLocators
 */
export class LoginPage extends BasePage {
  private readonly locators: LoginLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new LoginLocators(page);
  }

  get path(): string {
    return '/login';
  }

  async assertPageLoaded(): Promise<void> {
    await this.locators.emailInput.waitFor({ state: 'visible', timeout: 15_000 });
    await this.locators.signInButton.waitFor({ state: 'visible', timeout: 5_000 });
  }

  // ─── Field Actions ────────────────────────────────────────────────────────

  async enterEmail(email: string): Promise<void> {
    logStep(`Enter email: ${email}`);
    await this.locators.emailInput.clear();
    await this.locators.emailInput.fill(email);
  }

  async enterPassword(password: string): Promise<void> {
    logStep('Enter password');
    await this.locators.passwordInput.clear();
    await this.locators.passwordInput.fill(password);
  }

  // ─── Submit Actions ───────────────────────────────────────────────────────

  /**
   * Click sign-in and wait for the auth API response.
   * Returns HTTP status so tests can assert success vs failure.
   */
  async clickSignIn(): Promise<number> {
    logStep('Click Sign In');
    const response = await waitForApiResponse(
      this.page,
      '/auth/login',
      async () => this.locators.signInButton.click(),
    );
    return response.status();
  }

  /**
   * Fill email + password then submit.
   * Does NOT assert outcome — caller decides what to check.
   */
  async login(email: string, password: string): Promise<number> {
    await this.enterEmail(email);
    await this.enterPassword(password);
    return this.clickSignIn();
  }

  /**
   * Full login + wait for redirect to dashboard.
   * Use when you need a confirmed successful login before the test starts.
   */
  async loginAndWaitForDashboard(email: string, password: string): Promise<void> {
    await this.login(email, password);
    await this.page.waitForURL('**/dashboard', { timeout: 30_000 });
  }

  /**
   * Attempt a login expected to fail (wrong credentials, locked account, etc.).
   * Alias of login() — exists for readability in test files.
   */
  async attemptInvalidLogin(email: string, password: string): Promise<void> {
    await this.login(email, password);
  }

  // ─── Navigation ───────────────────────────────────────────────────────────

  async goToForgotPassword(): Promise<void> {
    logStep('Navigate to Forgot Password');
    await this.locators.forgotPasswordLink.click();
    await this.page.waitForURL('**/forgot-password');
  }

  async goToCreateAccount(): Promise<void> {
    logStep('Navigate to Create Account');
    await this.locators.createAccountLink.click();
  }

  // ─── State Readers ────────────────────────────────────────────────────────

  async getErrorMessage(): Promise<string> {
    return (await this.locators.errorAlert.textContent()) ?? '';
  }

  async isErrorVisible(): Promise<boolean> {
    return this.locators.errorAlert.isVisible();
  }
}
