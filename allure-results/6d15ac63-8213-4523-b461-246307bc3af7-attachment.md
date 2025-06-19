# Test info

- Name: Search Active Loans by Date >> search by date: "Choose Friday, April 11th,"
- Location: C:\Users\derej\Desktop\Connect\tests\bankPortal\Maker\activeLoans.spec.js:40:3

# Error details

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('option', { name: 'Choose Friday, April 11th,' })

    at ActiveLoansPage.searchByDate (C:\Users\derej\Desktop\Connect\pages\bankPortal\maker\activeLoans.page.js:34:63)
    at C:\Users\derej\Desktop\Connect\tests\bankPortal\Maker\activeLoans.spec.js:43:5
```

# Page snapshot

```yaml
- main:
  - img "logo"
  - img "cbenewmaker"
  - heading "cbenewmaker cbenewbank" [level=6]
  - paragraph: cbenewmaker@gmail.com
  - button "bank loan repayments":
    - img
    - heading "bank loan repayments" [level=6]
  - paragraph: Active Loans Applicants
  - img
  - searchbox
  - button:
    - img
  - text: "Filters:"
  - button "Loan Type":
    - text: Loan Type
    - img
  - textbox "By Date"
  - alert
  - button "Previous Month"
  - button "Next Month"
  - text: June 2025 Su Mo Tu We Th Fr Sa
  - listbox "month 2025-06":
    - option "Choose Sunday, June 1st, 2025": "1"
    - option "Choose Monday, June 2nd, 2025": "2"
    - option "Choose Tuesday, June 3rd, 2025": "3"
    - option "Choose Wednesday, June 4th, 2025": "4"
    - option "Choose Thursday, June 5th, 2025": "5"
    - option "Choose Friday, June 6th, 2025": "6"
    - option "Choose Saturday, June 7th, 2025": "7"
    - option "Choose Sunday, June 8th, 2025": "8"
    - option "Choose Monday, June 9th, 2025": "9"
    - option "Choose Tuesday, June 10th, 2025": "10"
    - option "Choose Wednesday, June 11th, 2025": "11"
    - option "Choose Thursday, June 12th, 2025": "12"
    - option "Choose Friday, June 13th, 2025": "13"
    - option "Choose Saturday, June 14th, 2025": "14"
    - option "Choose Sunday, June 15th, 2025": "15"
    - option "Choose Monday, June 16th, 2025": "16"
    - option "Choose Tuesday, June 17th, 2025": "17"
    - option "Choose Wednesday, June 18th, 2025": "18"
    - option "Choose Thursday, June 19th, 2025": "19"
    - option "Choose Friday, June 20th, 2025": "20"
    - option "Choose Saturday, June 21st, 2025": "21"
    - option "Choose Sunday, June 22nd, 2025": "22"
    - option "Choose Monday, June 23rd, 2025": "23"
    - option "Choose Tuesday, June 24th, 2025": "24"
    - option "Choose Wednesday, June 25th, 2025": "25"
    - option "Choose Thursday, June 26th, 2025": "26"
    - option "Choose Friday, June 27th, 2025": "27"
    - option "Choose Saturday, June 28th, 2025": "28"
    - option "Choose Sunday, June 29th, 2025": "29"
    - option "Choose Monday, June 30th, 2025": "30"
    - option "Choose Tuesday, July 1st, 2025": "1"
    - option "Choose Wednesday, July 2nd, 2025": "2"
    - option "Choose Thursday, July 3rd, 2025": "3"
    - option "Choose Friday, July 4th, 2025": "4"
    - option "Choose Saturday, July 5th, 2025": "5"
  - img
  - table:
    - rowgroup:
      - row "Application Code Payment ID Customer Name Phone Number Email Country Loan Type Application Date Actions":
        - columnheader "Application Code"
        - columnheader "Payment ID"
        - columnheader "Customer Name"
        - columnheader "Phone Number"
        - columnheader "Email"
        - columnheader "Country"
        - columnheader "Loan Type"
        - columnheader "Application Date"
        - columnheader "Actions"
    - rowgroup:
      - row "LA250605155337 19732454-a56f-4ebf-92d8-9bb4c38d2010 Dereje Getie +251918422026 dereabe27@gmail.com - car 2025, June 5, 03:53 PM":
        - cell "LA250605155337"
        - cell "19732454-a56f-4ebf-92d8-9bb4c38d2010"
        - cell "Dereje Getie"
        - cell "+251918422026"
        - cell "dereabe27@gmail.com"
        - cell "-"
        - cell "car"
        - cell "2025, June 5, 03:53 PM":
          - paragraph: 2025, June 5, 03:53 PM
        - cell:
          - link:
            - /url: /bank-loan-repayments/detail/19732454-a56f-4ebf-92d8-9bb4c38d2010
            - button:
              - img
      - row "LA250605122111 4607d9b3-1405-4b8a-8b84-829f9b0921b3 Dereje Getie +251918422026 dereabe27@gmail.com - car 2025, June 5, 12:21 PM":
        - cell "LA250605122111"
        - cell "4607d9b3-1405-4b8a-8b84-829f9b0921b3"
        - cell "Dereje Getie"
        - cell "+251918422026"
        - cell "dereabe27@gmail.com"
        - cell "-"
        - cell "car"
        - cell "2025, June 5, 12:21 PM":
          - paragraph: 2025, June 5, 12:21 PM
        - cell:
          - link:
            - /url: /bank-loan-repayments/detail/4607d9b3-1405-4b8a-8b84-829f9b0921b3
            - button:
              - img
      - row "LA250519151727 aa7216c4-e0cd-4bc9-ae9c-196808a2f5c3 Edil tadesse +251930884402 edilayehu534027@gmail.com - car 2025, May 19, 03:17 PM":
        - cell "LA250519151727"
        - cell "aa7216c4-e0cd-4bc9-ae9c-196808a2f5c3"
        - cell "Edil tadesse"
        - cell "+251930884402"
        - cell "edilayehu534027@gmail.com"
        - cell "-"
        - cell "car"
        - cell "2025, May 19, 03:17 PM":
          - paragraph: 2025, May 19, 03:17 PM
        - cell:
          - link:
            - /url: /bank-loan-repayments/detail/aa7216c4-e0cd-4bc9-ae9c-196808a2f5c3
            - button:
              - img
      - row "LA250514101507 11aabac8-5eff-4246-9cf2-44fdb4529e65 Edil tadesse +251930884402 edilayehu534027@gmail.com - car 2025, May 14, 10:15 AM":
        - cell "LA250514101507"
        - cell "11aabac8-5eff-4246-9cf2-44fdb4529e65"
        - cell "Edil tadesse"
        - cell "+251930884402"
        - cell "edilayehu534027@gmail.com"
        - cell "-"
        - cell "car"
        - cell "2025, May 14, 10:15 AM":
          - paragraph: 2025, May 14, 10:15 AM
        - cell:
          - link:
            - /url: /bank-loan-repayments/detail/11aabac8-5eff-4246-9cf2-44fdb4529e65
            - button:
              - img
      - row "LA250429162737 7c23fa46-76fd-4d38-84df-be1bc2562174 Dereje Getie +251918422026 dereabe27@gmail.com - mortgage 2025, April 29, 04:27 PM":
        - cell "LA250429162737"
        - cell "7c23fa46-76fd-4d38-84df-be1bc2562174"
        - cell "Dereje Getie"
        - cell "+251918422026"
        - cell "dereabe27@gmail.com"
        - cell "-"
        - cell "mortgage"
        - cell "2025, April 29, 04:27 PM":
          - paragraph: 2025, April 29, 04:27 PM
        - cell:
          - link:
            - /url: /bank-loan-repayments/detail/7c23fa46-76fd-4d38-84df-be1bc2562174
            - button:
              - img
      - row "LA250423115433 26c5e658-d91d-412b-b1da-9baa93983e5d ggs ctztd +251912121213 robaye@gmail.com - car 2025, April 23, 11:54 AM":
        - cell "LA250423115433"
        - cell "26c5e658-d91d-412b-b1da-9baa93983e5d"
        - cell "ggs ctztd"
        - cell "+251912121213"
        - cell "robaye@gmail.com"
        - cell "-"
        - cell "car"
        - cell "2025, April 23, 11:54 AM":
          - paragraph: 2025, April 23, 11:54 AM
        - cell:
          - link:
            - /url: /bank-loan-repayments/detail/26c5e658-d91d-412b-b1da-9baa93983e5d
            - button:
              - img
      - row "LA250415124254 f1f3947a-131e-4bb5-8f5e-d69b14fc2ea8 Mehretu Ambaye +251964019942 mehertu.abreham@gmail.com - car 2025, April 15, 12:42 PM":
        - cell "LA250415124254"
        - cell "f1f3947a-131e-4bb5-8f5e-d69b14fc2ea8"
        - cell "Mehretu Ambaye"
        - cell "+251964019942"
        - cell "mehertu.abreham@gmail.com"
        - cell "-"
        - cell "car"
        - cell "2025, April 15, 12:42 PM":
          - paragraph: 2025, April 15, 12:42 PM
        - cell:
          - link:
            - /url: /bank-loan-repayments/detail/f1f3947a-131e-4bb5-8f5e-d69b14fc2ea8
            - button:
              - img
      - row "LA250412122947 94d66c1d-5907-4139-8ba8-6d1c15360908 Abraham Dee +251922338477 abreshrandom@gmail.com - car 2025, April 12, 12:29 PM":
        - cell "LA250412122947"
        - cell "94d66c1d-5907-4139-8ba8-6d1c15360908"
        - cell "Abraham Dee"
        - cell "+251922338477"
        - cell "abreshrandom@gmail.com"
        - cell "-"
        - cell "car"
        - cell "2025, April 12, 12:29 PM":
          - paragraph: 2025, April 12, 12:29 PM
        - cell:
          - link:
            - /url: /bank-loan-repayments/detail/94d66c1d-5907-4139-8ba8-6d1c15360908
            - button:
              - img
      - row "LA250411163910 beb93f29-1db4-40d1-bdd1-a3fbc5409924 Dereje Getie +251918422026 dereabe27@gmail.com - car 2025, April 11, 04:39 PM":
        - cell "LA250411163910"
        - cell "beb93f29-1db4-40d1-bdd1-a3fbc5409924"
        - cell "Dereje Getie"
        - cell "+251918422026"
        - cell "dereabe27@gmail.com"
        - cell "-"
        - cell "car"
        - cell "2025, April 11, 04:39 PM":
          - paragraph: 2025, April 11, 04:39 PM
        - cell:
          - link:
            - /url: /bank-loan-repayments/detail/beb93f29-1db4-40d1-bdd1-a3fbc5409924
            - button:
              - img
      - row "LA250405093407 c32c5649-0898-47c6-b254-dada3d314486 Dereje Getie +251918422026 dereabe27@gmail.com - car 2025, April 5, 09:34 AM":
        - cell "LA250405093407"
        - cell "c32c5649-0898-47c6-b254-dada3d314486"
        - cell "Dereje Getie"
        - cell "+251918422026"
        - cell "dereabe27@gmail.com"
        - cell "-"
        - cell "car"
        - cell "2025, April 5, 09:34 AM":
          - paragraph: 2025, April 5, 09:34 AM
        - cell:
          - link:
            - /url: /bank-loan-repayments/detail/c32c5649-0898-47c6-b254-dada3d314486
            - button:
              - img
  - text: "Rows per page:"
  - button "10":
    - text: "10"
    - img
  - list:
    - listitem "Previous Page":
      - img
    - listitem "1"
    - listitem "2"
    - listitem "Next Page":
      - img
  - text: Copyright © 2025 CONNECT System | EagleLion System Technology. All rights reserved.
- region "Notifications alt+T"
- alert: Bank Loan Repayments - Connect Dashboard
```

# Test source

```ts
   1 |
   2 | import { expect } from '@playwright/test';
   3 |
   4 | export class ActiveLoansPage {
   5 |   constructor(page) {
   6 |     this.page = page;
   7 |
   8 |     // Element locators
   9 |     this.tableBody = page.locator('tbody');
  10 |     this.firstRow = page.locator('tr.rc-table-row').first();
  11 |     this.allRows = page.locator('tr.rc-table-row');
  12 |   }
  13 |
  14 |   async navigateToActiveLoans() {
  15 |     await this.page.getByRole('button', { name: 'Active Loans & Applications' }).click();
  16 |     await this.page.getByRole('link', { name: /active loan/i }).click(); // case-insensitive match
  17 |   }
  18 |
  19 |   async searchByName(name) {
  20 |     const searchBox = this.page.getByPlaceholder('Search by Applicant Name');
  21 |     await searchBox.click();
  22 |     await searchBox.fill(name);
  23 |     await this.page.waitForTimeout(500); // small delay for table to refresh
  24 |   }
  25 |
  26 |   async searchByLoanType(type) {
  27 |     await this.page.getByRole('button', { name: 'Loan Type' }).click();
  28 |     await this.page.getByRole('option', { name: new RegExp(type, 'i') }).click(); // flexible case match
  29 |     await this.page.waitForTimeout(500); // buffer after filter applied
  30 |   }
  31 |
  32 |   async searchByDate(optionName) {
  33 |     await this.page.getByRole('textbox', { name: 'By Date' }).click();
> 34 |     await this.page.getByRole('option', { name: optionName }).click();
     |                                                               ^ Error: locator.click: Test timeout of 30000ms exceeded.
  35 |     await this.page.waitForTimeout(500); // wait for table update
  36 |   }
  37 |
  38 |   async assertAllRowsContainDate(expectedDateText) {
  39 |     const rowCount = await this.allRows.count();
  40 |     console.log(`Found ${rowCount} row(s) after applying the date filter.`);
  41 |
  42 |     for (let i = 0; i < rowCount; i++) {
  43 |       const dateCell = this.allRows.nth(i).locator('td').nth(4); // adjust index if needed
  44 |       const text = (await dateCell.innerText()).trim();
  45 |       console.log(`Row ${i + 1} date: ${text}`);
  46 |       await expect(text).toBe(expectedDateText);
  47 |     }
  48 |   }
  49 | }
  50 |
```