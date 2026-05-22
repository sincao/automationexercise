import { APIRequestContext } from '@playwright/test';
import { BaseApiService } from './base.api.service';
import { API_ENDPOINTS } from '@constants';

export class UserApiService extends BaseApiService {
  protected readonly basePath = '';

  constructor(apiContext: APIRequestContext) {
    super(apiContext);
  }

  /**
   * POST To Verify Login (API 7, 8, 10)
   */
  async verifyLogin(params?: { email?: string; password?: string }): Promise<any> {
    return this.postForm(API_ENDPOINTS.USER.VERIFY_LOGIN, params);
  }

  /**
   * DELETE To Verify Login (API 9)
   */
  async deleteVerifyLogin(): Promise<any> {
    return this.delete(API_ENDPOINTS.USER.VERIFY_LOGIN);
  }

  /**
   * POST To Create/Register User Account (API 11)
   */
  async createAccount(userDetails: Record<string, any>): Promise<any> {
    return this.postForm(API_ENDPOINTS.USER.CREATE_ACCOUNT, userDetails);
  }

  /**
   * DELETE METHOD To Delete User Account (API 12)
   */
  async deleteAccount(params: { email: string; password?: string }): Promise<any> {
    return this.deleteWithForm(API_ENDPOINTS.USER.DELETE_ACCOUNT, params);
  }

  /**
   * PUT METHOD To Update User Account (API 13)
   */
  async updateAccount(userDetails: Record<string, any>): Promise<any> {
    return this.putForm(API_ENDPOINTS.USER.UPDATE_ACCOUNT, userDetails);
  }

  /**
   * GET user account detail by email (API 14)
   */
  async getUserDetail(email: string): Promise<any> {
    return this.get(API_ENDPOINTS.USER.GET_USER, { params: { email } });
  }
}
