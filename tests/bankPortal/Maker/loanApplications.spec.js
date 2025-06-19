import { test, expect } from '@playwright/test';
import { login } from '../../../pages/bankPortal/maker/login.page.js';
import { LoanApplicationsPage } from '../../../pages/bankPortal/maker/loanApplications.page.js';
import { loanAppTestData } from '../../../testData/bankPortalTestData/loanApplicationsData.js';

test.describe('Loan Applications Page Tests', () => {

  test.beforeEach(async ({ page }) => {
    await login(page);
  });

  // ✅ Valid search terms should be found
  for (const name of loanAppTestData.search.valid) {
    test(`✅ Should find loan for valid search term: "${name}"`, async ({ page }) => {
      const loanPage = new LoanApplicationsPage(page);
      await loanPage.navigateToLoanApplications();
      await loanPage.searchByNameOrPhone(name);
      await loanPage.assertTextInTable(name);
      await loanPage.clearSearchField();
    });
  }

  // ❌ Invalid search terms should NOT be found
  for (const name of loanAppTestData.search.invalid) {
    test(`❌ Should NOT find loan for invalid search term: "${name}"`, async ({ page }) => {
      const loanPage = new LoanApplicationsPage(page);
      await loanPage.navigateToLoanApplications();
      await loanPage.searchByNameOrPhone(name);
      await expect(loanPage.page.locator('tbody')).not.toContainText(new RegExp(name, 'i'));
      await loanPage.clearSearchField();
    });
  }

  // 🔁 Test filtering by each loan type
  for (const type of loanAppTestData.loanTypes) {
    test(`🔁 Filter by loan type: ${type}`, async ({ page }) => {
      const loanPage = new LoanApplicationsPage(page);
      await loanPage.navigateToLoanApplications();
      await loanPage.selectLoanType(type);
      await loanPage.assertTextInTable(type);
    });
  }

  // 🔁 Test filtering by each application status
  for (const status of loanAppTestData.statuses) {
    test(`🔁 Filter by application status: ${status}`, async ({ page }) => {
      const loanPage = new LoanApplicationsPage(page);
      await loanPage.navigateToLoanApplications();
      await loanPage.selectStatus(status);
      await loanPage.assertApplicationStatusIs(status);
    });
  }

  // 📅 Filter by a specific date option
  test(`📅 Filter by date: ${loanAppTestData.dateOption}`, async ({ page }) => {
    const loanPage = new LoanApplicationsPage(page);
    await loanPage.navigateToLoanApplications();
    await loanPage.selectDate(loanAppTestData.dateOption);
    await loanPage.assertTextInTable(loanAppTestData.expectedDateInTable);
  });

  // 🔍 Open a specific loan row
  test(`🔍 Open loan details for: ${loanAppTestData.loanRows.rowText}`, async ({ page }) => {
    const loanPage = new LoanApplicationsPage(page);
    await loanPage.navigateToLoanApplications();
    await loanPage.openLoanByRowText(loanAppTestData.loanRow.rowText);
    await loanPage.assertInMain(loanAppTestData.loanRow.detailName);
  });
});
