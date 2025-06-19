import { test, expect } from '@playwright/test';
import { login } from '../../../pages/bankPortal/maker/login.page.js';
import { ActiveLoansPage } from '../../../pages/bankPortal/maker/activeLoans.page.js';
import { activeLoanTestData } from '../../../testData/bankPortalTestData/activeLoansData.js';

test.beforeEach(async ({ page }) => {
  await login(page);
});

test.describe('Search Active Loans by Name', () => {
  for (const { input, expected, isValid } of activeLoanTestData.searchByName) {
    test(`search by name: "${input}" (valid: ${isValid})`, async ({ page }) => {
      const loans = new ActiveLoansPage(page);
      await loans.navigateToActiveLoans();
      await loans.searchByName(input);

      if (isValid) {
        await expect(loans.tableBody).toContainText(expected);
      } else {
        // For invalid inputs, expect no results - adjust if you have a no-results message
        await expect(loans.tableBody).not.toContainText(input);
      }
    });
  }
});

test.describe('Search Active Loans by Loan Type', () => {
  for (const { type, expected} of activeLoanTestData.searchByLoanType) {
    test(`Search by loan type: "${type}"`, async ({ page }) => {
      const loans = new ActiveLoansPage(page);
      await loans.navigateToActiveLoans();
      await loans.searchByLoanType(type);
      await expect(loans.tableBody).not.toContainText(type);

    });
  }
});

test.describe('Search Active Loans by Date', () => {
  test(`search by date: "${activeLoanTestData.searchByDate.option}"`, async ({ page }) => {
    const loans = new ActiveLoansPage(page);
    await loans.navigateToActiveLoans();
    await loans.searchByDate(activeLoanTestData.searchByDate.option);

    // Wait for rows to be visible after filter applied
    await loans.firstRow.waitFor({ state: 'visible' });

    const rows = loans.allRows;
    const rowCount = await rows.count();
    console.log(`Found ${rowCount} row(s) after applying the date filter.`);

    for (let i = 0; i < rowCount; i++) {
      const dateCell = rows.nth(i).locator('td').nth(4);
      const text = await dateCell.innerText();
      console.log(`Row ${i + 1} date: ${text.trim()}`);
      await expect(text.trim()).toBe(activeLoanTestData.searchByDate.expected);
    }
  });
});
