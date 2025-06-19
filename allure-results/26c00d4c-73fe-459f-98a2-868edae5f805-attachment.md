# Test info

- Name: Agents Module Tests >> should toggle agent
- Location: C:\Users\derej\Desktop\Connect\tests\bankPortal\Maker\agents.spec.js:30:3

# Error details

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('tbody tr').filter({ hasText: 'flipejone@gmail.com' }).locator('td').nth(8)
    - waiting for" https://dev-test-cbrs-dashboard.vercel.app/" navigation to finish...
    - navigated to "https://dev-test-cbrs-dashboard.vercel.app/"

    at agentsPage.toggleUser (C:\Users\derej\Desktop\Connect\pages\bankPortal\maker\agents.page.js:141:33)
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
   41 |   }
   42 |
   43 |   async searchByName(name, shouldExist = true) {
   44 |     await this.searchInput.fill(name);
   45 |     if (shouldExist) {
   46 |       await expect(this.tbody).toContainText(name);
   47 |     } else {
   48 |       await expect(this.tbody).not.toContainText(name);
   49 |     }
   50 |   }
   51 |
   52 |   async searchByEmailOrPhone(value, shouldExist = true) {
   53 |     await this.searchInput.fill(value);
   54 |     if (shouldExist) {
   55 |       await expect(this.tbody).toContainText(value);
   56 |     } else {
   57 |       await expect(this.tbody).not.toContainText(value);
   58 |     }
   59 |   }
   60 |
   61 |   async toggleUserStatusByName(fullName) {
   62 |     const row = this.page.getByRole("row", { name: new RegExp(fullName, "i") });
   63 |     const toggleButton = row.locator("span").nth(2);
   64 |     await toggleButton.click();
   65 |
   66 |     const confirm = this.page.getByRole("button", { name: "Yes" });
   67 |     await confirm.click();
   68 |
   69 |     await this.page.waitForTimeout(1000);
   70 |     // Click again to re-enable if needed
   71 |     await toggleButton.click();
   72 |     await confirm.click();
   73 |   }
   74 |
   75 |   async createAgent(agentData) {
   76 |     await this.createButton.click();
   77 |     await this.nameInput.fill(agentData.agentName);
   78 |     await this.phoneInput.fill(agentData.agentPhoneNumber);
   79 |     await this.emailInput.fill(agentData.agentEmail);
   80 |     await this.bankNameInput.fill(agentData.agentBankName);
   81 |     await this.accountNumberInput.fill(agentData.agentAccountNumber);
   82 |     await this.tinInput.fill(agentData.agentTinNumber);
   83 |     await this.licenseInput.fill(agentData.agentLicenseNumber);
   84 |     await this.cityInput.fill(agentData.agentCity);
   85 |     await this.regionInput.fill(agentData.agentRegion);
   86 |     await this.zoneInput.fill(agentData.agentZone);
   87 |     await this.woredaInput.fill(agentData.agentWoreda);
   88 |     await this.kebeleInput.fill(agentData.agentKebele);
   89 |     await this.houseNumberInput.fill(agentData.agentHouseNumber);
   90 |     await this.frontUpload.setInputFiles(agentData.agentFrontPage);
   91 |     await this.backUpload.setInputFiles(agentData.agentBackPage);
   92 |     // await this.livePhotoUpload.setInputFiles(agentData.agentLivePhoto);
   93 |     // await this.signatureUpload.setInputFiles(agentData.agentSignature);
   94 |     await this.saveButton.click();
   95 |   }
   96 |
   97 |   async createUserWithInvalidName(agentData) {
   98 |     await this.createButton.click();
   99 |     await this.nameInput.fill(agentData.agentName);
  100 |     await this.phoneInput.fill(agentData.agentPhoneNumber);
  101 |     await this.emailInput.fill(agentData.agentEmail);
  102 |     await this.saveButton.click();
  103 |   }
  104 |
  105 |   async createUserWithInvalidPhone(agentData) {
  106 |     await this.createButton.click();
  107 |     await this.nameInput.fill(agentData.agentName);
  108 |     await this.phoneInput.fill(agentData.agentPhoneNumber);
  109 |     await this.emailInput.fill(agentData.agentEmail);
  110 |     await this.saveButton.click();
  111 |   }
  112 |
  113 |   async createUserWithInvalidEmail(agentData) {
  114 |     await this.createButton.click();
  115 |     await this.nameInput.fill(agentData.agentName);
  116 |     await this.phoneInput.fill(agentData.agentPhoneNumber);
  117 |     await this.emailInput.fill(agentData.agentEmail);
  118 |     await this.saveButton.click();
  119 |   }
  120 |
  121 |   async createUserWithInvalidBankName(agentData) {
  122 |     await this.createButton.click();
  123 |     await this.nameInput.fill(agentData.agentName);
  124 |     await this.phoneInput.fill(agentData.agentPhoneNumber);
  125 |     await this.emailInput.fill(agentData.agentEmail);
  126 |     await this.bankNameInput.fill(agentData.agentBankName);
  127 |     await this.saveButton.click();
  128 |   }
  129 |
  130 |   async createUserWithInvalidAccountNumber(agentData) {
  131 |     await this.createButton.click();
  132 |     await this.nameInput.fill(agentData.agentName);
  133 |     await this.phoneInput.fill(agentData.agentPhoneNumber);
  134 |     await this.emailInput.fill(agentData.agentEmail);
  135 |     await this.bankNameInput.fill(agentData.agentBankName);
  136 |     await this.accountNumberInput.fill(agentData.agentAccountNumber);
  137 |     await this.saveButton.click();
  138 |   }
  139 |
  140 |   async toggleUser() {
> 141 |     await this.toggleButtonCell.click();
      |                                 ^ Error: locator.click: Test timeout of 30000ms exceeded.
  142 |     await this.confirmButton.click();
  143 |     await this.page.waitForTimeout(1000);
  144 |
  145 |     await this.toggleButtonCell.click();
  146 |     await this.confirmButton.click();
  147 |     await this.page.waitForTimeout(1000);
  148 |   }
  149 | }
  150 |
  151 |
  152 |
```