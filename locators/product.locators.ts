import { Page } from '@playwright/test';

export class ProductLocators {
  constructor(private readonly page: Page) {}

  get allProductsHeading() { return this.page.getByRole('heading', { name: /all products/i }); }
  get searchInput() { return this.page.locator('#search_product'); }
  get searchButton() { return this.page.locator('#submit_search'); }
  get searchedProductsHeading() { return this.page.getByRole('heading', { name: /searched products/i }); }
  get productItems() { return this.page.locator('.single-products'); }
  get viewProductButtons() { return this.page.getByRole('link', { name: /view product/i }); }
  get addToCartButtons() { return this.page.locator('.add-to-cart').filter({ hasText: 'Add to cart' }); }
  get continueShoppingButton() { return this.page.getByRole('button', { name: /continue shopping/i }); }
  get viewCartLink() { return this.page.locator('u', { hasText: 'View Cart' }); }
  get quantityInput() { return this.page.locator('#quantity'); }
  get addToCartDetailButton() { return this.page.locator('button:has-text("Add to cart")'); }

  // ── Modals ───────────────────────────────────────────────────────
  get addToCartModal() { return this.page.locator('#cartModal'); }
  get modalContinueShoppingButton() { return this.addToCartModal.getByRole('button', { name: /continue shopping/i }); }
  get modalViewCartLink() { return this.addToCartModal.getByRole('link', { name: /view cart/i }); }

  // ── Categories & Brands ──────────────────────────────────────────
  get categorySidebar() { return this.page.locator('.left-sidebar'); }
  get womenCategory() { return this.page.locator('a[href="#Women"]'); }
  get dressSubCategory() { return this.page.locator('a[href="/category_products/1"]'); }
  get menCategory() { return this.page.locator('a[href="#Men"]'); }
  get categoryTitle() { return this.page.locator('.features_items h2'); }
  get brandLinks() { return this.page.locator('.brands-name ul li a'); }

  // ── Reviews ──────────────────────────────────────────────────────
  get reviewNameInput() { return this.page.locator('#name'); }
  get reviewEmailInput() { return this.page.locator('#email'); }
  get reviewTextArea() { return this.page.locator('#review'); }
  get reviewSubmitButton() { return this.page.locator('#button-review'); }
  get reviewSuccessMsg() { return this.page.locator('#review-section .alert-success'); }

  // ── Recommended Items ───────────────────────────────────────────
  get recommendedItemsHeading() { return this.page.getByRole('heading', { name: /recommended items/i }); }
  get recommendedAddToCartButtons() { return this.page.locator('#recommended-item-carousel .add-to-cart'); }

  // ── Product Detail ───────────────────────────────────────────────
  get productName() { return this.page.locator('.product-information h2'); }
  get productCategory() { return this.page.locator('.product-information p').filter({ hasText: 'Category:' }); }
  get productPrice() { return this.page.locator('.product-information span span'); }
  get productAvailability() { return this.page.locator('.product-information p').filter({ hasText: 'Availability:' }); }
  get productCondition() { return this.page.locator('.product-information p').filter({ hasText: 'Condition:' }); }
  get productBrand() { return this.page.locator('.product-information p').filter({ hasText: 'Brand:' }); }
}
