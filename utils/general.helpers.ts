import { Page, Route } from '@playwright/test';

/**
 * General-purpose utility helpers.
 */

/**
 * Handle Google Vignette ads on automationexercise.com.
 * Forces navigation back to clean URL if redirected to #google_vignette.
 */
export async function handleAds(page: Page): Promise<void> {
  if (page.url().includes('#google_vignette')) {
    const cleanUrl = page.url().split('#')[0];
    await page.goto(cleanUrl, { waitUntil: 'networkidle' });
  }
}

/**
 * Robust Ad-blocker: Intercepts and aborts all known ad/tracking requests.
 * This is the most effective way to handle ads on practice sites.
 */
export async function blockAds(page: Page): Promise<void> {
  await page.route('**/*', (route: Route) => {
    const url = route.request().url();
    if (
      url.includes('google') || 
      url.includes('doubleclick') || 
      url.includes('adservice') || 
      url.includes('analytics') || 
      url.includes('vignette') ||
      url.includes('adsbygoogle')
    ) {
      void route.abort();
    } else {
      void route.continue();
    }
  });
}

/**
 * Pause execution. Use sparingly.
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Strip whitespace and normalise a string for comparison.
 */
export function normalizeText(text: string): string {
  return text.replace(/\s+/g, ' ').trim();
}
