import { test as base } from '@playwright/test';
import { LoginPage } from '@pages/login.page';
import { SignupPage } from '@pages/signup.page';
import { ProductApiService } from '@api-services/product.api.service';

// ─── Fixture Type Definitions ────────────────────────────────────────────────

export interface PageFixtures {
  loginPage: LoginPage;
  signupPage: SignupPage;
}

export interface ApiFixtures {
  productApiService: ProductApiService;
}

export interface DataFixtures {
  // Add data fixtures here when needed
}

type AllFixtures = PageFixtures & ApiFixtures & DataFixtures;

// ─── Extended Test ────────────────────────────────────────────────────────────

/**
 * Custom test object — extends Playwright's base `test` with project-specific fixtures.
 *
 * Usage:
 *   import { test, expect } from '@fixtures/test.fixture';
 *   test('register works', async ({ signupPage }) => { ... });
 */
export const test = base.extend<AllFixtures>({

  // ── Page Object Fixtures ──────────────────────────────────────────────────

  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  signupPage: async ({ page }, use) => {
    await use(new SignupPage(page));
  },

  // ── API Fixtures ──────────────────────────────────────────────────────────

  productApiService: async ({ request }, use) => {
    await use(new ProductApiService(request));
  },

});

// Re-export expect so test files only need one import
export { expect } from '@playwright/test';
