import { test, expect } from '../../../fixtures/test.fixture';
import { DataFactory } from '../../../utils/data.factory';
import { TAGS } from '../../../constants';
import { blockAds } from '../../../utils/general.helpers';

test.describe('Authentication', () => {

  test.beforeEach(async ({ page }) => {
    await blockAds(page);
  });

  test(`Test Case 1: Register User ${TAGS.SMOKE} ${TAGS.REGRESSION}`, async ({ 
    page, 
    signupPage 
  }) => {
    const user = DataFactory.user();
    await page.goto('/');
    await expect(page).toHaveTitle(/Automation Exercise/);
    await page.getByRole('link', { name: 'Signup / Login' }).click();
    await signupPage.assertPageLoaded();
    await signupPage.fillInitialSignup(user.fullName, user.email);
    await expect(page.getByText('Enter Account Information')).toBeVisible();
    await signupPage.fillAccountDetails(user);
    await signupPage.fillAddressDetails(user);
    await signupPage.clickCreateAccount();
    await expect(signupPage.getAccountCreatedMsgLocator()).toBeVisible();
    await signupPage.clickContinue();
    await expect(page.getByText(`Logged in as ${user.fullName}`)).toBeVisible();
    await page.getByRole('link', { name: 'Delete Account' }).click();
    await expect(page.getByText('Account Deleted!')).toBeVisible();
    await signupPage.clickContinue();
  });

  test(`Test Case 2: Login User with correct email and password ${TAGS.SMOKE} ${TAGS.AUTH}`, async ({ 
    page, loginPage, signupPage 
  }) => {
    const user = DataFactory.user();
    // Setup
    await page.goto('/');
    await loginPage.goToCreateAccount();
    await signupPage.fillInitialSignup(user.fullName, user.email);
    await signupPage.fillAccountDetails(user);
    await signupPage.fillAddressDetails(user);
    await signupPage.clickCreateAccount();
    await signupPage.clickContinue();
    await page.getByRole('link', { name: 'Logout' }).click();

    // Test
    await page.goto('/');
    await loginPage.goToCreateAccount();
    await loginPage.login(user.email, user.password);
    await expect(page.getByText(`Logged in as ${user.fullName}`)).toBeVisible();
    await page.getByRole('link', { name: 'Delete Account' }).click();
    await expect(page.getByText('Account Deleted!')).toBeVisible();
  });

  test(`Test Case 3: Login User with incorrect email and password ${TAGS.SMOKE} ${TAGS.AUTH}`, async ({ 
    page, loginPage 
  }) => {
    const invalidUser = DataFactory.user();
    await page.goto('/');
    await loginPage.goToCreateAccount();
    await loginPage.login(invalidUser.email, 'WrongPassword123!');
    const errorMsg = await loginPage.getLoginErrorMessage();
    expect(errorMsg).toContain('Your email or password is incorrect!');
  });

  test(`Test Case 4: Logout User ${TAGS.SMOKE} ${TAGS.AUTH}`, async ({ page, loginPage, signupPage }) => {
    const user = DataFactory.user();
    await page.goto('/');
    await loginPage.goToCreateAccount();
    await signupPage.fillInitialSignup(user.fullName, user.email);
    await signupPage.fillAccountDetails(user);
    await signupPage.fillAddressDetails(user);
    await signupPage.clickCreateAccount();
    await signupPage.clickContinue();

    await page.goto('/');
    await expect(page.getByText(`Logged in as ${user.fullName}`)).toBeVisible();
    await page.getByRole('link', { name: 'Logout' }).click();
    await expect(page).toHaveURL(/.*\/login/);
  });

  test(`Test Case 5: Register User with existing email ${TAGS.REGRESSION} ${TAGS.AUTH}`, async ({ page, loginPage, signupPage }) => {
    const user = DataFactory.user();
    await page.goto('/');
    await loginPage.goToCreateAccount();
    await signupPage.fillInitialSignup(user.fullName, user.email);
    await signupPage.fillAccountDetails(user);
    await signupPage.fillAddressDetails(user);
    await signupPage.clickCreateAccount();
    await signupPage.clickContinue();
    await page.getByRole('link', { name: 'Logout' }).click();

    await page.goto('/');
    await loginPage.goToCreateAccount();
    await signupPage.fillInitialSignup(user.fullName, user.email);
    await expect(page.getByText('Email Address already exist!')).toBeVisible();
  });

});
