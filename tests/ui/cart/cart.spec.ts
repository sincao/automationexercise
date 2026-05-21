import { test, expect } from '../../../fixtures/test.fixture';
import { DataFactory } from '../../../utils/data.factory';
import { TAGS } from '../../../constants';
import { blockAds } from '../../../utils/general.helpers';

test.describe('Cart & Subscriptions', () => {
  // Use serial mode because shared footer (subscription) is flaky in parallel
  test.describe.configure({ mode: 'serial' });

  test.beforeEach(async ({ page }) => {
    await blockAds(page);
  });

  test(`Test Case 10: Verify Subscription in home page ${TAGS.REGRESSION}`, async ({ page, cartPage }) => {
    await page.goto('/');
    await cartPage.subscribe(DataFactory.email());
    expect(await cartPage.getSubscriptionSuccessMessage()).toContain('You have been successfully subscribed!');
  });

  test(`Test Case 11: Verify Subscription in Cart page ${TAGS.REGRESSION}`, async ({ page, cartPage }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Cart', exact: true }).click();
    await cartPage.subscribe(DataFactory.email());
    expect(await cartPage.getSubscriptionSuccessMessage()).toContain('You have been successfully subscribed!');
  });

  test(`Test Case 12: Add Products in Cart ${TAGS.SMOKE}`, async ({ page, productPage, cartPage }) => {
    await page.goto('/products');
    await productPage.addFirstProductToCart();
    await productPage.clickContinueShopping();
    await productPage.addSecondProductToCart();
    await productPage.clickViewCart();
    expect(await cartPage.getCartProductCount()).toBe(2);
  });

  test(`Test Case 13: Verify Product quantity in Cart ${TAGS.REGRESSION}`, async ({ page, productPage, cartPage }) => {
    await page.goto('/');
    await productPage.viewFirstProduct();
    await productPage.setQuantity(4);
    await productPage.addToCartFromDetail();
    await productPage.clickViewCart();
    await expect(page.locator('.cart_quantity button')).toHaveText('4');
  });

  test(`Test Case 17: Remove Products From Cart ${TAGS.REGRESSION}`, async ({ page, productPage, cartPage }) => {
    await page.goto('/');
    await productPage.addFirstProductToCart();
    await productPage.clickViewCart();
    await cartPage.removeFirstProduct();
    await expect(page.locator('#empty_cart')).toBeVisible();
  });

  test(`Test Case 22: Add to cart from Recommended items ${TAGS.REGRESSION}`, async ({ page, productPage, cartPage }) => {
    await page.goto('/');
    await productPage.addRecommendedProductToCart();
    await page.locator('u', { hasText: 'View Cart' }).click();
    expect(await cartPage.getCartProductCount()).toBeGreaterThan(0);
  });

});
