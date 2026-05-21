import * as dotenv from 'dotenv';
import * as path from 'path';

export interface EnvironmentConfig {
  baseURL: string;
  apiBaseURL: string;
  name: string;
  ignoreHTTPSErrors?: boolean;
  defaultUser?: {
    email: string;
    password: string;
  };
}

// FIX: Added 'test' environment (prompt required dev/test/staging/prod)
const ENV_CONFIGS: Record<string, Partial<EnvironmentConfig>> = {
  dev: {
    name: 'Development',
    baseURL: 'https://dev.example.com',
    apiBaseURL: 'https://api.dev.example.com',
    ignoreHTTPSErrors: true,
  },
  test: {
    name: 'Test',
    baseURL: 'https://test.example.com',
    apiBaseURL: 'https://api.test.example.com',
    ignoreHTTPSErrors: true,
  },
  staging: {
    name: 'Staging',
    baseURL: 'https://staging.example.com',
    apiBaseURL: 'https://api.staging.example.com',
    ignoreHTTPSErrors: false,
  },
  prod: {
    name: 'Production',
    baseURL: 'https://www.example.com',
    apiBaseURL: 'https://api.example.com',
    ignoreHTTPSErrors: false,
  },
};

/**
 * Resolve environment config.
 * Priority (highest → lowest): process.env > .env.{ENV} file > hardcoded defaults
 */
export function getEnvironmentConfig(env: string = 'dev'): EnvironmentConfig {
  const envKey = env.toLowerCase();

  dotenv.config({ path: path.resolve(process.cwd(), `environments/.env.${envKey}`) });

  const defaults = ENV_CONFIGS[envKey] ?? ENV_CONFIGS['dev'];

  return {
    name: defaults.name ?? envKey,
    baseURL: process.env.BASE_URL ?? defaults.baseURL ?? 'http://localhost:3000',
    apiBaseURL: process.env.API_BASE_URL ?? defaults.apiBaseURL ?? 'http://localhost:3001',
    ignoreHTTPSErrors: defaults.ignoreHTTPSErrors,
    defaultUser: {
      email: process.env.DEFAULT_USER_EMAIL ?? 'test@example.com',
      password: process.env.DEFAULT_USER_PASSWORD ?? 'Password123!',
    },
  };
}

export const currentEnv = getEnvironmentConfig(process.env.ENV ?? 'dev');
