import { APIRequestContext } from '@playwright/test';
import { BaseApiService } from './base.api.service';
import { API_ENDPOINTS } from '@constants';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Product {
  id: number;
  name: string;
  price: string;
  brand: string;
  category: {
    usertype: {
      usertype: string;
    };
    category: string;
  };
}

export interface ProductsResponse {
  responseCode: number;
  products: Product[];
}

// ─── Service ──────────────────────────────────────────────────────────────────

export class ProductApiService extends BaseApiService {
  protected readonly basePath = ''; // Automation Exercise API uses relative paths from root usually

  constructor(apiContext: APIRequestContext) {
    super(apiContext);
  }

  /**
   * Get all products list.
   * Note: Automation Exercise API often returns 200 even for some logic errors, 
   * so we check the responseCode inside the JSON.
   */
  async getAllProducts(): Promise<ProductsResponse> {
    return this.get<ProductsResponse>(API_ENDPOINTS.PRODUCTS.LIST);
  }

  /**
   * POST To All Products List (API 2)
   * This is expected to return 405 Method Not Supported.
   */
  async postProductsList(): Promise<any> {
    return this.postForm(API_ENDPOINTS.PRODUCTS.LIST);
  }

  /**
   * POST To Search Product (API 5 & 6)
   */
  async searchProduct(searchProduct?: string): Promise<any> {
    const form: Record<string, string> = {};
    if (searchProduct) {
      form.search_product = searchProduct;
    }
    return this.postForm(API_ENDPOINTS.PRODUCTS.SEARCH, form);
  }
}
