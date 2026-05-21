import { test, expect } from '../../fixtures/test.fixture';
import { TEST_USERS, LOGIN_VALIDATION_CASES } from '../../test-data/users.data';
import { ROUTES } from '../../constants';

/**
 * Login test suite — demonstrates:
 *   - Fixture-based page objects (no `new LoginPage()` in tests)
 *   - Data-driven tests
 *   - Tagging strategy
 *   - Clean test structure: Arrange → Act → Assert
 *   - No hardcoded waits
 *   - No locators in test files
 */

test.describe('Login — Authentication', () => {
  test.beforeEach(async ({ loginPage }) => {
    // Navigate fresh for each test — no state leakage
    await loginPage.navigate();
  });

  // ──────────────────────────────────────────────────────────────────────────
  // Happy Path
  // ──────────────────────────────────────────────────────────────────────────

  test('admin can log in with valid credentials @smoke @auth @critical', async ({
    loginPage,
    dashboardPage,
  }) => {
    // Act
    await loginPage.loginAndWaitForDashboard(
      TEST_USERS.ADMIN.email,
      TEST_USERS.ADMIN.password,
    );

    // Assert
    await dashboardPage.assertPageLoaded();
    await dashboardPage.assertCurrentUrl(/\/dashboard/);
  });

  test('viewer can log in with valid credentials @regression @auth', async ({
    loginPage,
    dashboardPage,
  }) => {
    await loginPage.loginAndWaitForDashboard(
      TEST_USERS.VIEWER.email,
      TEST_USERS.VIEWER.password,
    );
    await dashboardPage.assertPageLoaded();
  });

  test('session persists after page refresh @regression @auth', async ({
    loginPage,
    page,
  }) => {
    await loginPage.loginAndWaitForDashboard(
      TEST_USERS.ADMIN.email,
      TEST_USERS.ADMIN.password,
    );

    // Refresh and verify still authenticated
    await page.reload();
    await expect(page).toHaveURL(/\/dashboard/);
  });

  // ──────────────────────────────────────────────────────────────────────────
  // Negative / Error Cases
  // ──────────────────────────────────────────────────────────────────────────

  test('shows error for wrong credentials @smoke @auth', async ({ loginPage }) => {
    await loginPage.attemptInvalidLogin(TEST_USERS.INVALID.email, TEST_USERS.INVALID.password);

    // Assert — error visible, still on login page
    expect(await loginPage.isErrorVisible()).toBe(true);
    await loginPage.assertCurrentUrl(/\/login/);
  });

  test('does not expose password in DOM @regression @auth', async ({ loginPage, page }) => {
    await loginPage.enterPassword(TEST_USERS.ADMIN.password);

    const passwordInputType = await page
      .getByRole('textbox', { name: /password/i })
      .getAttribute('type');

    expect(passwordInputType).toBe('password');
  });

  // ──────────────────────────────────────────────────────────────────────────
  // Data-Driven Validation Tests
  // ──────────────────────────────────────────────────────────────────────────

  for (const { scenario, email, password, expectedError } of LOGIN_VALIDATION_CASES) {
    test(`shows validation error: ${scenario} @regression @auth`, async ({ loginPage }) => {
      await loginPage.login(email, password);

      const errorMessage = await loginPage.getErrorMessage();
      expect(errorMessage).toMatch(expectedError);
    });
  }

  // ──────────────────────────────────────────────────────────────────────────
  // Navigation
  // ──────────────────────────────────────────────────────────────────────────

  test('forgot password link navigates correctly @sanity', async ({ loginPage, page }) => {
    await loginPage.goToForgotPassword();
    await expect(page).toHaveURL(new RegExp(ROUTES.FORGOT_PASSWORD));
  });
});
