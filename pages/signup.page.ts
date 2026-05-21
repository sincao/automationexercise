import { Page } from '@playwright/test';
import { BasePage } from '@pages/base.page';
import { SignupLocators } from '@locators/signup.locators';
import { UserData } from '@utils/data.factory';
import { logStep } from '@utils/logger';

export class SignupPage extends BasePage {
  private readonly locators: SignupLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new SignupLocators(page);
  }

  get path(): string { return '/login'; }

  async assertPageLoaded(): Promise<void> {
    await this.locators.signupNameInput.waitFor({ state: 'visible', timeout: 15_000 });
  }

  async fillInitialSignup(name: string, email: string) {
    logStep(`Signup with Name: ${name}, Email: ${email}`);
    await this.locators.signupNameInput.fill(name);
    await this.locators.signupEmailInput.fill(email);
    await this.locators.signupButton.click();
  }

  async fillAccountDetails(user: UserData) {
    logStep('Filling Account Information');
    if (user.title === 'Mr.') await this.locators.titleMr.check();
    else await this.locators.titleMrs.check();
    
    await this.locators.passwordInput.fill(user.password);
    await this.locators.daysSelect.selectOption(user.days);
    await this.locators.monthsSelect.selectOption(user.months);
    await this.locators.yearsSelect.selectOption(user.years);
    
    await this.locators.newsletterCheckbox.check();
    await this.locators.specialOffersCheckbox.check();
  }

  async fillAddressDetails(user: UserData) {
    logStep('Filling Address Information');
    await this.locators.firstNameInput.fill(user.firstName);
    await this.locators.lastNameInput.fill(user.lastName);
    await this.locators.companyInput.fill(user.company);
    await this.locators.address1Input.fill(user.address1);
    await this.locators.address2Input.fill(user.address2);
    await this.locators.countrySelect.selectOption(user.country);
    await this.locators.stateInput.fill(user.state);
    await this.locators.cityInput.fill(user.city);
    await this.locators.zipcodeInput.fill(user.zipCode);
    await this.locators.mobileNumberInput.fill(user.phone);
  }

  async clickCreateAccount() {
    logStep('Click Create Account');
    await this.locators.createAccountButton.click();
  }

  async clickContinue() {
    await this.locators.continueButton.click();
  }

  // ─── State Readers ────────────────────────────────────────────────────────
  
  getAccountCreatedMsgLocator() {
    return this.locators.accountCreatedMsg;
  }
}
