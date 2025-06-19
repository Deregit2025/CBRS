import { expect } from '@playwright/test';

export class approveInterestRate {
  constructor(page) {
    this.page = page;
    this.statusButton = page.getByRole('button', { name: 'Status' });
    this.pendingTab = page.getByText('Pending');
  }

  async navigateToPending() {
    await this.statusButton.click();
    await this.pendingTab.click();
  }

  async approveLoanProduct(rowName) {
    const row = this.page.getByRole('row', { name: new RegExp(rowName, 'i') });
    await row.getByRole('button').first().click();
    await this.page.getByRole('button', { name: 'Approve' }).click();
    await this.page.getByRole('button', { name: 'Approve' }).click(); // Confirmation
  }
}






