import { FullConfig } from '@playwright/test';
import { logger } from '@utils/logger';

async function globalTeardown(_config: FullConfig): Promise<void> {
  logger.info('[GlobalTeardown] Test suite completed. Cleaning up...');

  // Add any global teardown logic here:
  // - Close shared DB connections
  // - Clean up test data via API
  // - Notify Slack / webhook

  logger.info('[GlobalTeardown] Teardown complete.');
}

export default globalTeardown;
