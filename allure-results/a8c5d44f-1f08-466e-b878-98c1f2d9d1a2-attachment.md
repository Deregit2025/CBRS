# Test info

- Name: Agents Module Tests >> should toggle agent
- Location: C:\Users\derej\Desktop\Connect\tests\bankPortal\Maker\agents.spec.js:30:3

# Error details

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('row').filter({ hasText: '575083' }).filter({ hasText: 'flipe jone' }).filter({ hasText: 'flipejone@gmail.com' }).locator('td:nth-child(9)')

    at agentsPage.toggleUser (C:\Users\derej\Desktop\Connect\pages\bankPortal\maker\agents.page.js:132:33)
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
   66 |   async createAgent(agentData) {
   67 |     await this.createButton.click();
   68 |     await this.nameInput.fill(agentData.agentName);
   69 |     await this.phoneInput.fill(agentData.agentPhoneNumber);
   70 |     await this.emailInput.fill(agentData.agentEmail);
   71 |     await this.bankNameInput.fill(agentData.agentBankName);
   72 |     await this.accountNumberInput.fill(agentData.agentAccountNumber);
   73 |     await this.tinInput.fill(agentData.agentTinNumber);
   74 |     await this.licenseInput.fill(agentData.agentLicenseNumber);
   75 |     await this.cityInput.fill(agentData.agentCity);
   76 |     await this.regionInput.fill(agentData.agentRegion);
   77 |     await this.zoneInput.fill(agentData.agentZone);
   78 |     await this.woredaInput.fill(agentData.agentWoreda);
   79 |     await this.kebeleInput.fill(agentData.agentKebele);
   80 |     await this.houseNumberInput.fill(agentData.agentHouseNumber);
   81 |     await this.frontUpload.setInputFiles(agentData.agentFrontPage);
   82 |     await this.backUpload.setInputFiles(agentData.agentBackPage);
   83 |     // await this.livePhotoUpload.setInputFiles(agentData.agentLivePhoto);
   84 |     // await this.signatureUpload.setInputFiles(agentData.agentSignature);
   85 |     await this.saveButton.click();
   86 |   }
   87 |
   88 |   async createUserWithInvalidName(agentData) {
   89 |     await this.createButton.click();
   90 |     await this.nameInput.fill(agentData.agentName);
   91 |     await this.phoneInput.fill(agentData.agentPhoneNumber);
   92 |     await this.emailInput.fill(agentData.agentEmail);
   93 |     await this.saveButton.click();
   94 |   }
   95 |
   96 |   async createUserWithInvalidPhone(agentData) {
   97 |     await this.createButton.click();
   98 |     await this.nameInput.fill(agentData.agentName);
   99 |     await this.phoneInput.fill(agentData.agentPhoneNumber);
  100 |     await this.emailInput.fill(agentData.agentEmail);
  101 |     await this.saveButton.click();
  102 |   }
  103 |
  104 |   async createUserWithInvalidEmail(agentData) {
  105 |     await this.createButton.click();
  106 |     await this.nameInput.fill(agentData.agentName);
  107 |     await this.phoneInput.fill(agentData.agentPhoneNumber);
  108 |     await this.emailInput.fill(agentData.agentEmail);
  109 |     await this.saveButton.click();
  110 |   }
  111 |
  112 |   async createUserWithInvalidBankName(agentData) {
  113 |     await this.createButton.click();
  114 |     await this.nameInput.fill(agentData.agentName);
  115 |     await this.phoneInput.fill(agentData.agentPhoneNumber);
  116 |     await this.emailInput.fill(agentData.agentEmail);
  117 |     await this.bankNameInput.fill(agentData.agentBankName);
  118 |     await this.saveButton.click();
  119 |   }
  120 |
  121 |   async createUserWithInvalidAccountNumber(agentData) {
  122 |     await this.createButton.click();
  123 |     await this.nameInput.fill(agentData.agentName);
  124 |     await this.phoneInput.fill(agentData.agentPhoneNumber);
  125 |     await this.emailInput.fill(agentData.agentEmail);
  126 |     await this.bankNameInput.fill(agentData.agentBankName);
  127 |     await this.accountNumberInput.fill(agentData.agentAccountNumber);
  128 |     await this.saveButton.click();
  129 |   }
  130 |
  131 |   async toggleUser() {
> 132 |     await this.toggleButtonCell.click();
      |                                 ^ Error: locator.click: Test timeout of 30000ms exceeded.
  133 |     await this.confirmButton.click();
  134 |     await this.page.waitForTimeout(1000);
  135 |     await this.toggleButtonCell.click();
  136 |     await this.confirmButton.click();
  137 |     await this.page.waitForTimeout(1000);
  138 |   }
  139 | }
  140 |
  141 |
  142 |
```