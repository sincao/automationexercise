import { Page } from '@playwright/test';
import { BasePage } from '@pages/base.page';
import { DashboardLocators } from '@locators/dashboard.locators';
import { logStep } from '@utils/logger';
import { waitForElementToDisappear } from '@utils/wait.helpers';

export class DashboardPage extends BasePage {
  private readonly locators: DashboardLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new DashboardLocators(page);
  }

  get path(): string {
    return '/dashboard';
  }

  async assertPageLoaded(): Promise<void> {
    await waitForElementToDisappear(this.locators.skeletonLoader, 15_000);
    await this.locators.pageHeading.waitFor({ state: 'visible', timeout: 10_000 });
  }

  // ─── Actions ──────────────────────────────────────────────────────────────

  async signOut(): Promise<void> {
    logStep('Sign out');
    await this.locators.userMenuButton.click();
    await this.locators.signOutMenuItem.click();
    await this.page.waitForURL('**/login', { timeout: 10_000 });
  }

  async clickCreateNew(): Promise<void> {
    logStep('Click Create New');
    await this.locators.createNewButton.click();
  }

  // ─── State Readers ────────────────────────────────────────────────────────

  async getWelcomeMessage(): Promise<string> {
    return (await this.locators.welcomeMessage.textContent()) ?? '';
  }

  async getStatsCardCount(): Promise<number> {
    return this.locators.statsCards.count();
  }

  async isActivityFeedVisible(): Promise<boolean> {
    return this.locators.activityFeed.isVisible();
  }
}
