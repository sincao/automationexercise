import { APIRequestContext } from '@playwright/test';
import { BaseApiService } from './base.api.service';
import { API_ENDPOINTS } from '@constants';

export interface Brand {
  id: number;
  brand: string;
}

export interface BrandsResponse {
  responseCode: number;
  brands: Brand[];
}

export class BrandApiService extends BaseApiService {
  protected readonly basePath = '';

  constructor(apiContext: APIRequestContext) {
    super(apiContext);
  }

  /**
   * Get all brands list (API 3)
   */
  async getBrandsList(): Promise<BrandsResponse> {
    return this.get<BrandsResponse>(API_ENDPOINTS.BRANDS.LIST);
  }

  /**
   * PUT To All Brands List (API 4)
   * This is expected to return 405 Method Not Supported.
   */
  async putBrandsList(): Promise<any> {
    return this.putForm(API_ENDPOINTS.BRANDS.LIST);
  }
}
