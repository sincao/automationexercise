/**
 * Shared TypeScript types for the automation framework.
 */

// ─── Environment ──────────────────────────────────────────────────────────────

export type Environment = 'dev' | 'staging' | 'prod';

// ─── API Generic Types ────────────────────────────────────────────────────────

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface ApiErrorResponse {
  statusCode: number;
  message: string;
  errors?: Record<string, string[]>;
}

// ─── Test Metadata ────────────────────────────────────────────────────────────

export interface TestMetadata {
  testId: string;
  title: string;
  tags: string[];
  jiraTicket?: string;
  priority?: 'critical' | 'high' | 'medium' | 'low';
}

// ─── Browser Storage ──────────────────────────────────────────────────────────

export interface StorageState {
  cookies: Array<{
    name: string;
    value: string;
    domain: string;
    path: string;
    expires: number;
    httpOnly: boolean;
    secure: boolean;
    sameSite: 'Strict' | 'Lax' | 'None';
  }>;
  origins: Array<{
    origin: string;
    localStorage: Array<{ name: string; value: string }>;
  }>;
}

// ─── Utility Types ────────────────────────────────────────────────────────────

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type RequireFields<T, K extends keyof T> = T & Required<Pick<T, K>>;

export type Nullable<T> = T | null;
