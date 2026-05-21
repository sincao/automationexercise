import { test, expect } from '../../fixtures/test.fixture';
import { DataFactory } from '../../utils/data.factory';
import { TAGS } from '../../constants';

test.describe('User Management', () => {
  test(`Test Case 1: Register User ${TAGS.SMOKE} ${TAGS.REGRESSION}`, async ({ 
    page, 
    signupPage 
  }) => {
    const user = DataFactory.user();

    // 1. Launch browser & 2. Navigate to url 'http://automationexercise.com'
    await page.goto('/');

    // 3. Verify that home page is visible successfully
    await expect(page).toHaveTitle(/Automation Exercise/);

    // 4. Click on 'Signup / Login' button
    await page.getByRole('link', { name: 'Signup / Login' }).click();

    // 5. Verify 'New User Signup!' is visible
    await expect(page.getByRole('heading', { name: 'New User Signup!' })).toBeVisible();

    // 6. Enter name and email address & 7. Click 'Signup' button
    await signupPage.fillInitialSignup(user.fullName, user.email);

    // 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
    await expect(page.getByText('Enter Account Information')).toBeVisible();

    // 9. Fill details: Title, Name, Email, Password, Date of birth
    // 10. Select checkbox 'Sign up for our newsletter!'
    // 11. Select checkbox 'Receive special offers from our partners!'
    await signupPage.fillAccountDetails(user);

    // 12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
    await signupPage.fillAddressDetails(user);

    // 13. Click 'Create Account button'
    await signupPage.clickCreateAccount();

    // 14. Verify that 'ACCOUNT CREATED!' is visible
    await expect(signupPage.getAccountCreatedMsgLocator()).toBeVisible();

    // 15. Click 'Continue' button
    await signupPage.clickContinue();

    // 16. Verify that 'Logged in as username' is visible
    await expect(page.getByText(`Logged in as ${user.fullName}`)).toBeVisible();

    // 17. Click 'Delete Account' button
    await page.getByRole('link', { name: 'Delete Account' }).click();

    // 18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
    await expect(page.getByText('Account Deleted!')).toBeVisible();
    await signupPage.clickContinue();
  });
});
