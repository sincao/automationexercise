import { test as base, APIRequestContext, request as playwrightRequest } from '@playwright/test';
import { LoginPage } from '@pages/login.page';
import { DashboardPage } from '@pages/dashboard.page';
import { AuthApiService } from '@api-services/auth.api.service';
import { UserApiService } from '@api-services/user.api.service';
import { getEnvironmentConfig } from '@environments/environment.manager';
import { logger } from '@utils/logger';

// ─── Fixture Type Definitions ────────────────────────────────────────────────

export interface PageFixtures {
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
}

export interface ApiFixtures {
  authApiService: AuthApiService;
  userApiService: UserApiService;
  authenticatedApiContext: APIRequestContext;
}

export interface DataFixtures {
  testUserId: string;
}

type AllFixtures = PageFixtures & ApiFixtures & DataFixtures;

// ─── Extended Test ────────────────────────────────────────────────────────────

/**
 * Custom test object — extends Playwright's base `test` with project-specific fixtures.
 *
 * Usage:
 *   import { test, expect } from '@fixtures/test.fixture';
 *   test('login works', async ({ loginPage, dashboardPage }) => { ... });
 */
export const test = base.extend<AllFixtures>({

  // ── Page Object Fixtures ──────────────────────────────────────────────────

  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  },

  // ── API Fixtures ──────────────────────────────────────────────────────────

  authApiService: async ({ request }, use) => {
    await use(new AuthApiService(request));
  },

  userApiService: async ({ request }, use) => {
    await use(new UserApiService(request));
  },

  /**
   * Authenticated API context — pre-configured with a valid Bearer token.
   *
   * FIX: Inject `request` from Playwright fixtures (not module-level import)
   * so it is properly scoped and disposed by Playwright's fixture lifecycle.
   */
  authenticatedApiContext: async ({ request }, use) => {
    const envConfig = getEnvironmentConfig(process.env.ENV);

    const authService = new AuthApiService(request);
    let token: string;

    try {
      const loginResponse = await authService.login(
        envConfig.defaultUser?.email ?? '',
        envConfig.defaultUser?.password ?? '',
      );
      token = loginResponse.token;
    } catch (error) {
      logger.error('[AuthFixture] Failed to get auth token:', error);
      throw error;
    }

    // Create a separate context with auth header pre-set
    const authenticatedContext = await playwrightRequest.newContext({
      baseURL: envConfig.apiBaseURL,
      extraHTTPHeaders: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    await use(authenticatedContext);
    await authenticatedContext.dispose();
  },

  // ── Data Fixtures ─────────────────────────────────────────────────────────

  /**
   * Creates a test user before the test, provides its ID, then cleans up after.
   * Uses fixture-scoped API context — no leaked state between tests.
   */
  testUserId: async ({ authenticatedApiContext }, use) => {
    const userService = new UserApiService(authenticatedApiContext);

    const user = await userService.createUser({
      email: `test.fixture.${Date.now()}@example.com`,
      firstName: 'Fixture',
      lastName: 'User',
    });

    logger.info(`[DataFixture] Created test user: ${user.id}`);
    await use(user.id);

    // Teardown — always runs even if test fails
    try {
      await userService.deleteUser(user.id);
      logger.info(`[DataFixture] Deleted test user: ${user.id}`);
    } catch (error) {
      logger.warn(`[DataFixture] Could not clean up user ${user.id}:`, error);
    }
  },
});

// Re-export expect so test files only need one import
export { expect } from '@playwright/test';
