import { Page } from '@playwright/test';
import { BasePage } from '@pages/base.page';
import { LoginLocators } from '@locators/login.locators';
import { logStep } from '@utils/logger';

export class LoginPage extends BasePage {
  private readonly locators: LoginLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new LoginLocators(page);
  }

  get path(): string { return '/login'; }

  async assertPageLoaded(): Promise<void> {
    await this.locators.signupLoginLink.waitFor({ state: 'visible', timeout: 15_000 });
  }

  async goToCreateAccount(): Promise<void> {
    logStep('Navigate to Signup / Login page');
    await this.locators.signupLoginLink.click();
  }

  async login(email: string, password: string): Promise<void> {
    logStep(`Login with Email: ${email}`);
    await this.locators.loginEmailInput.fill(email);
    await this.locators.loginPasswordInput.fill(password);
    await this.locators.loginButton.click();
  }
}
