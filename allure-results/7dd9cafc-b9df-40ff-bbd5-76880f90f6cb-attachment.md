# Test info

- Name: Agents Module Tests >> should toggle agent
- Location: C:\Users\derej\Desktop\Connect\tests\bankPortal\Maker\agents.spec.js:30:3

# Error details

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('row').filter({ hasText: '575083' }).filter({ hasText: 'flipe jone' }).filter({ hasText: 'flipejone@gmail.com' }).locator('td:nth-child(9)')

    at agentsPage.toggleUserStatusByName (C:\Users\derej\Desktop\Connect\pages\bankPortal\maker\agents.page.js:67:33)
    at C:\Users\derej\Desktop\Connect\tests\bankPortal\Maker\agents.spec.js:32:23
```

# Page snapshot

```yaml
- main:
  - img "Sign In Thumbnail"
  - img "logo"
  - img "cbenewmaker"
  - heading "cbenewmaker cbenewbank" [level=6]
  - paragraph: cbenewmaker@gmail.com
  - heading "👋 Welcome to Connect 's Bank Portal!" [level=4]
  - paragraph: Easily manage and monitor all transactions, track overall activities seamlessly.
  - link "Statistical Info. Statistical Info. Get a comprehensive overview of your account activities and key insights.":
    - /url: /dashboard
    - img "Statistical Info."
    - heading "Statistical Info." [level=5]
    - paragraph: Get a comprehensive overview of your account activities and key insights.
    - button:
      - img
  - link "Transactions Transactions Monitor and manage all transaction activities conducted for different transactions":
    - /url: /bank-transactions
    - img "Transactions"
    - heading "Transactions" [level=5]
    - paragraph: Monitor and manage all transaction activities conducted for different transactions
    - button:
      - img
  - link "Reports Reports View all the completed transaction lists of your customers.":
    - /url: /bank-report
    - img "Reports"
    - heading "Reports" [level=5]
    - paragraph: View all the completed transaction lists of your customers.
    - button:
      - img
  - heading "Action Menus" [level=6]
  - paragraph: Select action from the listed action menus based on the action you want to do.
  - link "Users Create and manage users within this admin portal.":
    - /url: /users
    - img
    - heading "Users" [level=6]
    - paragraph: Create and manage users within this admin portal.
  - link "Exchange Rate Set exchange rates for your bank across currencies. Include all rates between each currency pair.":
    - /url: /exchange-rates
    - img
    - heading "Exchange Rate" [level=6]
    - paragraph: Set exchange rates for your bank across currencies. Include all rates between each currency pair.
  - button "Active Loans & Applications Monitor all loan applications and repayments from Connect app users.":
    - img
    - heading "Active Loans & Applications" [level=6]
    - paragraph: Monitor all loan applications and repayments from Connect app users.
  - link "Loans Products Create, manage, and update the loan products offered by your bank on the app.":
    - /url: /loan-products
    - img
    - heading "Loans Products" [level=6]
    - paragraph: Create, manage, and update the loan products offered by your bank on the app.
  - link "Loan Terms & Conditions Outline the key details and obligations of the loan agreement a user should read when applying for a loan.":
    - /url: /bank-term-condition
    - img
    - heading "Loan Terms & Conditions" [level=6]
    - paragraph: Outline the key details and obligations of the loan agreement a user should read when applying for a loan.
  - link "Agents Create and manage agents who provide transfer services to users.":
    - /url: /agents
    - img
    - heading "Agents" [level=6]
    - paragraph: Create and manage agents who provide transfer services to users.
  - link "Merchant Create, manage, and update merchants.":
    - /url: /merchants
    - img
    - heading "Merchant" [level=6]
    - paragraph: Create, manage, and update merchants.
  - heading "Daily Exchange Rate" [level=6]
  - heading "Currency" [level=6]
  - heading "Rate" [level=6]
  - heading "Status" [level=6]
  - img "flags"
  - heading "USD" [level=6]
  - heading "To" [level=6]
  - img "flags"
  - heading "ETB" [level=6]
  - heading "1,234,567,890.00" [level=6]
  - img
  - img "flags"
  - heading "EUR" [level=6]
  - heading "To" [level=6]
  - img "flags"
  - heading "ETB" [level=6]
  - heading "151.20" [level=6]
  - img
  - img "flags"
  - heading "AUD" [level=6]
  - heading "To" [level=6]
  - img "flags"
  - heading "ETB" [level=6]
  - heading "85.63" [level=6]
  - img
  - img "flags"
  - heading "SAR" [level=6]
  - heading "To" [level=6]
  - img "flags"
  - heading "AUD" [level=6]
  - heading "44.00" [level=6]
  - img
  - img "flags"
  - heading "BRL" [level=6]
  - heading "To" [level=6]
  - img "flags"
  - heading "USD" [level=6]
  - heading "2.00" [level=6]
  - img
  - heading "Currency" [level=6]
  - heading "Rate" [level=6]
  - heading "Status" [level=6]
  - img "flags"
  - heading "SAR" [level=6]
  - heading "To" [level=6]
  - img "flags"
  - heading "ETB" [level=6]
  - heading "25.00" [level=6]
  - img
  - img "flags"
  - heading "GBP" [level=6]
  - heading "To" [level=6]
  - img "flags"
  - heading "USD" [level=6]
  - heading "11.00" [level=6]
  - img
  - img "flags"
  - heading "AFN" [level=6]
  - heading "To" [level=6]
  - img "flags"
  - heading "SAR" [level=6]
  - heading "2.00" [level=6]
  - img
  - img "flags"
  - heading "AUD" [level=6]
  - heading "To" [level=6]
  - img "flags"
  - heading "SAR" [level=6]
  - heading "20.00" [level=6]
  - img
  - img "flags"
  - heading "AUD" [level=6]
  - heading "To" [level=6]
  - img "flags"
  - heading "GBP" [level=6]
  - heading "12.00" [level=6]
  - img
  - text: Copyright © 2025 CONNECT System | EagleLion System Technology. All rights reserved.
- region "Notifications alt+T"
- alert
```

# Test source

```ts
   1 | // pages/bankPortal/maker/agents.page.js
   2 | import { expect } from "@playwright/test";
   3 |
   4 | export class agentsPage {
   5 |   constructor(page) {
   6 |     this.page = page;
   7 |     this.agentMenu = page.getByRole("link", { name: "Agents" });
   8 |     this.searchInput = page.getByPlaceholder("Search by name, phone number");
   9 |     this.tbody = page.locator("tbody");
   10 |
   11 |     // Agent creation form selectors
   12 |     this.createButton = page.getByRole("button", { name: "Add Agent" });
   13 |     this.nameInput = page.getByLabel("Agent Name");
   14 |     this.phoneInput = page.getByLabel("Phone Number");
   15 |     this.emailInput = page.getByLabel("Email");
   16 |     this.bankNameInput = page.getByLabel("Bank Name");
   17 |     this.accountNumberInput = page.getByLabel("Account Number");
   18 |     this.tinInput = page.getByLabel("TIN");
   19 |     this.licenseInput = page.getByLabel("License Number");
   20 |     this.cityInput = page.getByRole("textbox", { name: "City", exact: true });
   21 |     this.regionInput = page.getByLabel("Region");
   22 |     this.zoneInput = page.getByLabel("Zone");
   23 |     this.woredaInput = page.getByLabel("Woreda");
   24 |     this.kebeleInput = page.getByLabel("Kebele");
   25 |     this.houseNumberInput = page.getByRole("textbox", { name: "House No", exact: true });
   26 |     this.frontUpload = page.locator('input[type="file"]').first();
   27 |     this.backUpload = page.locator('input[type="file"]').nth(1);
   28 |     //this.livePhotoUpload = page.locator('input[type="file"]').nth(2);
   29 |     //this.signatureUpload = page.locator('input[type="file"]').nth(3);
   30 |     this.saveButton = page.locator('xpath=/html/body/main/form/div[8]/button');
   31 |
   32 |     // toggle button for a specific user row identified by user info
   33 |     this.toggleButtonCell = this.page
   34 |       .getByRole('row')
   35 |       .filter({ hasText: '575083' })
   36 |       .filter({ hasText: 'flipe jone' })
   37 |       .filter({ hasText: 'flipejone@gmail.com' })
   38 |       .locator('td:nth-child(9)');
   39 |
   40 |     this.confirmButton = this.page.getByRole('button', { name: 'Yes' });
   41 |   }
   42 |
   43 |   async navigate() {
   44 |     await this.agentMenu.click();
   45 |     // await expect(this.page).toHaveURL(/.*agents/);
   46 |   }
   47 |
   48 |   async searchByName(name, shouldExist = true) {
   49 |     await this.searchInput.fill(name);
   50 |     if (shouldExist) {
   51 |       await expect(this.tbody).toContainText(name);
   52 |     } else {
   53 |       await expect(this.tbody).not.toContainText(name);
   54 |     }
   55 |   }
   56 |
   57 |   async searchByEmailOrPhone(value, shouldExist = true) {
   58 |     await this.searchInput.fill(value);
   59 |     if (shouldExist) {
   60 |       await expect(this.tbody).toContainText(value);
   61 |     } else {
   62 |       await expect(this.tbody).not.toContainText(value);
   63 |     }
   64 |   }
   65 |
   66 |   async toggleUserStatusByName() {
>  67 |     await this.toggleButtonCell.click();
      |                                 ^ Error: locator.click: Test timeout of 30000ms exceeded.
   68 |     await confirm.click();
   69 |
   70 |     await this.page.waitForTimeout(1000);
   71 |     // Click again to re-enable if needed
   72 |     await this.toggleButtonCell.click();
   73 |     await confirm.click();
   74 |   }
   75 |
   76 |   async createAgent(agentData) {
   77 |     await this.createButton.click();
   78 |     await this.nameInput.fill(agentData.agentName);
   79 |     await this.phoneInput.fill(agentData.agentPhoneNumber);
   80 |     await this.emailInput.fill(agentData.agentEmail);
   81 |     await this.bankNameInput.fill(agentData.agentBankName);
   82 |     await this.accountNumberInput.fill(agentData.agentAccountNumber);
   83 |     await this.tinInput.fill(agentData.agentTinNumber);
   84 |     await this.licenseInput.fill(agentData.agentLicenseNumber);
   85 |     await this.cityInput.fill(agentData.agentCity);
   86 |     await this.regionInput.fill(agentData.agentRegion);
   87 |     await this.zoneInput.fill(agentData.agentZone);
   88 |     await this.woredaInput.fill(agentData.agentWoreda);
   89 |     await this.kebeleInput.fill(agentData.agentKebele);
   90 |     await this.houseNumberInput.fill(agentData.agentHouseNumber);
   91 |     await this.frontUpload.setInputFiles(agentData.agentFrontPage);
   92 |     await this.backUpload.setInputFiles(agentData.agentBackPage);
   93 |     // await this.livePhotoUpload.setInputFiles(agentData.agentLivePhoto);
   94 |     // await this.signatureUpload.setInputFiles(agentData.agentSignature);
   95 |     await this.saveButton.click();
   96 |   }
   97 |
   98 |   async createUserWithInvalidName(agentData) {
   99 |     await this.createButton.click();
  100 |     await this.nameInput.fill(agentData.agentName);
  101 |     await this.phoneInput.fill(agentData.agentPhoneNumber);
  102 |     await this.emailInput.fill(agentData.agentEmail);
  103 |     await this.saveButton.click();
  104 |   }
  105 |
  106 |   async createUserWithInvalidPhone(agentData) {
  107 |     await this.createButton.click();
  108 |     await this.nameInput.fill(agentData.agentName);
  109 |     await this.phoneInput.fill(agentData.agentPhoneNumber);
  110 |     await this.emailInput.fill(agentData.agentEmail);
  111 |     await this.saveButton.click();
  112 |   }
  113 |
  114 |   async createUserWithInvalidEmail(agentData) {
  115 |     await this.createButton.click();
  116 |     await this.nameInput.fill(agentData.agentName);
  117 |     await this.phoneInput.fill(agentData.agentPhoneNumber);
  118 |     await this.emailInput.fill(agentData.agentEmail);
  119 |     await this.saveButton.click();
  120 |   }
  121 |
  122 |   async createUserWithInvalidBankName(agentData) {
  123 |     await this.createButton.click();
  124 |     await this.nameInput.fill(agentData.agentName);
  125 |     await this.phoneInput.fill(agentData.agentPhoneNumber);
  126 |     await this.emailInput.fill(agentData.agentEmail);
  127 |     await this.bankNameInput.fill(agentData.agentBankName);
  128 |     await this.saveButton.click();
  129 |   }
  130 |
  131 |   async createUserWithInvalidAccountNumber(agentData) {
  132 |     await this.createButton.click();
  133 |     await this.nameInput.fill(agentData.agentName);
  134 |     await this.phoneInput.fill(agentData.agentPhoneNumber);
  135 |     await this.emailInput.fill(agentData.agentEmail);
  136 |     await this.bankNameInput.fill(agentData.agentBankName);
  137 |     await this.accountNumberInput.fill(agentData.agentAccountNumber);
  138 |     await this.saveButton.click();
  139 |   }
  140 |
  141 |   async toggleUser() {
  142 |     await this.toggleButtonCell.click();
  143 |     await this.confirmButton.click();
  144 |     await this.page.waitForTimeout(1000);
  145 |
  146 |     await this.toggleButtonCell.click();
  147 |     await this.confirmButton.click();
  148 |     await this.page.waitForTimeout(1000);
  149 |   }
  150 | }
  151 |
  152 |
  153 |
```