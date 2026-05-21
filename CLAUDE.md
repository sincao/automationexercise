# CLAUDE.md — AI Context for Playwright Enterprise Framework

> **AI assistants: read this entire file before writing any code.**

---

## ⚡ QUICK RULES
<!-- Copy this block into any AI conversation before asking for code -->

```
FRAMEWORK RULES — Playwright Enterprise (TypeScript)

IMPORTS:
- Always: import { test, expect } from '@fixtures/test.fixture'
- Never:  import { test, expect } from '@playwright/test'
- Always use @path aliases, never relative cross-folder imports
  ✅ import { LoginPage } from '@pages/login.page'
  ❌ import { LoginPage } from '../../pages/login.page'

LOCATORS:
- Live in locators/*.locators.ts only — never inside page methods
- Priority: getByRole > getByLabel > getByText > getByTestId > CSS
- Never use CSS selectors like .class or #id unless absolutely no alternative

PAGES:
- Extend BasePage, import locators from @locators/
- Methods describe user intent: loginAndWaitForDashboard(), not clickButton()
- Return data for tests to assert — never call expect() inside page objects
- Rename: getToastText() not waitForToast() — it's a reader, not an assertion

TESTS:
- Never new PageObject(page) inside tests — use fixtures: async ({ loginPage }) =>
- All expect() assertions live here, not in pages or components
- Tag every test: 'admin can login @smoke @auth @critical'

DATA:
- Creating records → DataFactory.user(), DataFactory.email()
- Reading existing → TEST_USERS.ADMIN from @test-data/users.data

WAITS:
- Never page.waitForTimeout() — use @utils/wait.helpers
- ✅ waitForNetworkIdle(page), waitForApiResponse(page, url, action)
- ✅ waitForElementToDisappear(locator), pollUntil(condition)
```

---

## Project Overview

Enterprise Playwright E2E automation — TypeScript, UI + API tests, multi-environment.
Used by a real QA team with multiple contributors.

---

## Folder Map

| Folder | Owns | Never contains |
|--------|------|----------------|
| `tests/` | `test()` blocks, `expect()` assertions | Page constructors, locators |
| `pages/` | User action methods, state readers | Locators, `expect()`, `new Page()` |
| `locators/` | All Playwright selectors | Logic of any kind |
| `components/` | Reusable UI wrappers (Table, Modal) | Page-specific logic |
| `fixtures/` | `test.extend()` definitions | Test logic |
| `api-services/` | HTTP methods, typed responses | Assertions, UI code |
| `utils/` | Pure helpers: wait, logger, faker, url | Framework config |
| `hooks/` | Reusable before/after logic | Test assertions |
| `constants/` | `ROUTES`, `TAGS`, `TIMEOUTS`, `HTTP_STATUS` | Mutable state |
| `test-data/` | Static data, data-driven arrays | Generated/dynamic data |
| `config/` | Playwright setup files | Business logic |
| `environments/` | `.env.*` files, environment manager | Test logic |

---

## Non-Negotiable Rules (with examples)

### 1. Import `test` from fixture — not Playwright

```typescript
// ✅
import { test, expect } from '@fixtures/test.fixture';

// ❌ breaks fixture injection
import { test, expect } from '@playwright/test';
```

### 2. Locators live in `locators/` only

```typescript
// ✅ locators/login.locators.ts
get signInButton() {
  return this.page.getByRole('button', { name: /sign in/i });
}

// ✅ pages/login.page.ts imports the locator
import { LoginLocators } from '@locators/login.locators';

// ❌ locator defined inline inside page method
async clickLogin() {
  await this.page.locator('.btn-login').click();
}
```

### 3. No `expect()` outside test files

```typescript
// ✅ test file asserts
const msg = await loginPage.getErrorMessage();
expect(msg).toContain('Invalid credentials');

// ✅ page method is a reader — returns data, does not assert
async getErrorMessage(): Promise<string> {
  return (await this.locators.errorAlert.textContent()) ?? '';
}

// ❌ assertion inside page object
async assertErrorVisible() {
  await expect(this.locators.errorAlert).toBeVisible(); // NO
}
```

### 4. No page instantiation inside tests

```typescript
// ✅ fixture injection
test('login works', async ({ loginPage }) => { ... });

// ❌ manual construction
test('login works', async ({ page }) => {
  const loginPage = new LoginPage(page); // NO
});
```

### 5. No hardcoded waits

```typescript
// ✅
import { waitForNetworkIdle } from '@utils/wait.helpers';
await waitForNetworkIdle(page);

// ❌
await page.waitForTimeout(2000);
```

### 6. Dynamic data for writes, static data for reads

```typescript
// ✅ creating → unique per run, no collision in parallel
const user = DataFactory.user({ role: 'admin' });

// ✅ reading existing fixture user
const { email, password } = TEST_USERS.ADMIN;

// ❌ hardcoded email collides across parallel tests
email: 'test@test.com'
```

---

## Locator Priority

```
1. getByRole()     ← best: resilient, accessibility-aligned
2. getByLabel()    ← great for form fields
3. getByText()     ← OK for static content
4. getByTestId()   ← agree data-testid with devs
5. locator('css')  ← last resort only
```

---

## Allowed Test Tags

Append to test name string — no inventing new ones:

| Tag | When |
|-----|------|
| `@smoke` | Critical path — runs every PR |
| `@regression` | Full suite — nightly + merge to main |
| `@sanity` | Post-deploy quick check |
| `@critical` | P0 — alert team on failure |
| `@auth` | Authentication flows |
| `@api` | API-only (no browser) |
| `@ui` | Browser UI tests |
| `@slow` | > 30s — flag for optimisation |
| `@wip` | In progress — excluded from CI |

```typescript
test('admin can login @smoke @auth @critical', async ({ loginPage }) => {
```

---

## Path Aliases

Always use aliases for cross-folder imports:

```typescript
import { test, expect }      from '@fixtures/test.fixture';
import { LoginPage }         from '@pages/login.page';
import { LoginLocators }     from '@locators/login.locators';
import { TableComponent }    from '@components/table.component';
import { AuthApiService }    from '@api-services/auth.api.service';
import { waitForNetworkIdle } from '@utils/wait.helpers';
import { DataFactory }       from '@utils/data.factory';
import { TEST_USERS }        from '@test-data/users.data';
import { ROUTES, TIMEOUTS }  from '@constants';
import { mockFeatureFlags }  from '@hooks/network-intercept.hooks';
```

Aliases are defined in `tsconfig.json`, resolved at runtime via `tsconfig-paths`.

---

## How to Add a New Page

```
1. locators/my-feature.locators.ts   ← add all selectors
2. pages/my-feature.page.ts          ← extend BasePage, import locators
3. fixtures/test.fixture.ts          ← add fixture: myFeaturePage: async ({ page }, use) => ...
4. pages/index.ts + locators/index.ts ← export from barrel
5. tests/ui/my-feature.spec.ts       ← write tests
```

## How to Add a New API Service

```
1. api-services/my-resource.api.service.ts  ← extend BaseApiService, define types at top
2. api-services/index.ts                    ← export from barrel
3. fixtures/test.fixture.ts                 ← add fixture if needed in tests
```

---

## Anti-Patterns — Never Generate These

```typescript
// ❌ hardcoded wait
await page.waitForTimeout(3000);

// ❌ CSS selector
await page.locator('.form > div:nth-child(2) > button').click();

// ❌ locator inside page method
async clickSubmit() { await this.page.locator('#submit').click(); }

// ❌ assertion inside page object or component
async assertLoggedIn() { await expect(this.page).toHaveURL('/dashboard'); }

// ❌ importing test from Playwright directly
import { test } from '@playwright/test';

// ❌ constructing page object in test
const loginPage = new LoginPage(page);

// ❌ duplicating a locator that already exists
// → import it, don't copy it

// ❌ static email in test data
email: 'test@test.com'  // collides across parallel tests

// ❌ relative cross-folder import
import { LoginPage } from '../../pages/login.page';
```

---

## AI Prompt Template

Use this when asking AI to generate new feature coverage:

```
Context: Playwright enterprise framework. Rules in CLAUDE.md.

Task: Generate test coverage for [feature name].
- Page URL: /your-path
- User flows to cover: [list them]
- Tags: @smoke, @regression

Generate in order:
1. locators/your-feature.locators.ts
2. pages/your-feature.page.ts
3. tests/ui/your-feature.spec.ts

Follow all rules in CLAUDE.md. No relative imports. No expect() in pages.
```
