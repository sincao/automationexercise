import { Page } from '@playwright/test';
import { logger } from '@utils/logger';
import { UserApiService } from '@api-services/user.api.service';
import { APIRequestContext } from '@playwright/test';

/**
 * Shared hooks — reusable setup/teardown logic for test suites.
 *
 * Usage:
 *   import { cleanupTestUsers } from '@hooks/cleanup.hooks';
 *   test.afterAll(async ({ authenticatedApiContext }) => {
 *     await cleanupTestUsers(authenticatedApiContext, createdUserIds);
 *   });
 */

/**
 * Delete a list of users by ID — use in afterAll to clean up test data.
 */
export async function cleanupTestUsers(
  apiContext: APIRequestContext,
  userIds: string[],
): Promise<void> {
  const service = new UserApiService(apiContext);
  const results = await Promise.allSettled(
    userIds.map((id) => service.deleteUser(id)),
  );

  results.forEach((result, index) => {
    if (result.status === 'rejected') {
      logger.warn(`[Cleanup] Failed to delete user ${userIds[index]}: ${result.reason}`);
    } else {
      logger.info(`[Cleanup] Deleted user: ${userIds[index]}`);
    }
  });
}

/**
 * Clear browser cookies and localStorage — use to reset auth state between tests.
 */
export async function clearBrowserState(page: Page): Promise<void> {
  await page.context().clearCookies();
  await page.evaluate(() => {
    localStorage.clear();
    sessionStorage.clear();
  });
  logger.debug('[Hook] Browser state cleared');
}

/**
 * Intercept and block analytics/tracking requests to prevent noise in tests.
 */
export async function blockAnalytics(page: Page): Promise<void> {
  await page.route(/google-analytics|segment|mixpanel|hotjar|intercom/, (route) => {
    route.abort();
  });
  logger.debug('[Hook] Analytics requests blocked');
}

/**
 * Mock a feature flag response — useful for testing features behind flags.
 */
export async function mockFeatureFlag(
  page: Page,
  flagName: string,
  enabled: boolean,
): Promise<void> {
  await page.route('**/api/feature-flags**', async (route) => {
    const response = await route.fetch();
    const body = await response.json();
    body[flagName] = enabled;
    await route.fulfill({ json: body });
  });
  logger.debug(`[Hook] Feature flag mocked: ${flagName} = ${enabled}`);
}

/**
 * Suppress expected console errors during tests (e.g., 401 from expired token test).
 */
export function suppressConsoleErrors(page: Page, patterns: RegExp[]): void {
  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      const text = msg.text();
      const isSuppressed = patterns.some((p) => p.test(text));
      if (!isSuppressed) {
        logger.warn(`[Console Error] ${text}`);
      }
    }
  });
}
