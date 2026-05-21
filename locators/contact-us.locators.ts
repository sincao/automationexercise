import { Page } from '@playwright/test';

export class ContactUsLocators {
  constructor(private readonly page: Page) {}

  get nameInput() { return this.page.getByTestId('name'); }
  get emailInput() { return this.page.getByTestId('email'); }
  get subjectInput() { return this.page.getByTestId('subject'); }
  get messageTextArea() { return this.page.getByTestId('message'); }
  get uploadFileInput() { return this.page.locator('input[name="upload_file"]'); }
  get submitButton() { return this.page.getByTestId('submit-button'); }
  get successMsg() { return this.page.locator('.status.alert.alert-success'); }
  get homeButton() { return this.page.locator('#contact-page .btn-success'); }
  get getInTouchHeading() { return this.page.getByRole('heading', { name: /get in touch/i }); }
}
