# Test info

- Name: Agents Module Tests >> Create agent with valid input
- Location: C:\Users\derej\Desktop\Connect\tests\bankPortal\Maker\agents.spec.js:36:3

# Error details

```
Error: expect(locator).toContainText(expected)

Locator: locator('tbody')
Expected string: "ABC Agent"
Received string: "←Move left→Move right↑Move up↓Move down+Zoom in-Zoom outHomeJump left by 75%EndJump right by 75%Page UpJump up by 75%Page DownJump down by 75%"
Call log:
  - expect.toContainText with timeout 5000ms
  - waiting for locator('tbody')
    5 × locator resolved to <tbody>…</tbody>
      - unexpected value "←Move left→Move right↑Move up↓Move down+Zoom in-Zoom outHomeJump left by 75%EndJump right by 75%Page UpJump up by 75%Page DownJump down by 75%"

    at C:\Users\derej\Desktop\Connect\tests\bankPortal\Maker\agents.spec.js:40:39
```

# Page snapshot

```yaml
- main:
  - img "logo"
  - img "cbenewmaker"
  - heading "cbenewmaker cbenewbank" [level=6]
  - paragraph: cbenewmaker@gmail.com
  - button "agents create":
    - img
    - heading "agents create" [level=6]
  - button "Local Agent"
  - button "International Agent"
  - heading "Agent Information" [level=6]
  - img
  - text: Agent Name
  - superscript:
    - img
  - textbox "Agent Name": ABC Agent
  - img
  - text: Phone Number
  - superscript:
    - img
  - textbox "Phone Number": "+25191122"
  - img
  - text: Email
  - superscript:
    - img
  - textbox "Email": abcagent@example.com
  - img
  - text: Bank Name
  - superscript:
    - img
  - textbox "Bank Name": ABC Bank
  - img
  - text: Account Number
  - superscript:
    - img
  - textbox "Account Number": "1234567890"
  - img
  - text: TIN
  - superscript:
    - img
  - textbox "TIN": "100200300"
  - img
  - text: License Number
  - superscript:
    - img
  - textbox "License Number": LIC-12345
  - text: Fax (Optional)
  - textbox "Fax (Optional)"
  - heading "Agent Address" [level=6]
  - img
  - text: Country
  - superscript:
    - img
  - button "Country Ethiopia" [disabled]:
    - text: Ethiopia
    - img
  - img
  - text: City
  - superscript:
    - img
  - textbox "City": Addis Ababa
  - img
  - text: Region
  - superscript:
    - img
  - textbox "Region": Addis Ababa
  - img
  - text: Zone / Sub-City
  - superscript:
    - img
  - textbox "Zone / Sub-City": Bole
  - img
  - text: Woreda
  - superscript:
    - img
  - textbox "Woreda": "01"
  - img
  - text: Kebele
  - superscript:
    - img
  - textbox "Kebele": "12"
  - img
  - text: House No
  - superscript:
    - img
  - textbox "House No": "456"
  - heading "Attached Documents" [level=6]
  - img
  - text: "Document Front Page:"
  - superscript:
    - img
  - img "Image"
  - button:
    - img
  - button "Choose different file"
  - img
  - text: "Document Back Page:"
  - superscript:
    - img
  - img
  - paragraph:
    - paragraph: Choose a file or drag & drop it here
    - paragraph: JPEG, PNG, And PDF formats, up to 5MB
    - button "Browse File"
  - paragraph
  - img
  - text: "Live Photo:"
  - superscript:
    - img
  - img "Image"
  - button:
    - img
  - button "Choose different file"
  - img
  - text: Signature
  - superscript:
    - img
  - img
  - paragraph:
    - paragraph: Choose a file or drag & drop it here
    - paragraph: JPEG, PNG, And PDF formats, up to 5MB
    - button "Browse File"
  - paragraph
  - text: Location
  - textbox
  - button "Keyboard shortcuts"
  - region "Map"
  - button "Toggle fullscreen view"
  - button "Map camera controls"
  - button "Zoom in"
  - button "Zoom out"
  - link "Open this area in Google Maps (opens a new window)":
    - /url: https://maps.google.com/maps?ll=9.0192,38.7525&z=8&t=m&hl=en&gl=US&mapclient=apiv3
    - img "Google"
  - button "Keyboard shortcuts"
  - text: Map data ©2025 Google
  - link "Terms":
    - /url: https://www.google.com/intl/en_US/help/terms_maps.html
  - text: "Location coordinates (Debug): lattitude: Not set, Longitude: Not set"
  - link "Cancel":
    - /url: /agents
    - button "Cancel"
  - button "Create"
  - text: Copyright © 2025 CONNECT System | EagleLion System Technology. All rights reserved.
- region "Notifications alt+T"
- alert: Agents Create - Connect Dashboard
```

# Test source

```ts
   1 | import { test, expect } from "@playwright/test";
   2 | import { agentsPage } from "../../../pages/bankPortal/maker/agents.page.js";
   3 | import { login } from "../../../pages/bankPortal/maker/login.page.js";
   4 | import { agentsTestData } from "../../../testData/bankPortalTestData/agentsTestData.js";
   5 |
   6 | test.describe("Agents Module Tests", () => {
   7 |   test.beforeEach(async ({ page }) => {
   8 |     await login(page);
   9 |   });
   10 |
   11 |   test("Search agent by name (should find)", async ({ page }) => {
   12 |     const agentsNewPage = new agentsPage(page);
   13 |     await agentsNewPage.navigate();
   14 |     await agentsNewPage.searchByName(agentsTestData.searchByName[0].input, true);
   15 |   });
   16 |
   17 |   test("Search user by phone/email (should find)", async ({ page }) => {
   18 |     const agentsNewPage = new agentsPage(page);
   19 |     await agentsNewPage.navigate();
   20 |
   21 |     for (const phoneTest of agentsTestData.searchByPhone) {
   22 |       await agentsNewPage.searchByEmailOrPhone(phoneTest.input, phoneTest.isValid);
   23 |     }
   24 |
   25 |     for (const emailTest of agentsTestData.searchByEmail) {
   26 |       await agentsNewPage.searchByEmailOrPhone(emailTest.input, emailTest.isValid);
   27 |     }
   28 |   });
   29 |
   30 |   test('should toggle agent', async ({ page }) => {
   31 |   const agentsNewPage = new agentsPage(page); // assuming your POM class is AgentPage
   32 |   await agentsNewPage.toggleUser();
   33 | });
   34 |
   35 |
   36 |   test("Create agent with valid input", async ({ page }) => {
   37 |     const agentsNewPage = new agentsPage(page);
   38 |     await agentsNewPage.navigate();
   39 |     await agentsNewPage.createAgent(agentsTestData.createAgent.input);
>  40 |     await expect(agentsNewPage.tbody).toContainText(agentsTestData.createAgent.input.agentName);
      |                                       ^ Error: expect(locator).toContainText(expected)
   41 |   });
   42 |
   43 |   //  Invalid Name Tests
   44 |   for (let i = 0; i < agentsTestData.invalidNameUsers.length; i++) {
   45 |     const agent = agentsTestData.invalidNameUsers[i];
   46 |     test(`Invalid Name #${i + 1}: ${agent.agentName}`, async ({ page }) => {
   47 |       const agentsNewPage = new agentsPage(page);
   48 |       await agentsNewPage.navigate();
   49 |       await agentsNewPage.createUserWithInvalidName(agent);
   50 |     });
   51 |   }
   52 |
   53 |   // Invalid Phone Tests
   54 |   for (let i = 0; i < agentsTestData.invalidPhoneUsers.length; i++) {
   55 |     const agent = agentsTestData.invalidPhoneUsers[i];
   56 |     test(`Invalid Phone #${i + 1}: ${agent.agentPhoneNumber}`, async ({ page }) => {
   57 |       const agentsNewPage = new agentsPage(page);
   58 |       await agentsNewPage.navigate();
   59 |       await agentsNewPage.createUserWithInvalidPhone(agent);
   60 |     });
   61 |   }
   62 |
   63 |   // Invalid Email Tests
   64 |   for (let i = 0; i < agentsTestData.invalidEmailUsers.length; i++) {
   65 |     const agent = agentsTestData.invalidEmailUsers[i];
   66 |     test(`Invalid Email #${i + 1}: ${agent.agentEmail}`, async ({ page }) => {
   67 |       const agentsNewPage = new agentsPage(page);
   68 |       await agentsNewPage.navigate();
   69 |       await agentsNewPage.createUserWithInvalidEmail(agent);
   70 |     });
   71 |   }
   72 |   // Invalid Bank Name Tests
   73 |   for (let i = 0; i < agentsTestData.invalidBankName.length; i++) {
   74 |     const agent = agentsTestData.invalidBankName[i];
   75 |     test(`Invalid Bank Name #${i + 1}: ${agent.agentBankName}`, async ({ page }) => {
   76 |       const agentsNewPage = new agentsPage(page);
   77 |       await agentsNewPage.navigate();
   78 |       await agentsNewPage.createUserWithInvalidBankName(agent);
   79 |     });
   80 |   }
   81 |   // Invalid account number Tests
   82 |     for (let i = 0; i < agentsTestData.invalidAccountNumber.length; i++) {
   83 |     const agent = agentsTestData.invalidAccountNumber[i];
   84 |     test(`Invalid Account Number  #${i + 1}: ${agent.agentAccountNumber}`, async ({ page }) => {
   85 |       const agentsNewPage = new agentsPage(page);
   86 |       await agentsNewPage.navigate();
   87 |       await agentsNewPage.createUserWithInvalidAccountNumber(agent);
   88 |     });
   89 |   }
   90 | });
   91 |
   92 |
   93 |
   94 |
   95 |
   96 |
   97 |
   98 |
   99 |
  100 |
  101 |
```