import { test, expect } from '../../fixtures/test.fixture';
import { DataFactory } from '../../utils/data.factory';
import { TAGS } from '../../constants';

test.describe('Authentication — Negative', () => {
  test(`Test Case 3: Login User with incorrect email and password ${TAGS.SMOKE} ${TAGS.AUTH}`, async ({ 
    page, 
    loginPage 
  }) => {
    const invalidUser = DataFactory.user();

    // 1. Launch browser & 2. Navigate to url 'http://automationexercise.com'
    await page.goto('/');

    // 3. Verify that home page is visible successfully
    await expect(page).toHaveTitle(/Automation Exercise/);

    // 4. Click on 'Signup / Login' button
    await loginPage.goToCreateAccount();

    // 5. Verify 'Login to your account' is visible
    await expect(page.getByRole('heading', { name: 'Login to your account' })).toBeVisible();

    // 6. Enter incorrect email address and password & 7. Click 'login' button
    await loginPage.login(invalidUser.email, 'WrongPassword123!');

    // 8. Verify error 'Your email or password is incorrect!' is visible
    const errorMsg = await loginPage.getLoginErrorMessage();
    expect(errorMsg).toContain('Your email or password is incorrect!');
  });
});
