import { test as base } from '@playwright/test';
import { LoginPage, SignupPage, ContactUsPage, ProductPage, CartPage, CheckoutPage, PaymentPage } from '@pages';
import { ProductApiService } from '@api-services/product.api.service';
import { BrandApiService } from '@api-services/brand.api.service';
import { UserApiService } from '@api-services/user.api.service';

// ─── Fixture Type Definitions ────────────────────────────────────────────────

export interface PageFixtures {
  loginPage: LoginPage;
  signupPage: SignupPage;
  contactUsPage: ContactUsPage;
  productPage: ProductPage;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
  paymentPage: PaymentPage;
}

export interface ApiFixtures {
  productApiService: ProductApiService;
  brandApiService: BrandApiService;
  userApiService: UserApiService;
}

export interface DataFixtures {
  // Add data fixtures here when needed
}

type AllFixtures = PageFixtures & ApiFixtures & DataFixtures;

// ─── Extended Test ────────────────────────────────────────────────────────────

export const test = base.extend<AllFixtures>({

  // ── Page Object Fixtures ──────────────────────────────────────────────────

  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  signupPage: async ({ page }, use) => {
    await use(new SignupPage(page));
  },

  contactUsPage: async ({ page }, use) => {
    await use(new ContactUsPage(page));
  },

  productPage: async ({ page }, use) => {
    await use(new ProductPage(page));
  },

  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },

  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },

  paymentPage: async ({ page }, use) => {
    await use(new PaymentPage(page));
  },

  // ── API Fixtures ──────────────────────────────────────────────────────────

  productApiService: async ({ request }, use) => {
    await use(new ProductApiService(request));
  },

  brandApiService: async ({ request }, use) => {
    await use(new BrandApiService(request));
  },

  userApiService: async ({ request }, use) => {
    await use(new UserApiService(request));
  },

});

export { expect } from '@playwright/test';
