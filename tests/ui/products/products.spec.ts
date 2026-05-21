import { test, expect } from '../../../fixtures/test.fixture';
import { TAGS } from '../../../constants';
import { blockAds } from '../../../utils/general.helpers';

test.describe('Products', () => {

  test.beforeEach(async ({ page }) => {
    await blockAds(page);
  });

  test(`Test Case 8: Verify All Products and product detail page ${TAGS.REGRESSION}`, async ({ page, productPage }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Products' }).click();
    await productPage.assertPageLoaded();
    expect(await productPage.getProductCount()).toBeGreaterThan(0);

    await productPage.viewFirstProduct();
    const info = await productPage.getProductInfo();
    expect(info.name).toBeTruthy();
    expect(info.category).toContain('Category:');
  });

  test(`Test Case 9: Search Product ${TAGS.REGRESSION}`, async ({ page, productPage }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Products' }).click();
    await productPage.assertPageLoaded();
    await productPage.searchProduct('Blue Top');
    await expect(page.getByRole('heading', { name: 'Searched Products' })).toBeVisible();
    expect(await productPage.getProductCount()).toBeGreaterThan(0);
  });

  test(`Test Case 18: View Category Products ${TAGS.REGRESSION}`, async ({ page, productPage }) => {
    await page.goto('/');
    await productPage.selectCategory('Women', 'Dress');
    await expect(page.locator('.features_items h2').first()).toHaveText(/WOMEN - DRESS PRODUCTS/i);
    
    await productPage.selectCategory('Men', 'Tshirts');
    await expect(page.locator('.features_items h2').first()).toHaveText(/MEN - TSHIRTS PRODUCTS/i);
  });

  test(`Test Case 19: View Brand Products ${TAGS.REGRESSION}`, async ({ page }) => {
    await page.goto('/products');
    await page.getByRole('link', { name: 'Polo' }).click();
    await expect(page.locator('.features_items h2').first()).toHaveText(/BRAND - POLO PRODUCTS/i);
    
    await page.getByRole('link', { name: 'H&M' }).click();
    await expect(page.locator('.features_items h2').first()).toHaveText(/BRAND - H&M PRODUCTS/i);
  });

  test(`Test Case 21: Add review on product ${TAGS.REGRESSION}`, async ({ page, productPage }) => {
    await page.goto('/products');
    await productPage.viewFirstProduct();
    await productPage.addReview('Test Reviewer', 'test@test.com', 'Excellent product!');
    expect(await productPage.getReviewSuccessMessage()).toContain('Thank you for your review.');
  });

});
