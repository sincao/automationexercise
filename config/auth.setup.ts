import { test as setup, expect } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';
import { getEnvironmentConfig } from '@environments/environment.manager';
import { logger } from '@utils/logger';

/**
 * auth.setup.ts — Playwright-native auth setup using the `setup` project pattern.
 *
 * WHY this file instead of globalSetup?
 *   - Playwright's `setup` project runs in the same process as tests,
 *     so it can use fixtures, page objects, and proper Playwright APIs.
 *   - globalSetup runs in a separate Node process — no access to fixtures.
 *   - This file is matched by `testMatch: /auth\.setup\.ts/` in playwright.config.ts.
 *   - All browser projects declare `dependencies: ['setup']` so this runs first.
 *
 * Reference: https://playwright.dev/docs/auth#moderate-one-account-shared-between-all-tests
 */

const AUTH_STATE_PATH = path.resolve('./config/auth/storageState.json');

setup('authenticate — save storageState', async ({ page }) => {
  const envConfig = getEnvironmentConfig(process.env.ENV);

  // Skip if storageState is fresh (< 30 min) — avoids unnecessary logins on re-runs
  if (isStorageStateFresh(AUTH_STATE_PATH, 30)) {
    logger.info('[AuthSetup] storageState is fresh — skipping login');
    return;
  }

  logger.info(`[AuthSetup] Logging in as: ${envConfig.defaultUser?.email}`);

  await page.goto(`${envConfig.baseURL}/login`);

  await page.getByLabel('Email').fill(envConfig.defaultUser?.email ?? '');
  await page.getByLabel('Password').fill(envConfig.defaultUser?.password ?? '');
  await page.getByRole('button', { name: /sign in/i }).click();

  // Assert successful login before saving state
  await expect(page).toHaveURL(/\/dashboard/, { timeout: 30_000 });

  // Ensure auth directory exists
  fs.mkdirSync(path.dirname(AUTH_STATE_PATH), { recursive: true });

  await page.context().storageState({ path: AUTH_STATE_PATH });
  logger.info(`[AuthSetup] storageState saved → ${AUTH_STATE_PATH}`);
});

function isStorageStateFresh(filePath: string, maxAgeMinutes: number): boolean {
  if (!fs.existsSync(filePath)) return false;
  const ageMs = Date.now() - fs.statSync(filePath).mtimeMs;
  return ageMs < maxAgeMinutes * 60 * 1000;
}
