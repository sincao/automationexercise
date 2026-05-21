import { test, expect } from '../../fixtures/test.fixture';
import { TAGS } from '../../constants';

test.describe('Products API', () => {
  test(`API 1: Get All Products List ${TAGS.API} ${TAGS.SMOKE}`, async ({ productApiService }) => {
    // Act
    const response = await productApiService.getAllProducts();

    // Assert
    expect(response.responseCode).toBe(200);
    expect(response.products.length).toBeGreaterThan(0);
    
    // Validate first product structure as a sample
    const firstProduct = response.products[0];
    expect(firstProduct).toHaveProperty('id');
    expect(firstProduct).toHaveProperty('name');
    expect(firstProduct).toHaveProperty('price');
    expect(firstProduct).toHaveProperty('brand');
    expect(firstProduct).toHaveProperty('category');
  });
});
