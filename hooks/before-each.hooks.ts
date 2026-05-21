import { Page } from '@playwright/test';
import { logger } from '@utils/logger';

/**
 * before-each.hooks.ts — reusable beforeEach patterns shared across test suites.
 *
 * Usage:
 *   import { setupPageDefaults } from '@hooks/before-each.hooks';
 *
 *   test.beforeEach(async ({ page }) => {
 *     await setupPageDefaults(page);
 *   });
 */

/**
 * Standard page setup for UI test suites:
 * - Block analytics noise
 * - Log uncaught errors to test output
 * - Set default viewport
 */
export async function setupPageDefaults(page: Page): Promise<void> {
  await blockAnalyticsRequests(page);
  captureConsoleErrors(page);
  logger.debug('[BeforeEach] Page defaults applied');
}

/**
 * Block common third-party analytics/tracking requests.
 * Prevents flakiness from external service timeouts and reduces noise in network logs.
 */
export async function blockAnalyticsRequests(page: Page): Promise<void> {
  await page.route(
    /google-analytics\.com|googletagmanager|segment\.io|mixpanel|hotjar|intercom|amplitude|heap/,
    (route) => route.abort(),
  );
}

/**
 * Capture uncaught browser console errors and forward to test logger.
 * Does NOT fail the test — use for visibility only.
 */
export function captureConsoleErrors(page: Page): void {
  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      logger.warn(`[Browser Console Error] ${msg.text()}`);
    }
  });
}

/**
 * Capture unhandled page crashes and log them.
 */
export function capturePageCrashes(page: Page): void {
  page.on('crash', () => {
    logger.error('[Page Crash] Page crashed during test!');
  });
  page.on('pageerror', (error) => {
    logger.error(`[Page Error] ${error.message}`);
  });
}

/**
 * Reset auth state for tests that need to run as unauthenticated.
 * Call in beforeEach for suites testing login/signup flows.
 */
export async function clearAuthState(page: Page): Promise<void> {
  await page.context().clearCookies();
  await page.evaluate(() => {
    try { localStorage.clear(); } catch { /* sandboxed */ }
    try { sessionStorage.clear(); } catch { /* sandboxed */ }
  });
  logger.debug('[BeforeEach] Auth state cleared');
}
