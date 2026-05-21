import { APIRequestContext } from '@playwright/test';
import { BaseApiService } from '@api-services/base.api.service';
import { getEnvironmentConfig } from '@environments/environment.manager';

// ─── Response Types ───────────────────────────────────────────────────────────

export interface LoginResponse {
  token: string;
  refreshToken: string;
  expiresIn: number;
  user: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    role: string;
  };
}

export interface RefreshTokenResponse {
  token: string;
  expiresIn: number;
}

// ─── Service ──────────────────────────────────────────────────────────────────

export class AuthApiService extends BaseApiService {
  protected readonly basePath: string;

  constructor(apiContext: APIRequestContext) {
    super(apiContext);
    const envConfig = getEnvironmentConfig(process.env.ENV);
    this.basePath = envConfig.apiBaseURL;
  }

  /**
   * Authenticate with email + password. Returns a JWT token.
   */
  async login(email: string, password: string): Promise<LoginResponse> {
    return this.post<LoginResponse>('/auth/login', { email, password });
  }

  /**
   * Refresh an expired token.
   */
  async refreshToken(refreshToken: string): Promise<RefreshTokenResponse> {
    return this.post<RefreshTokenResponse>('/auth/refresh', { refreshToken });
  }

  /**
   * Logout and invalidate the session.
   */
  async logout(token: string): Promise<void> {
    await this.post<void>('/auth/logout', {}, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  /**
   * Request a password reset email.
   */
  async requestPasswordReset(email: string): Promise<void> {
    await this.post<void>('/auth/password/reset', { email });
  }

  /**
   * Get raw login response — use in API tests that need to assert status codes.
   */
  async loginRaw(email: string, password: string) {
    return this.postRaw('/auth/login', { email, password });
  }
}
