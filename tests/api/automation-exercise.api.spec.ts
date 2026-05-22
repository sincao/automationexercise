import { test, expect } from '../../fixtures/test.fixture';
import { TAGS } from '../../constants';
import { DataFactory, UserData } from '../../utils/data.factory';

test.describe('Automation Exercise API List', () => {

  test(`API 2: POST To All Products List ${TAGS.API}`, async ({ productApiService }) => {
    const response = await productApiService.postProductsList();
    expect(response.responseCode).toBe(405);
    expect(response.message).toBe('This request method is not supported.');
  });

  test(`API 3: Get All Brands List ${TAGS.API}`, async ({ brandApiService }) => {
    const response = await brandApiService.getBrandsList();
    expect(response.responseCode).toBe(200);
    expect(response.brands.length).toBeGreaterThan(0);
    expect(response.brands[0]).toHaveProperty('id');
    expect(response.brands[0]).toHaveProperty('brand');
  });

  test(`API 4: PUT To All Brands List ${TAGS.API}`, async ({ brandApiService }) => {
    const response = await brandApiService.putBrandsList();
    expect(response.responseCode).toBe(405);
    expect(response.message).toBe('This request method is not supported.');
  });

  test(`API 5: POST To Search Product ${TAGS.API}`, async ({ productApiService }) => {
    const response = await productApiService.searchProduct('top');
    expect(response.responseCode).toBe(200);
    expect(response.products.length).toBeGreaterThan(0);
  });

  test(`API 6: POST To Search Product without search_product parameter ${TAGS.API}`, async ({ productApiService }) => {
    const response = await productApiService.searchProduct();
    expect(response.responseCode).toBe(400);
    expect(response.message).toBe('Bad request, search_product parameter is missing in POST request.');
  });

  test(`API 7: POST To Verify Login with valid details ${TAGS.API}`, async ({ userApiService }) => {
    // We need a real user. We'll create one first using API 11.
    const user = DataFactory.user();
    await userApiService.createAccount(mapUserToApi(user));

    const response = await userApiService.verifyLogin({ email: user.email, password: user.password });
    expect(response.responseCode).toBe(200);
    expect(response.message).toBe('User exists!');

    // Cleanup
    await userApiService.deleteAccount({ email: user.email, password: user.password });
  });

  test(`API 8: POST To Verify Login without email parameter ${TAGS.API}`, async ({ userApiService }) => {
    const response = await userApiService.verifyLogin({ password: 'password123' });
    expect(response.responseCode).toBe(400);
    expect(response.message).toBe('Bad request, email or password parameter is missing in POST request.');
  });

  test(`API 9: DELETE To Verify Login ${TAGS.API}`, async ({ userApiService }) => {
    const response = await userApiService.deleteVerifyLogin();
    expect(response.responseCode).toBe(405);
    expect(response.message).toBe('This request method is not supported.');
  });

  test(`API 10: POST To Verify Login with invalid details ${TAGS.API}`, async ({ userApiService }) => {
    const response = await userApiService.verifyLogin({ email: 'nonexistent@example.com', password: 'wrongpassword' });
    expect(response.responseCode).toBe(404);
    expect(response.message).toBe('User not found!');
  });

  test(`API 11: POST To Create/Register User Account ${TAGS.API}`, async ({ userApiService }) => {
    const user = DataFactory.user();
    const response = await userApiService.createAccount(mapUserToApi(user));
    expect(response.responseCode).toBe(201);
    expect(response.message).toBe('User created!');

    // Cleanup
    await userApiService.deleteAccount({ email: user.email, password: user.password });
  });

  test(`API 12: DELETE METHOD To Delete User Account ${TAGS.API}`, async ({ userApiService }) => {
    const user = DataFactory.user();
    await userApiService.createAccount(mapUserToApi(user));

    const response = await userApiService.deleteAccount({ email: user.email, password: user.password });
    expect(response.responseCode).toBe(200);
    expect(response.message).toBe('Account deleted!');
  });

  test(`API 13: PUT METHOD To Update User Account ${TAGS.API}`, async ({ userApiService }) => {
    const user = DataFactory.user();
    await userApiService.createAccount(mapUserToApi(user));

    const updatedUser = { ...user, fullName: 'Updated Name', company: 'Updated Company' };
    const response = await userApiService.updateAccount(mapUserToApi(updatedUser));
    expect(response.responseCode).toBe(200);
    expect(response.message).toBe('User updated!');

    // Cleanup
    await userApiService.deleteAccount({ email: user.email, password: user.password });
  });

  test(`API 14: GET user account detail by email ${TAGS.API}`, async ({ userApiService }) => {
    const user = DataFactory.user();
    await userApiService.createAccount(mapUserToApi(user));

    const response = await userApiService.getUserDetail(user.email);
    expect(response.responseCode).toBe(200);
    expect(response.user.email).toBe(user.email);
    expect(response.user.name).toBe(user.fullName);

    // Cleanup
    await userApiService.deleteAccount({ email: user.email, password: user.password });
  });

});

/**
 * Helper to map UserData from DataFactory to parameters expected by the API.
 */
function mapUserToApi(user: UserData): Record<string, string> {
  return {
    name: user.fullName,
    email: user.email,
    password: user.password,
    title: user.title,
    birth_date: user.days,
    birth_month: user.months,
    birth_year: user.years,
    firstname: user.firstName,
    lastname: user.lastName,
    company: user.company,
    address1: user.address1,
    address2: user.address2,
    country: user.country,
    zipcode: user.zipCode,
    state: user.state,
    city: user.city,
    mobile_number: user.phone,
  };
}
