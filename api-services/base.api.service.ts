import { APIRequestContext, APIResponse } from '@playwright/test';
import { logApiRequest, logApiResponse, logger } from '@utils/logger';

/**
 * BaseApiService — abstract base for all API service classes.
 *
 * Responsibilities:
 *   - Centralise error handling for API requests
 *   - Log all requests and responses
 *   - Provide typed response parsing
 *   - Manage common headers
 *
 * What it does NOT do:
 *   - Business logic (that belongs in derived services)
 *   - Assertions (those belong in test files)
 */
export abstract class BaseApiService {
  protected readonly apiContext: APIRequestContext;
  protected abstract readonly basePath: string;

  constructor(apiContext: APIRequestContext) {
    this.apiContext = apiContext;
  }

  // ─── HTTP Methods ─────────────────────────────────────────────────────────

  protected async get<T>(
    path: string,
    options?: { params?: Record<string, string | number>; headers?: Record<string, string> },
  ): Promise<T> {
    const url = this.buildUrl(path);
    logApiRequest('GET', url);
    const start = Date.now();

    const response = await this.apiContext.get(url, {
      params: options?.params as Record<string, string>,
      headers: options?.headers,
    });

    logApiResponse(response.status(), url, Date.now() - start);
    return this.parseResponse<T>(response);
  }

  protected async post<T>(
    path: string,
    body?: unknown,
    options?: { headers?: Record<string, string> },
  ): Promise<T> {
    const url = this.buildUrl(path);
    logApiRequest('POST', url, body);
    const start = Date.now();

    const response = await this.apiContext.post(url, {
      data: body,
      headers: options?.headers,
    });

    logApiResponse(response.status(), url, Date.now() - start);
    return this.parseResponse<T>(response);
  }

  protected async postForm<T>(
    path: string,
    form?: Record<string, string | number | boolean>,
    options?: { headers?: Record<string, string> },
  ): Promise<T> {
    const url = this.buildUrl(path);
    logApiRequest('POST (Multipart)', url, form);
    const start = Date.now();

    const response = await this.apiContext.post(url, {
      multipart: form,
      headers: options?.headers,
    });

    logApiResponse(response.status(), url, Date.now() - start);
    return this.parseResponse<T>(response);
  }

  protected async put<T>(
    path: string,
    body?: unknown,
    options?: { headers?: Record<string, string> },
  ): Promise<T> {
    const url = this.buildUrl(path);
    logApiRequest('PUT', url, body);
    const start = Date.now();

    const response = await this.apiContext.put(url, {
      data: body,
      headers: options?.headers,
    });

    logApiResponse(response.status(), url, Date.now() - start);
    return this.parseResponse<T>(response);
  }

  protected async putForm<T>(
    path: string,
    form?: Record<string, string | number | boolean>,
    options?: { headers?: Record<string, string> },
  ): Promise<T> {
    const url = this.buildUrl(path);
    logApiRequest('PUT (Multipart)', url, form);
    const start = Date.now();

    const response = await this.apiContext.put(url, {
      multipart: form,
      headers: options?.headers,
    });

    logApiResponse(response.status(), url, Date.now() - start);
    return this.parseResponse<T>(response);
  }

  protected async patch<T>(
    path: string,
    body?: unknown,
  ): Promise<T> {
    const url = this.buildUrl(path);
    logApiRequest('PATCH', url, body);
    const start = Date.now();

    const response = await this.apiContext.patch(url, { data: body });

    logApiResponse(response.status(), url, Date.now() - start);
    return this.parseResponse<T>(response);
  }

  protected async delete<T = void>(path: string): Promise<T> {
    const url = this.buildUrl(path);
    logApiRequest('DELETE', url);
    const start = Date.now();

    const response = await this.apiContext.delete(url);

    logApiResponse(response.status(), url, Date.now() - start);
    return this.parseResponse<T>(response);
  }

  protected async deleteWithForm<T = void>(
    path: string,
    form?: Record<string, string | number | boolean>,
    options?: { headers?: Record<string, string> },
  ): Promise<T> {
    const url = this.buildUrl(path);
    logApiRequest('DELETE (Multipart)', url, form);
    const start = Date.now();

    const response = await this.apiContext.delete(url, {
      multipart: form,
      headers: options?.headers,
    });

    logApiResponse(response.status(), url, Date.now() - start);
    return this.parseResponse<T>(response);
  }

  // ─── Response Parsing ─────────────────────────────────────────────────────

  protected async parseResponse<T>(response: APIResponse): Promise<T> {
    if (!response.ok()) {
      let errorBody: string;
      try {
        errorBody = JSON.stringify(await response.json());
      } catch {
        errorBody = await response.text();
      }

      const error = new ApiError(
        `API request failed: ${response.status()} ${response.statusText()} — ${response.url()}`,
        response.status(),
        errorBody,
      );

      logger.error(`[API Error] ${error.message}`, { body: errorBody });
      throw error;
    }

    // 204 No Content
    if (response.status() === 204) {
      return undefined as T;
    }

    try {
      return await response.json() as T;
    } catch {
      return await response.text() as unknown as T;
    }
  }

  /**
   * Get the raw APIResponse without parsing — useful for asserting status codes in API tests.
   */
  protected async getRaw(path: string, options?: { params?: Record<string, string> }): Promise<APIResponse> {
    const url = this.buildUrl(path);
    return this.apiContext.get(url, options);
  }

  protected async postRaw(path: string, body?: unknown): Promise<APIResponse> {
    const url = this.buildUrl(path);
    return this.apiContext.post(url, { data: body });
  }

  // ─── Helpers ──────────────────────────────────────────────────────────────

  private buildUrl(path: string): string {
    // If path already starts with http, use as-is
    if (path.startsWith('http')) return path;
    return `${this.basePath}${path.startsWith('/') ? '' : '/'}${path}`;
  }
}

// ─── Custom Error Class ───────────────────────────────────────────────────────

export class ApiError extends Error {
  constructor(
    message: string,
    public readonly statusCode: number,
    public readonly responseBody: string,
  ) {
    super(message);
    this.name = 'ApiError';
  }
}
