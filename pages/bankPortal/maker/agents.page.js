// pages/bankPortal/maker/agents.page.js
import { expect } from "@playwright/test";

export class agentsPage {
  constructor(page) {
    this.page = page;
    this.agentMenu = page.getByRole("link", { name: "Agents" });
    this.searchInput = page.getByPlaceholder("Search by name, phone number");
    this.tbody = page.locator("tbody");

    // Agent creation form selectors
    this.createButton = page.getByRole("button", { name: "Add Agent" });
    this.nameInput = page.getByLabel("Agent Name");
    this.phoneInput = page.getByLabel("Phone Number");
    this.emailInput = page.getByLabel("Email");
    this.bankNameInput = page.getByLabel("Bank Name");
    this.accountNumberInput = page.getByLabel("Account Number");
    this.tinInput = page.getByLabel("TIN");
    this.licenseInput = page.getByLabel("License Number");
    this.cityInput = page.getByRole("textbox", { name: "City", exact: true });
    this.regionInput = page.getByLabel("Region");
    this.zoneInput = page.getByLabel("Zone");
    this.woredaInput = page.getByLabel("Woreda");
    this.kebeleInput = page.getByLabel("Kebele");
    this.houseNumberInput = page.getByRole("textbox", { name: "House No", exact: true });
    this.frontUpload = page.locator('input[type="file"]').first();
    this.backUpload = page.locator('input[type="file"]').nth(1);
    //this.livePhotoUpload = page.locator('input[type="file"]').nth(2);
    //this.signatureUpload = page.locator('input[type="file"]').nth(3);
    this.saveButton = page.locator('xpath=/html/body/main/form/div[8]/button');

    // toggle button for a specific user row identified by user info
    this.toggleButtonCell = this.page.locator('xpath=/html/body/main/div[3]/div/div[1]/div/div/div/table/tbody/tr[3]/td[9]/div/span[2]');

    this.confirmButton = this.page.getByRole('button', { name: 'Yes' });
  }

  async navigate() {
    await this.agentMenu.click();
    // await expect(this.page).toHaveURL(/.*agents/);
  }

  async searchByName(name, shouldExist = true) {
    await this.searchInput.fill(name);
    if (shouldExist) {
      await expect(this.tbody).toContainText(name);
    } else {
      await expect(this.tbody).not.toContainText(name);
    }
  }

  async searchByEmailOrPhone(value, shouldExist = true) {
    await this.searchInput.fill(value);
    if (shouldExist) {
      await expect(this.tbody).toContainText(value);
    } else {
      await expect(this.tbody).not.toContainText(value);
    }
  }

  async createAgent(agentData) {
    await this.createButton.click();
    await this.nameInput.fill(agentData.agentName);
    await this.phoneInput.fill(agentData.agentPhoneNumber);
    await this.emailInput.fill(agentData.agentEmail);
    await this.bankNameInput.fill(agentData.agentBankName);
    await this.accountNumberInput.fill(agentData.agentAccountNumber);
    await this.tinInput.fill(agentData.agentTinNumber);
    await this.licenseInput.fill(agentData.agentLicenseNumber);
    await this.cityInput.fill(agentData.agentCity);
    await this.regionInput.fill(agentData.agentRegion);
    await this.zoneInput.fill(agentData.agentZone);
    await this.woredaInput.fill(agentData.agentWoreda);
    await this.kebeleInput.fill(agentData.agentKebele);
    await this.houseNumberInput.fill(agentData.agentHouseNumber);
    await this.frontUpload.setInputFiles(agentData.agentFrontPage);
    await this.backUpload.setInputFiles(agentData.agentBackPage);
    // await this.livePhotoUpload.setInputFiles(agentData.agentLivePhoto);
    // await this.signatureUpload.setInputFiles(agentData.agentSignature);
    await this.saveButton.click();
  }

  async createUserWithInvalidName(agentData) {
    await this.createButton.click();
    await this.nameInput.fill(agentData.agentName);
    await this.phoneInput.fill(agentData.agentPhoneNumber);
    await this.emailInput.fill(agentData.agentEmail);
    await this.saveButton.click();
  }

  async createUserWithInvalidPhone(agentData) {
    await this.createButton.click();
    await this.nameInput.fill(agentData.agentName);
    await this.phoneInput.fill(agentData.agentPhoneNumber);
    await this.emailInput.fill(agentData.agentEmail);
    await this.saveButton.click();
  }

  async createUserWithInvalidEmail(agentData) {
    await this.createButton.click();
    await this.nameInput.fill(agentData.agentName);
    await this.phoneInput.fill(agentData.agentPhoneNumber);
    await this.emailInput.fill(agentData.agentEmail);
    await this.saveButton.click();
  }

  async createUserWithInvalidBankName(agentData) {
    await this.createButton.click();
    await this.nameInput.fill(agentData.agentName);
    await this.phoneInput.fill(agentData.agentPhoneNumber);
    await this.emailInput.fill(agentData.agentEmail);
    await this.bankNameInput.fill(agentData.agentBankName);
    await this.saveButton.click();
  }

  async createUserWithInvalidAccountNumber(agentData) {
    await this.createButton.click();
    await this.nameInput.fill(agentData.agentName);
    await this.phoneInput.fill(agentData.agentPhoneNumber);
    await this.emailInput.fill(agentData.agentEmail);
    await this.bankNameInput.fill(agentData.agentBankName);
    await this.accountNumberInput.fill(agentData.agentAccountNumber);
    await this.saveButton.click();
  }

  userRowByEmail(email) {
    return this.page.locator("tbody tr", { hasText: email });
  }
    toggleButtonCellByEmail(email) {
    return this.userRowByEmail(email).locator("td").nth(8);
  }
async toggleUserByEmail(email) {
    await this.page.locator('tbody tr:visible').filter({ hasText: /./ }).first().waitFor({ state: 'visible', timeout: 15000 });
    const toggleButtonCell = this.toggleButtonCellByEmail(email);
    await toggleButtonCell.waitFor({ state: "visible", timeout: 10000 });

    await toggleButtonCell.click();
    await this.confirmButton.click();
    await this.page.waitForTimeout(1000);

    await toggleButtonCell.click();
    await this.confirmButton.click();
    await this.page.waitForTimeout(1000);
  }
}




