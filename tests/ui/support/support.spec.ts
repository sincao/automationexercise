import { test, expect } from '../../../fixtures/test.fixture';
import { TAGS } from '../../../constants';
import { blockAds } from '../../../utils/general.helpers';
import * as path from 'path';

test.describe('Support & UI Utilities', () => {

  test.beforeEach(async ({ page }) => {
    await blockAds(page);
  });

  test(`Test Case 6: Contact Us Form ${TAGS.REGRESSION}`, async ({ page, contactUsPage }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Contact Us' }).click();
    await contactUsPage.assertPageLoaded();

    const filePath = path.resolve(process.cwd(), 'package.json');
    await contactUsPage.fillForm('Test User', 'test@test.com', 'Test Subject', 'This is a test message');
    await contactUsPage.uploadFile(filePath);
    await contactUsPage.submit();
    
    const msg = page.locator('.status.alert.alert-success');
    await msg.waitFor({ state: 'attached' });
    expect(await msg.textContent()).toContain('Success! Your details have been submitted successfully.');

    await contactUsPage.clickHome();
    await expect(page).toHaveURL('https://automationexercise.com/');
  });

  test(`Test Case 7: Verify Test Cases page ${TAGS.SANITY}`, async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Test Cases', exact: true }).click();
    await expect(page).toHaveURL(/.*\/test_cases/);
  });

  test(`Test Case 25: Verify Scroll Up using 'Arrow' button ${TAGS.REGRESSION}`, async ({ page }) => {
    await page.goto('/');
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.locator('#scrollUp').click();
    await expect(page.getByRole('heading', { name: /Full-Fledged practice website/i }).first()).toBeVisible();
  });

  test(`Test Case 26: Verify Scroll Up without 'Arrow' button ${TAGS.REGRESSION}`, async ({ page }) => {
    await page.goto('/');
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.evaluate(() => window.scrollTo(0, 0));
    await expect(page.getByRole('heading', { name: /Full-Fledged practice website/i }).first()).toBeVisible();
  });

});
