import { Page, expect, Locator } from '@playwright/test';
import { logStep } from '../utils/logger';

/**
 * Custom commands / matchers — extend Playwright with project-specific helpers.
 *
 * These are NOT page object methods. They are generic, reusable helpers
 * that can be called from any test or page object.
 */

/**
 * Fill a form field and verify the value was set correctly.
 * Handles edge cases with autocomplete and masked inputs.
 */
export async function fillAndVerify(locator: Locator, value: string): Promise<void> {
  await locator.clear();
  await locator.fill(value);
  await expect(locator).toHaveValue(value);
}

/**
 * Select a dropdown option by visible text.
 * Handles both native <select> and custom dropdown components.
 */
export async function selectOption(page: Page, label: string | RegExp, optionText: string): Promise<void> {
  logStep(`Select "${optionText}" from dropdown "${label}"`);
  const trigger = page.getByRole('combobox', { name: label })
    .or(page.getByLabel(label));

  // Native <select>
  if (await trigger.evaluate((el) => el.tagName === 'SELECT')) {
    await trigger.selectOption({ label: optionText });
    return;
  }

  // Custom dropdown
  await trigger.click();
  await page.getByRole('option', { name: optionText }).click();
}

/**
 * Upload a file to a file input.
 * Accepts a path relative to the project root.
 */
export async function uploadFile(page: Page, inputLocator: Locator, filePath: string): Promise<void> {
  logStep(`Upload file: ${filePath}`);
  await inputLocator.setInputFiles(filePath);
}

/**
 * Assert that a page element is not accessible to a user (e.g., permission guard).
 * Checks both visibility and disabled state.
 */
export async function assertElementInaccessible(locator: Locator): Promise<void> {
  const isVisible = await locator.isVisible();
  if (isVisible) {
    await expect(locator).toBeDisabled();
  } else {
    await expect(locator).toBeHidden();
  }
}

/**
 * Wait for and accept a browser dialog (alert/confirm/prompt).
 */
export async function handleDialog(page: Page, action: 'accept' | 'dismiss', promptText?: string): Promise<void> {
  page.once('dialog', async (dialog) => {
    logStep(`[Dialog] ${dialog.type()} — "${dialog.message()}" → ${action}`);
    if (action === 'accept') {
      await dialog.accept(promptText);
    } else {
      await dialog.dismiss();
    }
  });
}

/**
 * Assert a network request was made matching the given URL pattern.
 * Use after an action that should trigger an API call.
 */
export async function assertApiRequestMade(
  page: Page,
  urlPattern: string | RegExp,
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' = 'GET',
  timeoutMs = 5_000,
): Promise<void> {
  const requestPromise = page.waitForRequest(
    (req) =>
      req.method() === method &&
      (typeof urlPattern === 'string'
        ? req.url().includes(urlPattern)
        : urlPattern.test(req.url())),
    { timeout: timeoutMs },
  );
  await requestPromise;
}

/**
 * Scroll an element into view and highlight it (useful for visual debugging).
 */
export async function scrollAndHighlight(page: Page, locator: Locator): Promise<void> {
  await locator.scrollIntoViewIfNeeded();
  await locator.evaluate((el) => {
    (el as HTMLElement).style.outline = '3px solid red';
    setTimeout(() => { (el as HTMLElement).style.outline = ''; }, 2000);
  });
}

/**
 * Get the computed CSS property of an element.
 */
export async function getCssProperty(locator: Locator, property: string): Promise<string> {
  return locator.evaluate(
    (el, prop) => window.getComputedStyle(el).getPropertyValue(prop),
    property,
  );
}
