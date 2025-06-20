# Test info

- Name: Agents Module Tests >> Toggle user by email
- Location: C:\Users\derej\Desktop\Connect\tests\bankPortal\Maker\agents.spec.js:30:3

# Error details

```
TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
Call log:
  - waiting for locator('tbody tr:visible').filter({ hasText: /./ }).first() to be visible

    at agentsPage.toggleUserByEmail (C:\Users\derej\Desktop\Connect\pages\bankPortal\maker\agents.page.js:133:82)
    at C:\Users\derej\Desktop\Connect\tests\bankPortal\Maker\agents.spec.js:34:18
```

# Page snapshot

```yaml
- main:
  - img "logo"
  - img "cbenewmaker"
  - heading "cbenewmaker cbenewbank" [level=6]
  - paragraph: cbenewmaker@gmail.com
  - button "agents":
    - img
    - heading "agents" [level=6]
  - img
  - searchbox
  - button:
    - img
  - link "Add Agent":
    - /url: /agents/create
    - button "Add Agent"
  - img
  - text: Copyright © 2025 CONNECT System | EagleLion System Technology. All rights reserved.
- region "Notifications alt+T"
- alert: Agents - Connect Dashboard
```

# Test source

```ts
   33 |     this.toggleButtonCell = this.page.locator('xpath=/html/body/main/div[3]/div/div[1]/div/div/div/table/tbody/tr[3]/td[9]/div/span[2]');
   34 |
   35 |     this.confirmButton = this.page.getByRole('button', { name: 'Yes' });
   36 |   }
   37 |
   38 |   async navigate() {
   39 |     await this.agentMenu.click();
   40 |     // await expect(this.page).toHaveURL(/.*agents/);
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
   61 |   async createAgent(agentData) {
   62 |     await this.createButton.click();
   63 |     await this.nameInput.fill(agentData.agentName);
   64 |     await this.phoneInput.fill(agentData.agentPhoneNumber);
   65 |     await this.emailInput.fill(agentData.agentEmail);
   66 |     await this.bankNameInput.fill(agentData.agentBankName);
   67 |     await this.accountNumberInput.fill(agentData.agentAccountNumber);
   68 |     await this.tinInput.fill(agentData.agentTinNumber);
   69 |     await this.licenseInput.fill(agentData.agentLicenseNumber);
   70 |     await this.cityInput.fill(agentData.agentCity);
   71 |     await this.regionInput.fill(agentData.agentRegion);
   72 |     await this.zoneInput.fill(agentData.agentZone);
   73 |     await this.woredaInput.fill(agentData.agentWoreda);
   74 |     await this.kebeleInput.fill(agentData.agentKebele);
   75 |     await this.houseNumberInput.fill(agentData.agentHouseNumber);
   76 |     await this.frontUpload.setInputFiles(agentData.agentFrontPage);
   77 |     await this.backUpload.setInputFiles(agentData.agentBackPage);
   78 |     // await this.livePhotoUpload.setInputFiles(agentData.agentLivePhoto);
   79 |     // await this.signatureUpload.setInputFiles(agentData.agentSignature);
   80 |     await this.saveButton.click();
   81 |   }
   82 |
   83 |   async createUserWithInvalidName(agentData) {
   84 |     await this.createButton.click();
   85 |     await this.nameInput.fill(agentData.agentName);
   86 |     await this.phoneInput.fill(agentData.agentPhoneNumber);
   87 |     await this.emailInput.fill(agentData.agentEmail);
   88 |     await this.saveButton.click();
   89 |   }
   90 |
   91 |   async createUserWithInvalidPhone(agentData) {
   92 |     await this.createButton.click();
   93 |     await this.nameInput.fill(agentData.agentName);
   94 |     await this.phoneInput.fill(agentData.agentPhoneNumber);
   95 |     await this.emailInput.fill(agentData.agentEmail);
   96 |     await this.saveButton.click();
   97 |   }
   98 |
   99 |   async createUserWithInvalidEmail(agentData) {
  100 |     await this.createButton.click();
  101 |     await this.nameInput.fill(agentData.agentName);
  102 |     await this.phoneInput.fill(agentData.agentPhoneNumber);
  103 |     await this.emailInput.fill(agentData.agentEmail);
  104 |     await this.saveButton.click();
  105 |   }
  106 |
  107 |   async createUserWithInvalidBankName(agentData) {
  108 |     await this.createButton.click();
  109 |     await this.nameInput.fill(agentData.agentName);
  110 |     await this.phoneInput.fill(agentData.agentPhoneNumber);
  111 |     await this.emailInput.fill(agentData.agentEmail);
  112 |     await this.bankNameInput.fill(agentData.agentBankName);
  113 |     await this.saveButton.click();
  114 |   }
  115 |
  116 |   async createUserWithInvalidAccountNumber(agentData) {
  117 |     await this.createButton.click();
  118 |     await this.nameInput.fill(agentData.agentName);
  119 |     await this.phoneInput.fill(agentData.agentPhoneNumber);
  120 |     await this.emailInput.fill(agentData.agentEmail);
  121 |     await this.bankNameInput.fill(agentData.agentBankName);
  122 |     await this.accountNumberInput.fill(agentData.agentAccountNumber);
  123 |     await this.saveButton.click();
  124 |   }
  125 |
  126 |   userRowByEmail(email) {
  127 |     return this.page.locator("tbody tr", { hasText: email });
  128 |   }
  129 |     toggleButtonCellByEmail(email) {
  130 |     return this.userRowByEmail(email).locator("td").nth(8);
  131 |   }
  132 | async toggleUserByEmail(email) {
> 133 |     await this.page.locator('tbody tr:visible').filter({ hasText: /./ }).first().waitFor({ state: 'visible', timeout: 15000 });
      |                                                                                  ^ TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
  134 |     const toggleButtonCell = this.toggleButtonCellByEmail(email);
  135 |     await toggleButtonCell.waitFor({ state: "visible", timeout: 10000 });
  136 |
  137 |     await toggleButtonCell.click();
  138 |     await this.confirmButton.click();
  139 |     await this.page.waitForTimeout(1000);
  140 |
  141 |     await toggleButtonCell.click();
  142 |     await this.confirmButton.click();
  143 |     await this.page.waitForTimeout(1000);
  144 |   }
  145 | }
  146 |
  147 |
  148 |
  149 |
  150 |
```