import { Page } from '@playwright/test';
import { BasePage } from '@pages/base.page';
import { ProductLocators } from '@locators/product.locators';
import { logStep } from '@utils/logger';

export class ProductPage extends BasePage {
  private readonly locators: ProductLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new ProductLocators(page);
  }

  get path(): string { return '/products'; }

  async assertPageLoaded(): Promise<void> {
    await this.locators.allProductsHeading.waitFor({ state: 'visible' });
  }

  async searchProduct(name: string) {
    logStep(`Searching for product: ${name}`);
    await this.locators.searchInput.waitFor({ state: 'visible' });
    await this.locators.searchInput.fill(name);
    await this.locators.searchButton.click();
    // Special wait for search result to stabilize
    await this.page.waitForLoadState('networkidle');
  }

  async viewFirstProduct() {
    logStep('Viewing first product detail');
    await this.locators.viewProductButtons.first().scrollIntoViewIfNeeded();
    await this.locators.viewProductButtons.first().click();
  }

  async addFirstProductToCart() {
    logStep('Adding first product to cart');
    await this.locators.productItems.first().scrollIntoViewIfNeeded();
    await this.locators.productItems.first().locator('.add-to-cart').first().click();
    await this.locators.addToCartModal.waitFor({ state: 'visible', timeout: 10_000 });
  }

  async addSecondProductToCart() {
    logStep('Adding second product to cart');
    await this.locators.productItems.nth(1).scrollIntoViewIfNeeded();
    await this.locators.productItems.nth(1).locator('.add-to-cart').first().click();
    await this.locators.addToCartModal.waitFor({ state: 'visible', timeout: 10_000 });
  }

  async clickContinueShopping() {
    logStep('Closing product added modal');
    await this.locators.addToCartModal.waitFor({ state: 'visible' });
    await this.locators.modalContinueShoppingButton.click();
    await this.locators.addToCartModal.waitFor({ state: 'hidden' });
  }

  async clickViewCart() {
    logStep('Navigating to cart from modal');
    await this.locators.addToCartModal.waitFor({ state: 'visible' });
    await this.locators.modalViewCartLink.click();
  }

  async setQuantity(qty: number) {
    logStep(`Setting quantity to ${qty}`);
    await this.locators.quantityInput.waitFor({ state: 'visible' });
    await this.locators.quantityInput.clear();
    await this.locators.quantityInput.fill(qty.toString());
  }

  async addToCartFromDetail() {
    logStep('Click Add to Cart from detail page');
    await this.locators.addToCartDetailButton.click();
    await this.locators.addToCartModal.waitFor({ state: 'visible' });
  }

  async addReview(name: string, email: string, review: string) {
    logStep('Adding product review');
    await this.locators.reviewNameInput.scrollIntoViewIfNeeded();
    await this.locators.reviewNameInput.fill(name);
    await this.locators.reviewEmailInput.fill(email);
    await this.locators.reviewTextArea.fill(review);
    await this.locators.reviewSubmitButton.click();
  }

  async getReviewSuccessMessage(): Promise<string> {
    await this.locators.reviewSuccessMsg.waitFor({ state: 'visible', timeout: 15_000 });
    return (await this.locators.reviewSuccessMsg.textContent()) ?? '';
  }

  async selectCategory(main: 'Women' | 'Men', sub: string) {
    logStep(`Selecting category: ${main} -> ${sub}`);
    const mainLoc = main === 'Women' ? this.locators.womenCategory : this.locators.menCategory;
    await mainLoc.scrollIntoViewIfNeeded();
    await mainLoc.click();
    const subLoc = this.page.locator('#' + main).getByRole('link', { name: sub });
    await subLoc.waitFor({ state: 'visible' });
    await subLoc.click();
  }

  async addRecommendedProductToCart() {
    logStep('Adding recommended product to cart');
    await this.locators.recommendedItemsHeading.scrollIntoViewIfNeeded();
    const btn = this.locators.recommendedAddToCartButtons.first();
    await btn.waitFor({ state: 'visible' });
    await btn.click();
  }

  // ─── State Readers ────────────────────────────────────────────────────────

  async getProductInfo() {
    return {
      name: await this.locators.productName.textContent(),
      category: await this.locators.productCategory.textContent(),
      price: await this.locators.productPrice.textContent(),
      availability: await this.locators.productAvailability.textContent(),
      condition: await this.locators.productCondition.textContent(),
      brand: await this.locators.productBrand.textContent(),
    };
  }

  async getProductCount(): Promise<number> {
    return this.locators.productItems.count();
  }
}
