import { test, expect } from '../../../fixtures/test.fixture';
import { DataFactory } from '../../../utils/data.factory';
import { TAGS } from '../../../constants';
import { blockAds } from '../../../utils/general.helpers';

test.describe('Checkout & Orders', () => {

  test.beforeEach(async ({ page }) => {
    await blockAds(page);
  });

  test(`Test Case 14: Place Order: Register while Checkout ${TAGS.REGRESSION} ${TAGS.AUTH}`, async ({ 
    page, productPage, cartPage, signupPage, checkoutPage, paymentPage 
  }) => {
    const user = DataFactory.user();
    await page.goto('/');
    await productPage.addFirstProductToCart();
    await productPage.clickViewCart();
    await cartPage.clickProceedToCheckout();
    await page.getByRole('link', { name: 'Register / Login' }).click();
    
    await signupPage.fillInitialSignup(user.fullName, user.email);
    await signupPage.fillAccountDetails(user);
    await signupPage.fillAddressDetails(user);
    await signupPage.clickCreateAccount();
    await signupPage.clickContinue();
    
    await page.getByRole('link', { name: 'Cart', exact: true }).click();
    await cartPage.clickProceedToCheckout();
    await checkoutPage.placeOrder('Test Comment');
    await paymentPage.fillPaymentDetails(user.fullName, '4111111111111111', '123', '01', '2025');
    await paymentPage.clickPayAndConfirm();
    await expect(page.getByText('Order Placed!')).toBeVisible();
    
    await page.getByRole('link', { name: 'Delete Account' }).click();
  });

  test(`Test Case 23: Verify address details in checkout page ${TAGS.REGRESSION}`, async ({ 
    page, productPage, cartPage, signupPage, checkoutPage, loginPage
  }) => {
    const user = DataFactory.user();
    await page.goto('/');
    await page.getByRole('link', { name: 'Signup / Login' }).click();
    await signupPage.fillInitialSignup(user.fullName, user.email);
    await signupPage.fillAccountDetails(user);
    await signupPage.fillAddressDetails(user);
    await signupPage.clickCreateAccount();
    await signupPage.clickContinue();

    await productPage.addFirstProductToCart();
    await productPage.clickViewCart();
    await cartPage.clickProceedToCheckout();
    
    const deliveryAddress = await checkoutPage.getDeliveryAddressText();
    expect(deliveryAddress).toContain(user.address1);
    
    await page.getByRole('link', { name: 'Delete Account' }).click();
  });

  test(`Test Case 24: Download Invoice after purchase order ${TAGS.REGRESSION}`, async ({ 
    page, productPage, cartPage, signupPage, checkoutPage, paymentPage, loginPage
  }) => {
    const user = DataFactory.user();
    await page.goto('/');
    await page.getByRole('link', { name: 'Signup / Login' }).click();
    await signupPage.fillInitialSignup(user.fullName, user.email);
    await signupPage.fillAccountDetails(user);
    await signupPage.fillAddressDetails(user);
    await signupPage.clickCreateAccount();
    await signupPage.clickContinue();
    
    await productPage.addFirstProductToCart();
    await productPage.clickViewCart();
    await cartPage.clickProceedToCheckout();
    await checkoutPage.placeOrder('Invoice test');
    await paymentPage.fillPaymentDetails(user.fullName, '4111111111111111', '123', '01', '2025');
    await paymentPage.clickPayAndConfirm();
    
    const download = await paymentPage.downloadInvoice();
    expect(download.suggestedFilename()).toBeTruthy();
    
    await page.getByRole('link', { name: 'Delete Account' }).click();
  });

});
