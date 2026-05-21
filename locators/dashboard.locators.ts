import { Page } from '@playwright/test';

export class DashboardLocators {
  constructor(private readonly page: Page) {}

  // ── Navigation ────────────────────────────────────────────────────────
  get navBar() {
    return this.page.getByRole('navigation', { name: 'main' });
  }

  get userMenuButton() {
    return this.page.getByRole('button', { name: /user menu|account/i });
  }

  get signOutMenuItem() {
    return this.page.getByRole('menuitem', { name: /sign out|log out/i });
  }

  // ── Dashboard Content ─────────────────────────────────────────────────
  get pageHeading() {
    return this.page.getByRole('heading', { name: /dashboard/i, level: 1 });
  }

  get welcomeMessage() {
    return this.page.getByTestId('welcome-message');
  }

  get statsCards() {
    return this.page.getByTestId('stats-card');
  }

  get activityFeed() {
    return this.page.getByTestId('activity-feed');
  }

  // ── Quick Actions ──────────────────────────────────────────────────────
  get createNewButton() {
    return this.page.getByRole('button', { name: /create new|new \+/i });
  }

  // ── Loading States ─────────────────────────────────────────────────────
  get pageLoader() {
    return this.page.getByTestId('page-loader');
  }

  get skeletonLoader() {
    return this.page.locator('[data-testid^="skeleton-"]');
  }
}
