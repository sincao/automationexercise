import { test, expect } from '../../fixtures/test.fixture';
import { DataFactory } from '../../utils/data.factory';
import { TAGS } from '../../constants';

test.describe('Authentication', () => {
  let user: any;

  test.beforeEach(async ({ page, loginPage, signupPage }) => {
    user = DataFactory.user();
    
    // Setup: Create a user first so we have "correct email and password"
    await page.goto('/');
    await loginPage.goToCreateAccount();
    await signupPage.fillInitialSignup(user.fullName, user.email);
    await signupPage.fillAccountDetails(user);
    await signupPage.fillAddressDetails(user);
    await signupPage.clickCreateAccount();
    await signupPage.clickContinue();
    
    // Logout to be ready for the actual Login test case
    await page.getByRole('link', { name: 'Logout' }).click();
  });

  test(`Test Case 2: Login User with correct email and password ${TAGS.SMOKE} ${TAGS.AUTH}`, async ({ 
    page, 
    loginPage 
  }) => {
    // 1. Launch browser & 2. Navigate to url 'http://automationexercise.com'
    await page.goto('/');

    // 3. Verify that home page is visible successfully
    await expect(page).toHaveTitle(/Automation Exercise/);

    // 4. Click on 'Signup / Login' button
    await loginPage.goToCreateAccount();

    // 5. Verify 'Login to your account' is visible
    await expect(page.getByRole('heading', { name: 'Login to your account' })).toBeVisible();

    // 6. Enter correct email address and password & 7. Click 'login' button
    await loginPage.login(user.email, user.password);

    // 8. Verify that 'Logged in as username' is visible
    await expect(page.getByText(`Logged in as ${user.fullName}`)).toBeVisible();

    // 9. Click 'Delete Account' button
    await page.getByRole('link', { name: 'Delete Account' }).click();

    // 10. Verify that 'ACCOUNT DELETED!' is visible
    await expect(page.getByText('Account Deleted!')).toBeVisible();
  });
});
