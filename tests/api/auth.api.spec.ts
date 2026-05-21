import { test, expect } from '../../fixtures/test.fixture';
import { TEST_USERS } from '../../test-data/users.data';
import { DataFactory } from '../../utils/data.factory';
import { HTTP_STATUS, TAGS } from '../../constants';

/**
 * Auth API Tests
 *
 * Tests the authentication API endpoints directly — no browser involved.
 * Fast, reliable, and precise.
 *
 * Convention: API tests use `request` fixture (or authApiService) directly.
 */

test.describe('API — Authentication Endpoints', () => {

  // ──────────────────────────────────────────────────────────────────────────
  // POST /auth/login
  // ──────────────────────────────────────────────────────────────────────────

  test.describe('POST /auth/login', () => {
    test(`returns 200 and token for valid credentials ${TAGS.SMOKE} ${TAGS.API}`, async ({
      authApiService,
    }) => {
      const response = await authApiService.login(
        TEST_USERS.ADMIN.email,
        TEST_USERS.ADMIN.password,
      );

      expect(response.token).toBeTruthy();
      expect(response.refreshToken).toBeTruthy();
      expect(response.user.email).toBe(TEST_USERS.ADMIN.email);
      expect(response.user.role).toBe(TEST_USERS.ADMIN.role);
    });

    test(`returns 401 for wrong password ${TAGS.REGRESSION} ${TAGS.API}`, async ({
      authApiService,
    }) => {
      const rawResponse = await authApiService.loginRaw(
        TEST_USERS.ADMIN.email,
        'WrongPassword999!',
      );

      expect(rawResponse.status()).toBe(HTTP_STATUS.UNAUTHORIZED);
      const body = await rawResponse.json();
      expect(body.message).toMatch(/invalid credentials/i);
    });

    test(`returns 400 for invalid email format ${TAGS.REGRESSION} ${TAGS.API}`, async ({
      authApiService,
    }) => {
      const rawResponse = await authApiService.loginRaw('not-an-email', 'AnyPass123!');

      expect(rawResponse.status()).toBe(HTTP_STATUS.BAD_REQUEST);
    });

    test(`returns 401 for non-existent user ${TAGS.REGRESSION} ${TAGS.API}`, async ({
      authApiService,
    }) => {
      const rawResponse = await authApiService.loginRaw(
        DataFactory.email('ghost'),
        'SomePass123!',
      );

      expect(rawResponse.status()).toBe(HTTP_STATUS.UNAUTHORIZED);
    });

    test(`does not return password in response ${TAGS.SMOKE} ${TAGS.API}`, async ({
      authApiService,
    }) => {
      const response = await authApiService.login(
        TEST_USERS.ADMIN.email,
        TEST_USERS.ADMIN.password,
      );

      // Ensure password is not leaked
      expect(JSON.stringify(response)).not.toContain(TEST_USERS.ADMIN.password);
      expect(response.user).not.toHaveProperty('password');
      expect(response.user).not.toHaveProperty('passwordHash');
    });
  });

  // ──────────────────────────────────────────────────────────────────────────
  // POST /auth/refresh
  // ──────────────────────────────────────────────────────────────────────────

  test.describe('POST /auth/refresh', () => {
    test(`returns new access token with valid refresh token ${TAGS.REGRESSION} ${TAGS.API}`, async ({
      authApiService,
    }) => {
      // First login to get a refresh token
      const loginResponse = await authApiService.login(
        TEST_USERS.ADMIN.email,
        TEST_USERS.ADMIN.password,
      );

      // Refresh the token
      const refreshResponse = await authApiService.refreshToken(loginResponse.refreshToken);

      expect(refreshResponse.token).toBeTruthy();
      expect(refreshResponse.token).not.toBe(loginResponse.token); // Must be a new token
    });
  });

  // ──────────────────────────────────────────────────────────────────────────
  // POST /auth/password/reset
  // ──────────────────────────────────────────────────────────────────────────

  test.describe('POST /auth/password/reset', () => {
    test(`returns 200 for existing email (no enumeration) ${TAGS.REGRESSION} ${TAGS.API}`, async ({
      authApiService,
    }) => {
      // Should return 200 regardless of whether email exists (prevents user enumeration)
      await authApiService.requestPasswordReset(TEST_USERS.ADMIN.email);
      await authApiService.requestPasswordReset(DataFactory.email('ghost'));
      // If no error thrown, both returned 200 — test passes
    });
  });
});
