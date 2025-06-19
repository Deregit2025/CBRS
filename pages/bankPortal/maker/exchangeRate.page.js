export class ExchangeRatePage {
  constructor(page) {
    this.page = page;
    this.exchangeRateLink = page.getByRole('link', { name: 'Exchange Rate Set exchange' });
    this.searchInput = page.getByPlaceholder('Search by name');
    this.tableBody = page.locator('tbody');
    this.addExchangeRateButton = page.getByRole('button', { name: 'Add Exchange Rate' });
    this.fromCurrencyDropdown = page.getByRole('button', { name: 'From Currency Select Currency' });
    this.toCurrencyDropdown = page.getByRole('button', { name: 'To Currency To Currency' });
    this.exchangeRateInput = page.getByRole('spinbutton', { name: 'Exchange Rate' });
    this.addButton = page.getByRole('button', { name: 'Add', exact: true });
  }

  async navigateToExchangeRatePage() {
    await this.exchangeRateLink.click();
  }

  async searchCurrency(name) {
    await this.searchInput.fill(name);
  }

  async editExchangeRate(currencyName, newRate) {
    const row = this.page.getByRole('row', { name: currencyName });
    await row.getByRole('button').click();
    await this.exchangeRateInput.fill(newRate);
    await this.addButton.click();
  }

  async addExchangeRate(from, to, rate) {
    await this.addExchangeRateButton.click();

    await this.fromCurrencyDropdown.click();
    await this.page.getByRole('option', { name: from }).first().click();

    await this.toCurrencyDropdown.click();
    await this.page.getByRole('option', { name: to }).first().click();

    await this.exchangeRateInput.fill(rate);
    await this.addButton.click();
  }

  async toggleExchangeRateStatus(rowText) {
  const row = this.page.getByRole('row', { name: rowText });
  await row.locator('span').nth(2).click();
  await this.page.getByRole('button', { name: 'Yes' }).click();
}

}
