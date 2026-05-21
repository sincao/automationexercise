import { APIRequestContext } from '@playwright/test';
import { BaseApiService } from '@api-services/base.api.service';
import { getEnvironmentConfig } from '@environments/environment.manager';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'admin' | 'editor' | 'viewer';
  createdAt: string;
  updatedAt: string;
}

export interface CreateUserPayload {
  email: string;
  firstName: string;
  lastName: string;
  role?: User['role'];
  password?: string;
}

export interface UpdateUserPayload {
  firstName?: string;
  lastName?: string;
  role?: User['role'];
}

export interface UserListResponse {
  data: User[];
  total: number;
  page: number;
  pageSize: number;
}

// ─── Service ──────────────────────────────────────────────────────────────────

export class UserApiService extends BaseApiService {
  protected readonly basePath: string;

  constructor(apiContext: APIRequestContext) {
    super(apiContext);
    const envConfig = getEnvironmentConfig(process.env.ENV);
    this.basePath = envConfig.apiBaseURL;
  }

  async getUsers(params?: { page?: number; pageSize?: number; search?: string }): Promise<UserListResponse> {
    return this.get<UserListResponse>('/users', {
      params: params as Record<string, string>,
    });
  }

  async getUserById(userId: string): Promise<User> {
    return this.get<User>(`/users/${userId}`);
  }

  async createUser(payload: CreateUserPayload): Promise<User> {
    return this.post<User>('/users', payload);
  }

  async updateUser(userId: string, payload: UpdateUserPayload): Promise<User> {
    return this.patch<User>(`/users/${userId}`, payload);
  }

  async deleteUser(userId: string): Promise<void> {
    return this.delete<void>(`/users/${userId}`);
  }

  async getUserByEmail(email: string): Promise<User | null> {
    const response = await this.getUsers({ search: email });
    return response.data.find((u) => u.email === email) ?? null;
  }
}
