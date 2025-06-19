import { test, expect } from "@playwright/test";
import { agentsPage } from "../../../pages/bankPortal/maker/agents.page.js";
import { login } from "../../../pages/bankPortal/maker/login.page.js";
import { agentsTestData } from "../../../testData/bankPortalTestData/agentsTestData.js";

test.describe("Agents Module Tests", () => {
  test.beforeEach(async ({ page }) => {
    await login(page);
  });

  test("Search agent by name (should find)", async ({ page }) => {
    const agentsNewPage = new agentsPage(page);
    await agentsNewPage.navigate();
    await agentsNewPage.searchByName(agentsTestData.searchByName[0].input, true);
  });

  test("Search user by phone/email (should find)", async ({ page }) => {
    const agentsNewPage = new agentsPage(page);
    await agentsNewPage.navigate();

    for (const phoneTest of agentsTestData.searchByPhone) {
      await agentsNewPage.searchByEmailOrPhone(phoneTest.input, phoneTest.isValid);
    }

    for (const emailTest of agentsTestData.searchByEmail) {
      await agentsNewPage.searchByEmailOrPhone(emailTest.input, emailTest.isValid);
    }
  });

  test("Toggle user by email", async ({ page }) => {
    await login(page);
    const agents = new agentsPage(page);
    await agents.agentMenu.click();
    await agents.toggleUserByEmail("flipejone@gmail.com");
  });


  test("Create agent with valid input", async ({ page }) => {
    const agentsNewPage = new agentsPage(page);
    await agentsNewPage.navigate();
    await agentsNewPage.createAgent(agentsTestData.createAgent.input);
    await expect(agentsNewPage.tbody).toContainText(agentsTestData.createAgent.input.agentName);
  });

  //  Invalid Name Tests
  for (let i = 0; i < agentsTestData.invalidNameUsers.length; i++) {
    const agent = agentsTestData.invalidNameUsers[i];
    test(`Invalid Name #${i + 1}: ${agent.agentName}`, async ({ page }) => {
      const agentsNewPage = new agentsPage(page);
      await agentsNewPage.navigate();
      await agentsNewPage.createUserWithInvalidName(agent);
    });
  }

  // Invalid Phone Tests
  for (let i = 0; i < agentsTestData.invalidPhoneUsers.length; i++) {
    const agent = agentsTestData.invalidPhoneUsers[i];
    test(`Invalid Phone #${i + 1}: ${agent.agentPhoneNumber}`, async ({ page }) => {
      const agentsNewPage = new agentsPage(page);
      await agentsNewPage.navigate();
      await agentsNewPage.createUserWithInvalidPhone(agent);
    });
  }

  // Invalid Email Tests
  for (let i = 0; i < agentsTestData.invalidEmailUsers.length; i++) {
    const agent = agentsTestData.invalidEmailUsers[i];
    test(`Invalid Email #${i + 1}: ${agent.agentEmail}`, async ({ page }) => {
      const agentsNewPage = new agentsPage(page);
      await agentsNewPage.navigate();
      await agentsNewPage.createUserWithInvalidEmail(agent);
    });
  }
  // Invalid Bank Name Tests
  for (let i = 0; i < agentsTestData.invalidBankName.length; i++) {
    const agent = agentsTestData.invalidBankName[i];
    test(`Invalid Bank Name #${i + 1}: ${agent.agentBankName}`, async ({ page }) => {
      const agentsNewPage = new agentsPage(page);
      await agentsNewPage.navigate();
      await agentsNewPage.createUserWithInvalidBankName(agent);
    });
  }
  // Invalid account number Tests
    for (let i = 0; i < agentsTestData.invalidAccountNumber.length; i++) {
    const agent = agentsTestData.invalidAccountNumber[i];
    test(`Invalid Account Number  #${i + 1}: ${agent.agentAccountNumber}`, async ({ page }) => {
      const agentsNewPage = new agentsPage(page);
      await agentsNewPage.navigate();
      await agentsNewPage.createUserWithInvalidAccountNumber(agent);
    });
  }
});










