import { UserRole, USER_ROLES } from '../constants';

/**
 * Static test data — use when you need predictable, consistent test scenarios.
 * For unique/generated data, use DataFactory from utils/data.factory.ts.
 *
 * Rules:
 *  - Static data is for READ scenarios (verifying existing records).
 *  - Generated data (DataFactory) is for WRITE scenarios (create/update/delete).
 *  - Never rely on static data seeded in the DB — verify via API before asserting.
 */

export const TEST_USERS = {
  ADMIN: {
    email: process.env.TEST_ADMIN_EMAIL ?? 'admin@example.com',
    password: process.env.TEST_ADMIN_PASSWORD ?? 'AdminPass123!',
    role: USER_ROLES.ADMIN as UserRole,
    firstName: 'Admin',
    lastName: 'User',
  },
  EDITOR: {
    email: process.env.TEST_EDITOR_EMAIL ?? 'editor@example.com',
    password: process.env.TEST_EDITOR_PASSWORD ?? 'EditorPass123!',
    role: USER_ROLES.EDITOR as UserRole,
    firstName: 'Editor',
    lastName: 'User',
  },
  VIEWER: {
    email: process.env.TEST_VIEWER_EMAIL ?? 'viewer@example.com',
    password: process.env.TEST_VIEWER_PASSWORD ?? 'ViewerPass123!',
    role: USER_ROLES.VIEWER as UserRole,
    firstName: 'Viewer',
    lastName: 'User',
  },
  INVALID: {
    email: 'nonexistent@example.com',
    password: 'WrongPass999!',
  },
} as const;

/**
 * Data-driven test cases for login validation.
 */
export const LOGIN_VALIDATION_CASES = [
  {
    scenario: 'empty email',
    email: '',
    password: 'Password123!',
    expectedError: /email is required/i,
  },
  {
    scenario: 'invalid email format',
    email: 'not-an-email',
    password: 'Password123!',
    expectedError: /invalid email/i,
  },
  {
    scenario: 'empty password',
    email: 'test@example.com',
    password: '',
    expectedError: /password is required/i,
  },
  {
    scenario: 'wrong credentials',
    email: 'test@example.com',
    password: 'WrongPassword!',
    expectedError: /invalid credentials|incorrect password/i,
  },
  {
    scenario: 'SQL injection attempt',
    email: "' OR '1'='1",
    password: "' OR '1'='1",
    expectedError: /invalid email/i,
  },
] as const;

export const SAMPLE_PRODUCT = {
  name: 'Premium Widget',
  description: 'A high-quality widget for testing purposes',
  price: 49.99,
  sku: 'WGT-001',
  category: 'Electronics',
} as const;
