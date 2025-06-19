import { test, expect } from '@playwright/test';
import { login } from '../../../pages/bankPortal/maker/login.page';
import { ExchangeRatePage } from '../../../pages/bankPortal/maker/exchangeRate.page';
import { exchangeRateTestData } from '../../../testData/bankPortalTestData/exchangeRateTestData.js';

test.describe('Exchange Rate Module Tests', () => {
  test.beforeEach(async ({ page }) => {
    await login(page);
  });

  test('Edit Exchange Rate with valid values', async ({ page }) => {
    const exchange = new ExchangeRatePage(page);
    await exchange.navigateToExchangeRatePage();

    for (const testCase of exchangeRateTestData.editExchangeRateData) {
      await exchange.searchCurrency(testCase.currencyToSearch);
      await expect(exchange.tableBody).toContainText(testCase.currencyToSearch.toUpperCase());
      await exchange.editExchangeRate(testCase.currencyToSearch, testCase.newRate);
    }
  });

  test('Add Exchange Rate with valid values', async ({ page }) => {
    const exchange = new ExchangeRatePage(page);
    await exchange.navigateToExchangeRatePage();
    for (const testCase of exchangeRateTestData.addExchangeRateData) {
      await exchange.addExchangeRate(testCase.from, testCase.to, testCase.rate);
    }
  });

test('Disable and then Enable an Exchange Rate', async ({ page }) => {
  const exchange = new ExchangeRatePage(page);
  await exchange.navigateToExchangeRatePage();

  const rowText = 'USD ETB 1234567890 Mon, Jun';

  // Disable it
  await exchange.toggleExchangeRateStatus(rowText);

  // Enable it again
  await exchange.toggleExchangeRateStatus(rowText);
});
});
