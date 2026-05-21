import { Page, Locator, Response } from '@playwright/test';
import { logger } from '@utils/logger';

/**
 * Wait strategies — centralised here so we never scatter hardcoded waits across tests.
 *
 * Rule: always prefer network / DOM-based waits over time-based waits.
 */

// ─── Network Waits ────────────────────────────────────────────────────────────

/**
 * Wait for all in-flight network requests to finish.
 * Use after an action that triggers API calls.
 */
export async function waitForNetworkIdle(page: Page, timeout = 10_000): Promise<void> {
  await page.waitForLoadState('networkidle', { timeout });
}

/**
 * Wait for a specific API response matching a URL pattern.
 */
export async function waitForApiResponse(
  page: Page,
  urlPattern: string | RegExp,
  action: () => Promise<void>,
  timeout = 30_000,
): Promise<Response> {
  const [response] = await Promise.all([
    page.waitForResponse(
      (res) =>
        typeof urlPattern === 'string'
          ? res.url().includes(urlPattern)
          : urlPattern.test(res.url()),
      { timeout },
    ),
    action(),
  ]);
  logger.debug(`[WaitHelper] Got response: ${response.status()} ${response.url()}`);
  return response;
}

/**
 * Wait for multiple API responses simultaneously.
 */
export async function waitForMultipleApiResponses(
  page: Page,
  urlPatterns: (string | RegExp)[],
  action: () => Promise<void>,
  timeout = 30_000,
): Promise<Response[]> {
  const responsePromises = urlPatterns.map((pattern) =>
    page.waitForResponse(
      (res) =>
        typeof pattern === 'string' ? res.url().includes(pattern) : pattern.test(res.url()),
      { timeout },
    ),
  );

  const [responses] = await Promise.all([Promise.all(responsePromises), action()]);
  return responses;
}

// ─── Element Waits ────────────────────────────────────────────────────────────

/**
 * Wait for an element to be visible, then return it.
 * Avoids the common anti-pattern of calling waitForSelector + then querying again.
 */
export async function waitForElement(
  locator: Locator,
  timeout = 10_000,
): Promise<Locator> {
  await locator.waitFor({ state: 'visible', timeout });
  return locator;
}

/**
 * Wait for an element to disappear (e.g., loading spinner).
 */
export async function waitForElementToDisappear(
  locator: Locator,
  timeout = 15_000,
): Promise<void> {
  await locator.waitFor({ state: 'hidden', timeout });
}

/**
 * Wait for a loading indicator to disappear before interacting.
 * Accepts a locator for the spinner/loader element.
 */
export async function waitForLoaderToHide(
  page: Page,
  loaderLocator: Locator,
  timeout = 20_000,
): Promise<void> {
  try {
    // Only wait if the loader is currently visible
    if (await loaderLocator.isVisible()) {
      await loaderLocator.waitFor({ state: 'hidden', timeout });
    }
  } catch {
    // Loader may have already disappeared — not an error
    logger.debug('[WaitHelper] Loader was not visible or already hidden');
  }
}

// ─── Page Waits ───────────────────────────────────────────────────────────────

/**
 * Wait for navigation to complete after an action.
 */
export async function waitForNavigation(
  page: Page,
  urlOrPredicate: string | RegExp | ((url: URL) => boolean),
  action: () => Promise<void>,
  timeout = 30_000,
): Promise<void> {
  await Promise.all([
    page.waitForURL(urlOrPredicate, { timeout }),
    action(),
  ]);
}

/**
 * Stable click — waits for the element, scrolls into view, then clicks.
 * Reduces flakiness from off-screen elements.
 */
export async function stableClick(locator: Locator, timeout = 10_000): Promise<void> {
  await locator.waitFor({ state: 'visible', timeout });
  await locator.scrollIntoViewIfNeeded();
  await locator.click();
}

/**
 * Retry a flaky action with configurable attempts.
 * Use sparingly — only when external factors (animations, race conditions) cause issues.
 */
export async function retryAction<T>(
  action: () => Promise<T>,
  maxAttempts = 3,
  delayMs = 500,
): Promise<T> {
  let lastError: Error | undefined;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await action();
    } catch (error) {
      lastError = error as Error;
      logger.warn(`[WaitHelper] Attempt ${attempt}/${maxAttempts} failed: ${lastError.message}`);
      if (attempt < maxAttempts) {
        await new Promise((res) => setTimeout(res, delayMs * attempt)); // exponential backoff
      }
    }
  }

  throw lastError;
}

/**
 * Poll until a condition is true — DOM-based polling, not time-sleep.
 */
export async function pollUntil(
  condition: () => Promise<boolean>,
  intervalMs = 500,
  timeoutMs = 15_000,
): Promise<void> {
  const deadline = Date.now() + timeoutMs;

  while (Date.now() < deadline) {
    if (await condition()) return;
    await new Promise((res) => setTimeout(res, intervalMs));
  }

  throw new Error(`[WaitHelper] pollUntil timed out after ${timeoutMs}ms`);
}
