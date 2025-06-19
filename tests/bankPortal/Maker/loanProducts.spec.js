import { test, expect } from '@playwright/test';
import { login } from '../../../pages/bankPortal/maker/login.page.js';
import { LoanProductsPage } from '../../../pages/bankPortal/maker/loanProducts.page.js';
import { loanProductsData } from '../../../testData/bankPortalTestData/loanProductsData.js';

test.describe('Loan Products Status Filtering', () => {
  for (const data of loanProductsData) {
    test(`Filter by ${data.status}`, async ({ page }) => {
      await login(page);
      const loanProductsPage = new LoanProductsPage(page);

      await loanProductsPage.navigateTo();
      await loanProductsPage.filterByStatus(data.status);

      if (Array.isArray(data.expected)) {
        const divs = await loanProductsPage.getLoanProductCards();
        for (const div of divs) {
          const text = await div.textContent();
          expect(data.expected.map(e => e.toUpperCase())).toContain(text?.trim().toUpperCase());
        }
      } else {
        await loanProductsPage.validateCardsHaveStatus(data.expected);
      }
    });
  }
});

test('Total number of available loan products matches displayed count', async ({ page }) => {
  await login(page);
  const loanProductsPage = new LoanProductsPage(page);
  await loanProductsPage.navigateTo();
  await loanProductsPage.filterByStatus('All');
  await loanProductsPage.assertTotalCountMatches();
});

test('Check enable/disable/update buttons for Approved', async ({ page }) => {
  await login(page);
  const loanProductsPage = new LoanProductsPage(page);
  await loanProductsPage.navigateTo();
  await loanProductsPage.filterByStatus('Approved');

  const divs = await loanProductsPage.getLoanProductCards();
  for (const div of divs) {
    const text = await div.textContent();
    if (text && text.includes('Approved')) {
      await div.click();
      await loanProductsPage.assertAvailableButtons('Approved');
      break;
    }
  }
});

test('Check enable/disable/update buttons for Pending', async ({ page }) => {
  await login(page);
  const loanProductsPage = new LoanProductsPage(page);
  await loanProductsPage.navigateTo();
  await loanProductsPage.filterByStatus('Pending');

  const divs = await loanProductsPage.getLoanProductCards();
  for (const div of divs) {
    const text = await div.textContent();
    if (text && text.includes('PENDING')) {
      await div.click();
      await loanProductsPage.assertAvailableButtons('Pending');
      break;
    }
  }
});

test('Check enable/disable/update buttons for Disabled', async ({ page }) => {
  await login(page);
  const loanProductsPage = new LoanProductsPage(page);
  await loanProductsPage.navigateTo();
  await loanProductsPage.filterByStatus('Disabled');

  const divs = await loanProductsPage.getLoanProductCards();
  for (const div of divs) {
    const text = await div.textContent();
    if (text && text.includes('DISABLED')) {
      await div.click();
      await loanProductsPage.assertAvailableButtons('Disabled');
      break;
    }
  }
});

test('Check enable/disable/update buttons for Rejected', async ({ page }) => {
  await login(page);
  const loanProductsPage = new LoanProductsPage(page);
  await loanProductsPage.navigateTo();
  await loanProductsPage.filterByStatus('Rejected');

  const divs = await loanProductsPage.getLoanProductCards();
  for (const div of divs) {
    const text = await div.textContent();
    if (text && text.includes('REJECTED')) {
      await div.click();
      await loanProductsPage.assertAvailableButtons('Rejected');
      break;
    }
  }
});


