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
  fullyParallel: true,
  workers: process.env.CI ? 4 : 2,

  // ─── Retry Strategy ────────────────────────────────────────────────────────
  retries: process.env.CI ? 2 : 0,

  // ─── Timeouts ──────────────────────────────────────────────────────────────
  timeout: 60_000,
  expect: {
    timeout: 10_000,
    toHaveScreenshot: { maxDiffPixelRatio: 0.05 },
  },

  // ─── Global Setup / Teardown ───────────────────────────────────────────────
  // FIX: Removed globalSetup/globalTeardown here.
  // Auth is handled by the dedicated 'setup' project below (Playwright-native pattern).
  // This avoids the conflict where both globalSetup AND a setup project
  // tried to write storageState.json simultaneously.
  //
  // If you need non-auth global setup (DB seed, env checks), use:
  //   globalSetup: './config/global-teardown.ts'
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

    // Auth state — populated by the 'setup' project before any tests run
    storageState: './config/auth/storageState.json',

    // Artifacts on failure
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',

    // Timeouts
    actionTimeout: 15_000,
    navigationTimeout: 30_000,
    ignoreHTTPSErrors: envConfig.ignoreHTTPSErrors ?? false,

    extraHTTPHeaders: { 'Accept-Language': 'en-US' },
    locale: 'en-US',
    timezoneId: 'UTC',
  },

  // ─── Projects ──────────────────────────────────────────────────────────────
  projects: [
    // ── 1. Auth Setup (runs once before all browser projects) ────────────────
    // This is the ONLY place that generates storageState.json.
    // All browser projects declare it as a dependency — Playwright ensures
    // setup completes before any browser test starts.
    {
      name: 'setup',
      testMatch: /auth\.setup\.ts/,
      use: { storageState: undefined }, // setup project must NOT load storageState
    },

    // ── 2. Chromium ──────────────────────────────────────────────────────────
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
      dependencies: ['setup'],
    },

    // ── 3. Firefox ───────────────────────────────────────────────────────────
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
      dependencies: ['setup'],
    },

    // ── 4. WebKit ────────────────────────────────────────────────────────────
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
      dependencies: ['setup'],
    },

    // ── 5. Mobile Chrome ─────────────────────────────────────────────────────
    {
      name: 'mobile-chrome',
      use: { ...devices['Pixel 5'] },
      dependencies: ['setup'],
    },

    // ── 6. API Tests (no browser, no storageState needed) ────────────────────
    {
      name: 'api',
      testDir: './tests/api',
      use: {
        baseURL: envConfig.apiBaseURL,
        storageState: undefined,
        extraHTTPHeaders: { 'Content-Type': 'application/json' },
      },
    },
  ],
});
