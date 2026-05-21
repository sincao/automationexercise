import { FullConfig } from '@playwright/test';
import { logger } from '@utils/logger';
import { getEnvironmentConfig } from '@environments/environment.manager';

/**
 * global-setup.ts — runs once before the entire test suite in a separate Node process.
 *
 * NOTE: Auth is handled by config/auth.setup.ts (the 'setup' project), NOT here.
 * This file is for non-auth global setup only:
 *   - Environment validation
 *   - Logging run metadata
 *   - DB seeding (if applicable)
 *   - Healthcheck pings
 *
 * To enable: uncomment `globalSetup` in playwright.config.ts
 */
async function globalSetup(_config: FullConfig): Promise<void> {
  const env = process.env.ENV ?? 'dev';
  const envConfig = getEnvironmentConfig(env);

  logger.info('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  logger.info(`  🎭 Playwright Test Run Starting`);
  logger.info(`  Environment : ${envConfig.name} (${env})`);
  logger.info(`  Base URL    : ${envConfig.baseURL}`);
  logger.info(`  API URL     : ${envConfig.apiBaseURL}`);
  logger.info(`  Node        : ${process.version}`);
  logger.info('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

  // Optional: ping the environment to fail fast if it's down
  // await validateEnvironmentHealth(envConfig.baseURL);
}

export default globalSetup;
