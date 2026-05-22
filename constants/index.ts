/**
 * App routes — centralise all URL paths so changes are one-line updates.
 */
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  PRODUCTS: '/products',
  CART: '/view_cart',
  TEST_CASES: '/test_cases',
  API_LISTING: '/api_list',
  CONTACT_US: '/contact_us',
} as const;

/**
 * API endpoints — used in service classes and response intercepts.
 */
export const API_ENDPOINTS = {
  PRODUCTS: {
    LIST: '/api/productsList',
    SEARCH: '/api/searchProduct',
  },
  BRANDS: {
    LIST: '/api/brandsList',
  },
  USER: {
    VERIFY_LOGIN: '/api/verifyLogin',
    CREATE_ACCOUNT: '/api/createAccount',
    DELETE_ACCOUNT: '/api/deleteAccount',
    UPDATE_ACCOUNT: '/api/updateAccount',
    GET_USER: '/api/getUserDetailByEmail',
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
