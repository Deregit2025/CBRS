
import { expect } from '@playwright/test';

export class ActiveLoansPage {
  constructor(page) {
    this.page = page;

    // Element locators
    this.tableBody = page.locator('tbody');
    this.firstRow = page.locator('tr.rc-table-row').first();
    this.allRows = page.locator('tr.rc-table-row');
  }

  async navigateToActiveLoans() {
    await this.page.getByRole('button', { name: 'Active Loans & Applications' }).click();
    await this.page.getByRole('link', { name: /active loan/i }).click(); // case-insensitive match
  }

  async searchByName(name) {
    const searchBox = this.page.getByPlaceholder('Search by Applicant Name');
    await searchBox.click();
    await searchBox.fill(name);
    await this.page.waitForTimeout(500); // small delay for table to refresh
  }

  async searchByLoanType(type) {
    await this.page.getByRole('button', { name: 'Loan Type' }).click();
    await this.page.getByRole('option', { name: new RegExp(type, 'i') }).click(); // flexible case match
    await this.page.waitForTimeout(500); // buffer after filter applied
  }

  async searchByDate(optionName) {
    await this.page.getByRole('textbox', { name: 'By Date' }).click();
    await this.page.getByRole('option', { name: optionName }).click();
    await this.page.waitForTimeout(500); // wait for table update
  }

  async assertAllRowsContainDate(expectedDateText) {
    const rowCount = await this.allRows.count();
    console.log(`Found ${rowCount} row(s) after applying the date filter.`);

    for (let i = 0; i < rowCount; i++) {
      const dateCell = this.allRows.nth(i).locator('td').nth(4); // adjust index if needed
      const text = (await dateCell.innerText()).trim();
      console.log(`Row ${i + 1} date: ${text}`);
      await expect(text).toBe(expectedDateText);
    }
  }
}
