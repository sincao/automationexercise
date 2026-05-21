# 🎭 Enterprise Playwright Automation Framework

> Production-ready, scalable E2E automation for UI + API — built for long-term team collaboration.

---

## 📋 Table of Contents

- [Architecture Overview](#architecture-overview)
- [Folder Structure](#folder-structure)
- [Quick Start](#quick-start)
- [Running Tests](#running-tests)
- [Environment Management](#environment-management)
- [Writing Tests](#writing-tests)
- [Anti-Patterns to Avoid](#anti-patterns-to-avoid)
- [Naming Conventions](#naming-conventions)
- [CI/CD](#cicd)
- [Scaling Strategy](#scaling-strategy)

---

## Architecture Overview

```
Tests ──► Fixtures ──► Page Objects ──► Locators
                  └──► API Services ──► BaseApiService
                  └──► Components (reusable UI)
                  └──► Utils (wait helpers, data factory, logger)
```

**Key design decisions:**

| Decision | Rationale |
|----------|-----------|
| Locators separated from Pages | One-file updates when UI changes |
| Fixtures over `beforeEach` setup | DRY, typed, composable |
| BaseApiService | Centralises logging, error handling, response parsing |
| BasePage | Shared navigation/screenshot helpers |
| DataFactory over static data | Unique data per test run → no cross-test pollution |

---

## Folder Structure

```
playwright-framework/
│
├── 📁 tests/                        # Test files only — no setup code here
│   ├── 📁 ui/                       # Browser UI tests
│   │   └── login.spec.ts
│   ├── 📁 api/                      # API-only tests (no browser)
│   │   └── auth.api.spec.ts
│   └── 📁 e2e/                      # Cross-page journeys
│       └── user-registration.e2e.spec.ts
│
├── 📁 pages/                        # Page Objects — actions, not assertions
│   ├── base.page.ts                 # Abstract base: navigate, waitForLoader, screenshot
│   ├── login.page.ts
│   └── dashboard.page.ts
│
├── 📁 locators/                     # ALL selectors — one file per page
│   ├── login.locators.ts
│   └── dashboard.locators.ts
│
├── 📁 components/                   # Reusable UI components (tables, modals, dropdowns)
│   ├── table.component.ts
│   └── modal.component.ts
│
├── 📁 fixtures/                     # Playwright fixture extensions
│   └── test.fixture.ts              # Custom test object with injected page objects + services
│
├── 📁 api-services/                 # API interaction layer
│   ├── base.api.service.ts          # HTTP methods, error handling, logging
│   ├── auth.api.service.ts
│   └── user.api.service.ts
│
├── 📁 utils/                        # Framework utilities
│   ├── logger.ts                    # Winston logger
│   ├── wait.helpers.ts              # All wait strategies (NO hardcoded waits)
│   ├── data.factory.ts              # Faker-based test data generation
│   ├── url.helpers.ts               # URL builders
│   └── general.helpers.ts           # sleep, formatDate, retry, etc.
│
├── 📁 test-data/                    # Static, predictable test data
│   └── users.data.ts                # Fixed users + data-driven test cases
│
├── 📁 constants/                    # App constants
│   └── index.ts                     # ROUTES, API_ENDPOINTS, TIMEOUTS, TAGS, HTTP_STATUS
│
├── 📁 environments/                 # Per-environment config
│   ├── environment.manager.ts       # Resolves env vars with fallbacks
│   ├── .env.dev
│   ├── .env.staging
│   └── .env.prod
│
├── 📁 config/                       # Framework config
│   ├── global-setup.ts              # Auth storageState generation
│   ├── global-teardown.ts           # Post-suite cleanup
│   └── auth/
│       └── storageState.json        # ⚠️ Gitignored — auto-generated
│
├── 📁 components/                   # Reusable UI component helpers
├── 📁 hooks/                        # Shared before/after hook logic
│   └── cleanup.hooks.ts             # cleanupTestUsers, blockAnalytics, mockFeatureFlag
│
├── 📁 custom-commands/              # Extended Playwright helpers
│   └── page.commands.ts             # fillAndVerify, selectOption, assertElementInaccessible
│
├── 📁 types/                        # Shared TypeScript types
│   └── index.ts
│
├── 📁 reports/                      # Auto-generated (gitignored)
│   ├── html-report/
│   ├── junit/
│   ├── json/
│   └── logs/
│
├── 📁 .github/workflows/
│   └── playwright.yml               # CI/CD pipeline
│
├── playwright.config.ts             # Main Playwright config
├── tsconfig.json
├── .eslintrc.json
├── package.json
└── .env.example
```

---

## Quick Start

### Prerequisites

- Node.js ≥ 18
- npm ≥ 9

### Setup

```bash
# 1. Clone and install
git clone <repo>
cd playwright-framework
npm ci

# 2. Install Playwright browsers
npx playwright install --with-deps

# 3. Create your local env file
cp .env.example .env.local
# Fill in your values in .env.local

# 4. Generate auth state (first time)
ENV=staging npm run setup:auth
```

---

## Running Tests

```bash
# All tests (default env: dev)
npm test

# Specific environment
ENV=staging npm test

# By tag
npm run test:smoke        # @smoke
npm run test:regression   # @regression

# By type
npm run test:ui           # tests/ui/**
npm run test:api          # tests/api/**
npm run test:e2e          # tests/e2e/**

# Single file
npx playwright test tests/ui/login.spec.ts

# Headed browser (for debugging)
npm run test:headed

# Debug mode (step through)
npm run test:debug

# Open HTML report
npm run report
```

---

## Environment Management

Environments are layered (higher priority wins):

```
process.env (CI secrets)
    ↓ override
.env.local  (never committed)
    ↓ override
environments/.env.{ENV}  (committed defaults)
    ↓ override
Hardcoded defaults in environment.manager.ts
```

```bash
ENV=staging npm test     # uses environments/.env.staging + secrets
ENV=prod npm test:smoke  # production smoke run
```

---

## Writing Tests

### 1. Always import from `fixtures/test.fixture`

```typescript
// ✅ Correct
import { test, expect } from '../../fixtures/test.fixture';

// ❌ Wrong — you lose typed page objects and API services
import { test, expect } from '@playwright/test';
```

### 2. Use fixtures, not constructors

```typescript
// ✅ Correct
test('user can login', async ({ loginPage, dashboardPage }) => {
  await loginPage.navigate();
  await loginPage.loginAndWaitForDashboard(email, password);
  await dashboardPage.assertPageLoaded();
});

// ❌ Wrong — manual instantiation, no fixture lifecycle
test('user can login', async ({ page }) => {
  const loginPage = new LoginPage(page); // don't do this in test files
```

### 3. Tag every test

```typescript
test('admin can view reports @smoke @regression @critical', async ({ ... }) => {
```

### 4. Use DataFactory for writable tests, static data for reads

```typescript
// Creating data → DataFactory (unique per run)
const user = DataFactory.user({ role: 'admin' });

// Reading existing data → static test-data/
const creds = TEST_USERS.ADMIN;
```

### 5. Keep test files clean — no DOM, no selectors

Test files should read like specifications:
```typescript
test('adding item to cart updates count', async ({ productPage, cartPage }) => {
  await productPage.navigate();
  await productPage.addFirstItemToCart();
  const count = await cartPage.getItemCount();
  expect(count).toBe(1);
});
```

---

## Anti-Patterns to Avoid

| ❌ Anti-Pattern | ✅ Correct Approach |
|----------------|---------------------|
| `page.waitForTimeout(2000)` | `waitForNetworkIdle()` or `waitFor({state:'visible'})` |
| Locators inside page methods | Locators in `locators/` files |
| Assertions inside page objects | Assertions only in test files |
| Hardcoded base URLs | `envConfig.baseURL` from environment manager |
| `new LoginPage(page)` in tests | Use `loginPage` fixture |
| `page.$('.my-class')` CSS selectors | Role/label/testid selectors |
| Sharing state between `test()` blocks | Each test is independent |
| `await page.waitForTimeout(500)` before click | Playwright auto-waits on `.click()` |
| Static email like `test@test.com` | `DataFactory.email()` |

---

## Naming Conventions

| Type | Convention | Example |
|------|-----------|---------|
| **Test files** | `feature.spec.ts` / `feature.e2e.spec.ts` | `login.spec.ts` |
| **Page objects** | `feature.page.ts` | `login.page.ts` |
| **Locators** | `feature.locators.ts` | `login.locators.ts` |
| **Components** | `name.component.ts` | `table.component.ts` |
| **API services** | `name.api.service.ts` | `auth.api.service.ts` |
| **Fixtures** | `name.fixture.ts` | `test.fixture.ts` |
| **Hooks** | `name.hooks.ts` | `cleanup.hooks.ts` |
| **Test names** | `verb + subject + context` | `'admin can view reports on dashboard'` |
| **Tags** | lowercase, `@prefix` | `@smoke`, `@regression` |
| **Class names** | PascalCase + suffix | `LoginPage`, `AuthApiService` |
| **Methods** | camelCase, verb-first | `enterEmail()`, `clickSignIn()` |
| **Locator getters** | camelCase noun | `emailInput`, `signInButton` |

---

## CI/CD

The pipeline runs in stages:

```
lint → smoke tests → regression tests (main only)
     ↘ api tests ──────────────────────────────► publish report
```

**Secrets required** (add in GitHub → Settings → Secrets):
- `STAGING_BASE_URL`
- `STAGING_API_BASE_URL`
- `TEST_USER_EMAIL`
- `TEST_USER_PASSWORD`
- `SLACK_WEBHOOK_URL` (optional)

---

## Scaling Strategy

### For large teams (10+ QA engineers):

1. **Split by domain** — each squad owns a folder under `tests/`:
   ```
   tests/checkout/
   tests/auth/
   tests/inventory/
   ```

2. **Parallel workers** — increase `workers` in `playwright.config.ts` as CI machines grow.

3. **Test sharding** — split regression suite across multiple CI jobs:
   ```yaml
   --shard=1/4  # CI job 1
   --shard=2/4  # CI job 2
   ```

4. **Domain-specific locators** — each domain team maintains their own locator files.

5. **Fixture composition** — create domain-specific fixture files that extend the base:
   ```typescript
   // fixtures/checkout.fixture.ts
   export const checkoutTest = test.extend<CheckoutFixtures>({ ... });
   ```

6. **API-first test data** — always create/clean data via API, never via UI.

7. **Flakiness tracking** — monitor retry counts in CI; anything retrying >20% needs investigation.

---

## 🤖 Working with AI Assistants

This repo contains a `CLAUDE.md` file at the root — it's an AI context file that tells AI coding assistants (Claude, GitHub Copilot, Cursor, etc.) the conventions and hard rules of this framework **before** they generate any code.

### Why CLAUDE.md matters

Without it, AI assistants will:
- Import `test` from `@playwright/test` instead of your fixture file (breaking injection)
- Put locators inside page objects (violating separation of concerns)
- Use `page.waitForTimeout()` (causing flaky tests)
- Create `new LoginPage(page)` inside test files (bypassing fixtures)

### How to use it

**Claude (claude.ai):** Upload `CLAUDE.md` at the start of your conversation, or paste its contents before asking for code generation.

**Cursor / VS Code Copilot:** The file is auto-read from the repo root when you open the project. No extra steps needed.

**ChatGPT:** Paste the contents of `CLAUDE.md` as a system message or first user message before your actual request.

### Prompt template for generating new tests

```
Context: I'm working in the playwright-enterprise-framework project.
Rules are in CLAUDE.md (already shared).

Task: Generate a test suite for the [feature name] page.
- Page URL: /your-path
- Key user flows: [describe flows]
- Tags needed: @smoke, @regression

Generate:
1. locators/your-feature.locators.ts
2. pages/your-feature.page.ts
3. tests/ui/your-feature.spec.ts
```
