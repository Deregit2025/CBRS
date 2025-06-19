import { expect } from '@playwright/test'; 

export class LoanApplicationsPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToLoanApplications() {
    await this.page.getByRole('button', { name: 'Active Loans & Applications' }).click();
    await this.page.getByRole('link', { name: 'Loan Applications' }).click();
  }

  async searchByNameOrPhone(searchTerm) {
    await this.page.getByPlaceholder('Search by name or phone').click();
    await this.page.getByPlaceholder('Search by name or phone').fill(searchTerm);
  }

  async assertTextInTable(text) {
    await expect(this.page.locator('tbody')).toContainText(text); 
  }

  async clearSearchField() {
    await this.page.locator('label').getByRole('img').nth(1).click();
  }

  async selectLoanType(type) {
    await this.page.getByRole('button', { name: 'Loan Type' }).click();
    await this.page.getByRole('option', { name: type }).click();
  }

  async selectStatus(status) {
    await this.page.getByRole('button', { name: 'App Status' }).click();
    await this.page.getByRole('option', { name: status }).click();
  }

   

async assertApplicationStatusIs(expectedStatus) {
  const header = await this.page.getByRole('columnheader', { name: 'Application Status' }).elementHandle();
  if (!header) throw new Error('Application Status column header not found');

  const colIndex = await header.evaluate(el => 
    Array.from(el.parentElement.children).indexOf(el) + 1
  );

  const statusCells = this.page.locator(`table tbody tr td:nth-child(${colIndex})`);
  const timeout = 10000, pollInterval = 300, start = Date.now();

  while (true) {
    const count = await statusCells.count();
    let allValid = true;

    for (let i = 0; i < count; i++) {
      const text = (await statusCells.nth(i).innerText()).trim();
      if (text && text.toLowerCase() !== expectedStatus.toLowerCase()) {
        allValid = false;
        break;
      }
    }

    if (allValid) break;

    if (Date.now() - start > timeout) {
      throw new Error(`Timeout: Not all Application Status cells became "${expectedStatus}"`);
    }

    await this.page.waitForTimeout(pollInterval);
  }

  // Final strict check
  const finalCount = await statusCells.count();
  for (let i = 0; i < finalCount; i++) {
    const text = (await statusCells.nth(i).innerText()).trim();
    if (text) expect(text.toLowerCase()).toBe(expectedStatus.toLowerCase());
  }
}



 








  async selectDate(optionName) {
await this.page.getByRole('textbox', { name: 'By Date' }).click();
await this.page.getByRole('option', { name: optionName}).click();
  }

  async openLoanByRowText(rowText) {
    await this.page.getByRole('row', { name: rowText }).getByRole('button').click();
  }

  async assertInMain(text) {
    await expect(this.page.getByRole('main')).toContainText(text);
  }
}
