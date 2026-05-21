import { test, expect } from '../../fixtures/test.fixture';
import { DataFactory } from '../../utils/data.factory';
import { TAGS } from '../../constants';

/**
 * User Registration E2E Flow
 *
 * Tests the full journey: register → verify email → login → dashboard.
 *
 * This is an E2E test — it crosses multiple pages and may call APIs
 * to verify state. Keep it focused on the critical user journey.
 */

test.describe('E2E — User Registration Flow', () => {
  test.describe.configure({ mode: 'serial' }); // Run steps in order

  let registeredEmail: string;
  let registeredPassword: string;

  test(`new user can register an account ${TAGS.SMOKE} ${TAGS.CRITICAL}`, async ({
    page,
    loginPage,
  }) => {
    // Arrange
    const newUser = DataFactory.user();
    registeredEmail = newUser.email;
    registeredPassword = newUser.password;

    // Act — navigate to registration
    await loginPage.navigate();
    await loginPage.goToCreateAccount();

    // Fill registration form
    await page.getByLabel('First Name').fill(newUser.firstName);
    await page.getByLabel('Last Name').fill(newUser.lastName);
    await page.getByLabel('Email').fill(newUser.email);
    await page.getByLabel('Password').fill(newUser.password);
    await page.getByLabel('Confirm Password').fill(newUser.password);
    await page.getByRole('button', { name: /create account/i }).click();

    // Assert — success state
    await expect(page.getByText(/check your email/i)).toBeVisible({ timeout: 10_000 });
  });

  test(`registered user can log in after email verification ${TAGS.REGRESSION}`, async ({
    loginPage,
    dashboardPage,
    authenticatedApiContext,
  }) => {
    // In a real project, you'd trigger email verification via API or test mailbox
    // For this example, we simulate verification via API call
    const response = await authenticatedApiContext.post('/auth/verify-email/bypass', {
      data: { email: registeredEmail },
    });
    expect(response.status()).toBe(200);

    // Act — login with the registered credentials
    await loginPage.navigate();
    await loginPage.loginAndWaitForDashboard(registeredEmail, registeredPassword);

    // Assert
    await dashboardPage.assertPageLoaded();
    const welcomeText = await dashboardPage.getWelcomeMessage();
    expect(welcomeText).toContain('Welcome');
  });
});
