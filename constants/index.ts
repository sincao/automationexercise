/**
 * App routes — centralise all URL paths so changes are one-line updates.
 */
export const ROUTES = {
  LOGIN: '/login',
  DASHBOARD: '/dashboard',
  PROFILE: '/profile',
  SETTINGS: '/settings',
  USERS: '/users',
  USERS_NEW: '/users/new',
  USER_DETAIL: (id: string) => `/users/${id}`,
  PRODUCTS: '/products',
  ORDERS: '/orders',
  REPORTS: '/reports',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password',
} as const;

/**
 * API endpoints — used in service classes and response intercepts.
 */
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
    PASSWORD_RESET: '/auth/password/reset',
  },
  USERS: {
    BASE: '/users',
    BY_ID: (id: string) => `/users/${id}`,
  },
  PRODUCTS: {
    BASE: '/products',
    BY_ID: (id: string) => `/products/${id}`,
  },
} as const;

/**
 * Timeouts (ms) — single source of truth. Never scatter numeric timeouts in tests.
 */
export const TIMEOUTS = {
  SHORT: 5_000,
  DEFAULT: 10_000,
  MEDIUM: 20_000,
  LONG: 30_000,
  EXTRA_LONG: 60_000,
  PAGE_LOAD: 30_000,
  ANIMATION: 1_000,
  API_RESPONSE: 15_000,
} as const;

/**
 * Test tags — standardised naming for `--grep` filtering.
 */
export const TAGS = {
  SMOKE: '@smoke',
  REGRESSION: '@regression',
  SANITY: '@sanity',
  SLOW: '@slow',
  API: '@api',
  UI: '@ui',
  AUTH: '@auth',
  CRITICAL: '@critical',
  WIP: '@wip',
  SKIP_CI: '@skip-ci',
} as const;

export const USER_ROLES = {
  ADMIN: 'admin',
  EDITOR: 'editor',
  VIEWER: 'viewer',
} as const;

export type UserRole = typeof USER_ROLES[keyof typeof USER_ROLES];

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  INTERNAL_SERVER_ERROR: 500,
} as const;
