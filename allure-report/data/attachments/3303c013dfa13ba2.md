# Test info

- Name: Loan Applications Page Tests >> 📅 Filter by date: undefined
- Location: C:\Users\derej\Desktop\Connect\tests\bankPortal\Maker\loanApplications.spec.js:55:3

# Error details

```
Error: locator.click: Error: strict mode violation: getByRole('option') resolved to 35 elements:
    1) <div title="" tabindex="-1" role="option" aria-disabled="false" aria-selected="false" aria-label="Choose Sunday, June 1st, 2025" class="react-datepicker__day react-datepicker__day--001 react-datepicker__day--weekend">1</div> aka getByRole('option', { name: 'Choose Sunday, June 1st,' })
    2) <div title="" tabindex="-1" role="option" aria-disabled="false" aria-selected="false" aria-label="Choose Monday, June 2nd, 2025" class="react-datepicker__day react-datepicker__day--002">2</div> aka getByRole('option', { name: 'Choose Monday, June 2nd,' })
    3) <div title="" tabindex="-1" role="option" aria-disabled="false" aria-selected="false" aria-label="Choose Tuesday, June 3rd, 2025" class="react-datepicker__day react-datepicker__day--003">3</div> aka getByRole('option', { name: 'Choose Tuesday, June 3rd,' })
    4) <div title="" tabindex="-1" role="option" aria-disabled="false" aria-selected="false" aria-label="Choose Wednesday, June 4th, 2025" class="react-datepicker__day react-datepicker__day--004">4</div> aka getByRole('option', { name: 'Choose Wednesday, June 4th,' })
    5) <div title="" tabindex="-1" role="option" aria-disabled="false" aria-selected="false" aria-label="Choose Thursday, June 5th, 2025" class="react-datepicker__day react-datepicker__day--005">5</div> aka getByRole('option', { name: 'Choose Thursday, June 5th,' })
    6) <div title="" tabindex="-1" role="option" aria-disabled="false" aria-selected="false" aria-label="Choose Friday, June 6th, 2025" class="react-datepicker__day react-datepicker__day--006">6</div> aka getByRole('option', { name: 'Choose Friday, June 6th,' })
    7) <div title="" tabindex="-1" role="option" aria-disabled="false" aria-selected="false" aria-label="Choose Saturday, June 7th, 2025" class="react-datepicker__day react-datepicker__day--007 react-datepicker__day--weekend">7</div> aka getByRole('option', { name: 'Choose Saturday, June 7th,' })
    8) <div title="" tabindex="-1" role="option" aria-disabled="false" aria-selected="false" aria-label="Choose Sunday, June 8th, 2025" class="react-datepicker__day react-datepicker__day--008 react-datepicker__day--weekend">8</div> aka getByRole('option', { name: 'Choose Sunday, June 8th,' })
    9) <div title="" tabindex="-1" role="option" aria-disabled="false" aria-selected="false" aria-label="Choose Monday, June 9th, 2025" class="react-datepicker__day react-datepicker__day--009">9</div> aka getByRole('option', { name: 'Choose Monday, June 9th,' })
    10) <div title="" tabindex="-1" role="option" aria-disabled="false" aria-selected="false" aria-label="Choose Tuesday, June 10th, 2025" class="react-datepicker__day react-datepicker__day--010">10</div> aka getByRole('option', { name: 'Choose Tuesday, June 10th,' })
    ...

Call log:
  - waiting for getByRole('option')

    at LoanApplicationsPage.selectDate (C:\Users\derej\Desktop\Connect\pages\bankPortal\maker\loanApplications.page.js:91:58)
    at C:\Users\derej\Desktop\Connect\tests\bankPortal\Maker\loanApplications.spec.js:58:5
```

# Page snapshot

```yaml
- main:
  - img "logo"
  - img "cbenewmaker"
  - heading "cbenewmaker cbenewbank" [level=6]
  - paragraph: cbenewmaker@gmail.com
  - button "loan applications & down payments":
    - img
    - heading "loan applications & down payments" [level=6]
  - paragraph: Loan Application Lists
  - img
  - searchbox
  - button:
    - img
  - text: "Filters:"
  - button "Loan Type":
    - text: Loan Type
    - img
  - textbox "Down Payment (%)"
  - button "App Status":
    - text: App Status
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
  - img
  - text: Copyright © 2025 CONNECT System | EagleLion System Technology. All rights reserved.
- region "Notifications alt+T"
- alert: Loan Applications - Connect Dashboard
```

# Test source

```ts
   1 | import { expect } from '@playwright/test'; 
   2 |
   3 | export class LoanApplicationsPage {
   4 |   constructor(page) {
   5 |     this.page = page;
   6 |   }
   7 |
   8 |   async navigateToLoanApplications() {
   9 |     await this.page.getByRole('button', { name: 'Active Loans & Applications' }).click();
   10 |     await this.page.getByRole('link', { name: 'Loan Applications' }).click();
   11 |   }
   12 |
   13 |   async searchByNameOrPhone(searchTerm) {
   14 |     await this.page.getByPlaceholder('Search by name or phone').click();
   15 |     await this.page.getByPlaceholder('Search by name or phone').fill(searchTerm);
   16 |   }
   17 |
   18 |   async assertTextInTable(text) {
   19 |     await expect(this.page.locator('tbody')).toContainText(text); 
   20 |   }
   21 |
   22 |   async clearSearchField() {
   23 |     await this.page.locator('label').getByRole('img').nth(1).click();
   24 |   }
   25 |
   26 |   async selectLoanType(type) {
   27 |     await this.page.getByRole('button', { name: 'Loan Type' }).click();
   28 |     await this.page.getByRole('option', { name: type }).click();
   29 |   }
   30 |
   31 |   async selectStatus(status) {
   32 |     await this.page.getByRole('button', { name: 'App Status' }).click();
   33 |     await this.page.getByRole('option', { name: status }).click();
   34 |   }
   35 |
   36 |    
   37 |
   38 | async assertApplicationStatusIs(expectedStatus) {
   39 |   const header = await this.page.getByRole('columnheader', { name: 'Application Status' }).elementHandle();
   40 |   if (!header) throw new Error('Application Status column header not found');
   41 |
   42 |   const colIndex = await header.evaluate(el => 
   43 |     Array.from(el.parentElement.children).indexOf(el) + 1
   44 |   );
   45 |
   46 |   const statusCells = this.page.locator(`table tbody tr td:nth-child(${colIndex})`);
   47 |   const timeout = 10000, pollInterval = 300, start = Date.now();
   48 |
   49 |   while (true) {
   50 |     const count = await statusCells.count();
   51 |     let allValid = true;
   52 |
   53 |     for (let i = 0; i < count; i++) {
   54 |       const text = (await statusCells.nth(i).innerText()).trim();
   55 |       if (text && text.toLowerCase() !== expectedStatus.toLowerCase()) {
   56 |         allValid = false;
   57 |         break;
   58 |       }
   59 |     }
   60 |
   61 |     if (allValid) break;
   62 |
   63 |     if (Date.now() - start > timeout) {
   64 |       throw new Error(`Timeout: Not all Application Status cells became "${expectedStatus}"`);
   65 |     }
   66 |
   67 |     await this.page.waitForTimeout(pollInterval);
   68 |   }
   69 |
   70 |   // Final strict check
   71 |   const finalCount = await statusCells.count();
   72 |   for (let i = 0; i < finalCount; i++) {
   73 |     const text = (await statusCells.nth(i).innerText()).trim();
   74 |     if (text) expect(text.toLowerCase()).toBe(expectedStatus.toLowerCase());
   75 |   }
   76 | }
   77 |
   78 |
   79 |
   80 |  
   81 |
   82 |
   83 |
   84 |
   85 |
   86 |
   87 |
   88 |
   89 |   async selectDate(optionName) {
   90 | await this.page.getByRole('textbox', { name: 'By Date' }).click();
>  91 | await this.page.getByRole('option', { name: optionName}).click();
      |                                                          ^ Error: locator.click: Error: strict mode violation: getByRole('option') resolved to 35 elements:
   92 |   }
   93 |
   94 |   async openLoanByRowText(rowText) {
   95 |     await this.page.getByRole('row', { name: rowText }).getByRole('button').click();
   96 |   }
   97 |
   98 |   async assertInMain(text) {
   99 |     await expect(this.page.getByRole('main')).toContainText(text);
  100 |   }
  101 | }
  102 |
```