import { Page } from '@playwright/test';
import { BasePage } from '@pages/base.page';
import { ContactUsLocators } from '@locators/contact-us.locators';
import { logStep } from '@utils/logger';

export class ContactUsPage extends BasePage {
  private readonly locators: ContactUsLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new ContactUsLocators(page);
  }

  get path(): string { return '/contact_us'; }

  async assertPageLoaded(): Promise<void> {
    await this.locators.getInTouchHeading.waitFor({ state: 'visible' });
  }

  async fillForm(name: string, email: string, subject: string, message: string) {
    logStep('Filling Contact Us form');
    await this.locators.nameInput.fill(name);
    await this.locators.emailInput.fill(email);
    await this.locators.subjectInput.fill(subject);
    await this.locators.messageTextArea.fill(message);
  }

  async uploadFile(filePath: string) {
    logStep(`Uploading file: ${filePath}`);
    await this.locators.uploadFileInput.setInputFiles(filePath);
  }

  async submit() {
    logStep('Clicking submit on Contact Us form');
    // Automation Exercise uses a browser alert for confirmation
    this.page.once('dialog', async dialog => {
      logStep(`Dialog appeared: ${dialog.message()}`);
      await dialog.accept();
    });
    await this.locators.submitButton.click();
  }

  async getSuccessMessage(): Promise<string> {
    // Wait for the success message to be visible first
    await this.locators.successMsg.waitFor({ state: 'visible', timeout: 10_000 });
    return (await this.locators.successMsg.textContent()) ?? '';
  }

  async clickHome() {
    await this.locators.homeButton.click();
  }
}
