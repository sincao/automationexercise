import { Page, Route, Request } from '@playwright/test';
import { logger } from '@utils/logger';

/**
 * network-intercept.hooks.ts — centralised API mocking and network intercept strategies.
 *
 * WHY centralise intercepts here?
 *   - Prevents copy-paste of page.route() patterns across multiple test files.
 *   - Makes it easy to grep all mocked endpoints in one place.
 *   - Intercepts can be composed: apply multiple to the same page.
 *
 * Usage:
 *   import { mockEndpoint, stubErrorResponse } from '@hooks/network-intercept.hooks';
 *
 *   test.beforeEach(async ({ page }) => {
 *     await mockEndpoint(page, '/api/feature-flags', { newDashboard: true });
 *   });
 */

// ─── Generic Intercepts ───────────────────────────────────────────────────────

/**
 * Mock a GET endpoint with a static JSON response.
 * Intercepts ALL methods unless `method` is specified.
 */
export async function mockEndpoint(
  page: Page,
  urlPattern: string | RegExp,
  responseBody: unknown,
  options?: {
    status?: number;
    method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    delay?: number;
  },
): Promise<void> {
  await page.route(urlPattern, async (route: Route, request: Request) => {
    if (options?.method && request.method() !== options.method) {
      await route.continue();
      return;
    }
    if (options?.delay) {
      await new Promise((r) => setTimeout(r, options.delay));
    }
    logger.debug(`[NetworkIntercept] Mocking: ${request.method()} ${request.url()}`);
    await route.fulfill({
      status: options?.status ?? 200,
      contentType: 'application/json',
      body: JSON.stringify(responseBody),
    });
  });
}

/**
 * Stub an endpoint to return a server error (500).
 * Useful for testing error boundary / fallback UI.
 */
export async function stubErrorResponse(
  page: Page,
  urlPattern: string | RegExp,
  status = 500,
  message = 'Internal Server Error',
): Promise<void> {
  await page.route(urlPattern, async (route) => {
    logger.debug(`[NetworkIntercept] Stubbing error ${status} for: ${route.request().url()}`);
    await route.fulfill({
      status,
      contentType: 'application/json',
      body: JSON.stringify({ statusCode: status, message }),
    });
  });
}

/**
 * Stub an endpoint to return 401 Unauthorized.
 * Useful for testing session expiry / auth guard behavior.
 */
export async function stubUnauthorized(page: Page, urlPattern: string | RegExp): Promise<void> {
  await stubErrorResponse(page, urlPattern, 401, 'Unauthorized');
}

/**
 * Simulate slow network for a specific endpoint.
 * Useful for testing loading states and skeleton UIs.
 */
export async function simulateSlowNetwork(
  page: Page,
  urlPattern: string | RegExp,
  delayMs = 3_000,
): Promise<void> {
  await page.route(urlPattern, async (route) => {
    await new Promise((r) => setTimeout(r, delayMs));
    await route.continue();
  });
}

/**
 * Mock feature flags endpoint.
 * Merges your overrides with the real response so other flags are unaffected.
 */
export async function mockFeatureFlags(
  page: Page,
  overrides: Record<string, boolean>,
  flagsEndpoint = '**/api/feature-flags**',
): Promise<void> {
  await page.route(flagsEndpoint, async (route) => {
    let existingFlags: Record<string, boolean> = {};
    try {
      const realResponse = await route.fetch();
      existingFlags = await realResponse.json();
    } catch {
      // endpoint may not exist in test env — start with empty
    }

    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ ...existingFlags, ...overrides }),
    });
    logger.debug(`[NetworkIntercept] Feature flags mocked: ${JSON.stringify(overrides)}`);
  });
}

/**
 * Capture all requests to a URL pattern for later assertions.
 * Returns an array that accumulates intercepted request bodies.
 */
export function captureRequests(
  page: Page,
  urlPattern: string | RegExp,
): { requests: Array<{ url: string; method: string; body: unknown }> } {
  const captured: Array<{ url: string; method: string; body: unknown }> = [];

  page.on('request', (request) => {
    const matches =
      typeof urlPattern === 'string'
        ? request.url().includes(urlPattern)
        : urlPattern.test(request.url());

    if (matches) {
      let body: unknown = null;
      try { body = request.postDataJSON(); } catch { /* no body */ }
      captured.push({ url: request.url(), method: request.method(), body });
    }
  });

  return { requests: captured };
}
