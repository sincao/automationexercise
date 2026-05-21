import { faker } from '@faker-js/faker';

/**
 * Centralised test-data factory.
 * Generates realistic, unique data for each test run — prevents cross-test data collisions.
 *
 * Usage:
 *   const user = DataFactory.user();
 *   const product = DataFactory.product({ price: 99.99 });
 */

// ─── Types ────────────────────────────────────────────────────────────────────

export interface UserData {
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  password: string;
  phone: string;
  username: string;
  title: 'Mr.' | 'Mrs.';
  days: string;
  months: string;
  years: string;
  company: string;
  address1: string;
  address2: string;
  country: string;
  state: string;
  city: string;
  zipCode: string;
}

export interface AddressData {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface ProductData {
  name: string;
  description: string;
  price: number;
  sku: string;
  category: string;
}

export interface CardData {
  number: string;
  expiry: string;
  cvv: string;
  holder: string;
}

// ─── Factory ──────────────────────────────────────────────────────────────────

export const DataFactory = {
  /**
   * Generate a random user.
   * @param overrides Partial overrides for specific fields.
   */
  user(overrides: Partial<UserData> = {}): UserData {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const timestamp = Date.now();

    return {
      firstName,
      lastName,
      fullName: `${firstName} ${lastName}`,
      email: `test.${firstName.toLowerCase()}.${timestamp}@example.com`,
      password: `Test${faker.internet.password({ length: 10 })}1!`,
      phone: faker.phone.number(),
      username: `${firstName.toLowerCase()}_${timestamp}`,
      title: faker.helpers.arrayElement(['Mr.', 'Mrs.']),
      days: faker.number.int({ min: 1, max: 28 }).toString(),
      months: faker.date.month(),
      years: faker.number.int({ min: 1970, max: 2000 }).toString(),
      company: faker.company.name(),
      address1: faker.location.streetAddress(),
      address2: faker.location.secondaryAddress(),
      country: 'India', // Expected by the site
      state: faker.location.state(),
      city: faker.location.city(),
      zipCode: faker.location.zipCode(),
      ...overrides,
    };
  },

  /**
   * Generate a random address.
   */
  address(overrides: Partial<AddressData> = {}): AddressData {
    return {
      street: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state(),
      zipCode: faker.location.zipCode(),
      country: 'United States',
      ...overrides,
    };
  },

  /**
   * Generate a random product.
   */
  product(overrides: Partial<ProductData> = {}): ProductData {
    return {
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: parseFloat(faker.commerce.price({ min: 1, max: 999 })),
      sku: `SKU-${faker.string.alphanumeric(8).toUpperCase()}`,
      category: faker.commerce.department(),
      ...overrides,
    };
  },

  /**
   * Generate a mock credit card (for test environments only).
   */
  card(overrides: Partial<CardData> = {}): CardData {
    return {
      number: '4111111111111111', // Stripe test Visa
      expiry: '12/30',
      cvv: '123',
      holder: faker.person.fullName(),
      ...overrides,
    };
  },

  /**
   * Generate a unique email with optional prefix.
   */
  email(prefix = 'test'): string {
    return `${prefix}.${Date.now()}@example.com`;
  },

  /**
   * Generate a unique test ID — useful for tagging test data.
   */
  testId(prefix = 'test'): string {
    return `${prefix}-${Date.now()}-${faker.string.alphanumeric(4)}`;
  },

  /**
   * Pick a random item from an array.
   */
  randomFrom<T>(items: T[]): T {
    return faker.helpers.arrayElement(items);
  },
};
