import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';
import * as path from 'path';
import { getEnvironmentConfig } from './environments/environment.manager';

// Load environment-specific .env file
const ENV = process.env.ENV || 'dev';
dotenv.config({ path: path.resolve(process.cwd(), `environments/.env.${ENV}`) });
dotenv.config({ path: path.resolve(process.cwd(), '.env.local'), override: false });

const envConfig = getEnvironmentConfig(ENV);

export default defineConfig({
  // ─── Test Discovery ────────────────────────────────────────────────────────
  testDir: './tests',
  testMatch: ['**/*.spec.ts', '**/*.test.ts'],

  // ─── Parallelism ───────────────────────────────────────────────────────────
  fullyParallel: false, // Disable fully parallel for UI to avoid footer conflicts
  workers: process.env.CI ? 2 : 1,

  // ─── Retry Strategy ────────────────────────────────────────────────────────
  retries: process.env.CI ? 2 : 1,

  // ─── Timeouts ──────────────────────────────────────────────────────────────
  timeout: 120_000, 
  expect: {
    timeout: 20_000,
    toHaveScreenshot: { maxDiffPixelRatio: 0.05 },
  },

  // ─── Global Setup / Teardown ───────────────────────────────────────────────
  globalTeardown: './config/global-teardown.ts',

  // ─── Reporting ─────────────────────────────────────────────────────────────
  reporter: [
    ['html', { outputFolder: 'reports/html-report', open: 'never' }],
    ['junit', { outputFile: 'reports/junit/results.xml' }],
    ['json', { outputFile: 'reports/json/results.json' }],
    ['list'],
    ...(process.env.CI ? [['github'] as ['github']] : []),
  ],

  // ─── Artifacts on Failure ──────────────────────────────────────────────────
  outputDir: 'test-results',

  // ─── Shared Test Settings ──────────────────────────────────────────────────
  use: {
    baseURL: envConfig.baseURL,
    headless: true,
    viewport: { width: 1280, height: 720 },

    // Site uses data-qa for automation locators
    testIdAttribute: 'data-qa',

    // Artifacts on failure
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',

    // Timeouts
    actionTimeout: 20_000,
    navigationTimeout: 40_000,
    ignoreHTTPSErrors: envConfig.ignoreHTTPSErrors ?? false,

    extraHTTPHeaders: { 'Accept-Language': 'en-US' },
    locale: 'en-US',
    timezoneId: 'UTC',
  },

  // ─── Projects ──────────────────────────────────────────────────────────────
  projects: [
    // ── 1. Chromium ──────────────────────────────────────────────────────────
    {
      name: 'chromium',
      testDir: './tests/ui',
      use: { ...devices['Desktop Chrome'] },
    },

    // ── 2. API Tests (no browser) ────────────────────
    {
      name: 'api',
      testDir: './tests/api',
      use: {
        baseURL: envConfig.apiBaseURL,
        extraHTTPHeaders: { 'Content-Type': 'application/json' },
      },
    },
  ],
});
