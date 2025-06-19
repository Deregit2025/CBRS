import { test, expect } from '@playwright/test';
import { login as makerLogin } from '../../../pages/bankPortal/maker/login.page.js';
import { loginChecker } from '../../../pages/bankPortal/checker/login.page.js';
import { logout } from '../../../pages/bankPortal/shared/logout.page.js';
import { LoanProductsPage } from '../../../pages/bankPortal/maker/loanProducts.page.js';
import { approveInterestRate } from '../../../pages/bankPortal/checker/approve.page.js';

function generateRandomInterestRate() {
  return (Math.random() * (20 - 5) + 5).toFixed(2); // range: 5% to 20%
}

test('End-to-end: Update interest rate and approve', async ({ page }) => {
  //  Login as Maker
  await makerLogin(page);
  const loanProductsPage = new LoanProductsPage(page);
  await loanProductsPage.navigateTo();
  await loanProductsPage.filterByStatus('Approved');

  //  Select and update loan product
  await loanProductsPage.clickFirstLoanCard();
  await page.getByRole('button', { name: 'Update Loan', exact: true }).click();

  const newInterest = generateRandomInterestRate();
  await page.getByPlaceholder('Enter interest rate').first().click();
  await page.getByPlaceholder('Enter interest rate').fill(newInterest);
  await page.getByRole('button', { name: 'Update Interest Rates' }).click();
  //  Logout Maker
  await logout(page);

  //  Login as Checker
  await loginChecker(page);
  const approvePage = new approveInterestRate(page);
  await approvePage.navigateToPending();
  await approvePage.approveLoanProduct('Loan Product'); // You can pass part of the product name here
});
