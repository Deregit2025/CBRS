import { expect } from '@playwright/test';

export class LoanProductsPage {
  constructor(page) {
    this.page = page;
    this.menuLink = page.getByRole('link', { name: /Loans Products Create, manage/i });
    this.loanCardDivs = page.locator('div.group.relative.cursor-pointer.overflow-hidden.rounded-2xl.border.border-gray-100.bg-gray-50.transition-all.duration-300.hover\\:shadow-lg');
    this.addLoanButton = page.getByRole('button', { name: '+ Add Loan Product', exact: true });
  }

  async navigateTo() {
    await this.menuLink.click();
  }

  async filterByStatus(status) {
    await this.page.getByText(status, { exact: true }).click();
  }

  async validateCardsHaveStatus(expectedStatus) {
    const divs = await this.loanCardDivs.all();
    for (const div of divs) {
      const text = await div.textContent();
      expect(text?.trim().toUpperCase()).toBe(expectedStatus.toUpperCase());
    }
  }

  async getLoanProductCards() {
    return await this.loanCardDivs.all();
  }

  async clickFirstLoanCard() {
    await this.loanCardDivs.first().click();
  }

  async assertAvailableButtons(status) {
    const { page } = this;
    if (status === 'Approved' || status === 'Pending') {
      await expect(page.getByRole('button', { name: 'Disable Loan' })).toBeVisible();
      await expect(page.getByRole('button', { name: 'Update Loan' })).toBeVisible();
    } else if (status === 'Disabled') {
      await expect(page.getByRole('button', { name: 'Enable Loan' })).toBeVisible();
      await expect(page.getByRole('button', { name: 'Disable Loan' })).not.toBeVisible();
    } else if (status === 'Rejected') {
      await expect(page.getByRole('button', { name: 'Disable Loan' })).not.toBeVisible();
      await expect(page.getByRole('button', { name: 'Enable Loan' })).not.toBeVisible();
    }
  }

  async getTotalCountText() {
    return await this.page.getByText('Loan Products Available').textContent();
  }

  async getExpectedCountFromText(text) {
    const match = text?.match(/\d+/);
    return match ? parseInt(match[0], 10) : 0;
  }

  async assertTotalCountMatches() {
    const divs = await this.getLoanProductCards();
    const countText = await this.getTotalCountText();
    const expectedCount = await this.getExpectedCountFromText(countText);
    expect(divs.length).toBe(expectedCount);
  }
}








