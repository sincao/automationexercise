import { Page } from '@playwright/test';
import { logger } from '@utils/logger';

/**
 * Shared hooks — reusable setup/teardown logic for test suites.
 */

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
    void route.abort();
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
    const body = await response.json() as Record<string, boolean>;
    body[flagName] = enabled;
    await route.fulfill({ json: body });
  });
  logger.debug(`[Hook] Feature flag mocked: ${flagName} = ${enabled}`);
}

/**
 * Suppress expected console errors during tests.
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
