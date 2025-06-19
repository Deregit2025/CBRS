# Test info

- Name: End-to-end: Update interest rate and approve
- Location: C:\Users\derej\Desktop\Connect\tests\bankPortal\Checker\approve.spec.js:12:1

# Error details

```
Error: locator.click: Error: strict mode violation: getByRole('row', { name: /Loan Product/i }).getByRole('button') resolved to 9 elements:
    1) <button type="button" class="rizzui-action-icon-root inline-flex items-center justify-center active:enabled:translate-y-px focus:outline-none focus-visible:ring-[1.8px] focus-visible:ring-offset-2 ring-offset-background transition-colors duration-200 p-0.5 w-7 h-7 rounded bg-transparent border border-muted dark:backdrop-blur focus-visible:ring-muted hover:border-primary hover:text-gray-700">…</button> aka getByRole('row', { name: '#2139-KMZB Loan Product' }).getByRole('button')
    2) <button type="button" class="rizzui-action-icon-root inline-flex items-center justify-center active:enabled:translate-y-px focus:outline-none focus-visible:ring-[1.8px] focus-visible:ring-offset-2 ring-offset-background transition-colors duration-200 p-0.5 w-7 h-7 rounded bg-transparent border border-muted dark:backdrop-blur focus-visible:ring-muted hover:border-primary hover:text-gray-700">…</button> aka getByRole('row', { name: '#1841-U2TR Loan Product' }).getByRole('button')
    3) <button type="button" class="rizzui-action-icon-root inline-flex items-center justify-center active:enabled:translate-y-px focus:outline-none focus-visible:ring-[1.8px] focus-visible:ring-offset-2 ring-offset-background transition-colors duration-200 p-0.5 w-7 h-7 rounded bg-transparent border border-muted dark:backdrop-blur focus-visible:ring-muted hover:border-primary hover:text-gray-700">…</button> aka getByRole('row', { name: '#1163-SE62 Loan Product' }).getByRole('button')
    4) <button type="button" class="rizzui-action-icon-root inline-flex items-center justify-center active:enabled:translate-y-px focus:outline-none focus-visible:ring-[1.8px] focus-visible:ring-offset-2 ring-offset-background transition-colors duration-200 p-0.5 w-7 h-7 rounded bg-transparent border border-muted dark:backdrop-blur focus-visible:ring-muted hover:border-primary hover:text-gray-700">…</button> aka getByRole('row', { name: '#6453-PVQC Loan Product' }).getByRole('button')
    5) <button type="button" class="rizzui-action-icon-root inline-flex items-center justify-center active:enabled:translate-y-px focus:outline-none focus-visible:ring-[1.8px] focus-visible:ring-offset-2 ring-offset-background transition-colors duration-200 p-0.5 w-7 h-7 rounded bg-transparent border border-muted dark:backdrop-blur focus-visible:ring-muted hover:border-primary hover:text-gray-700">…</button> aka getByRole('row', { name: '#2357-LLKU Loan Product' }).getByRole('button')
    6) <button type="button" class="rizzui-action-icon-root inline-flex items-center justify-center active:enabled:translate-y-px focus:outline-none focus-visible:ring-[1.8px] focus-visible:ring-offset-2 ring-offset-background transition-colors duration-200 p-0.5 w-7 h-7 rounded bg-transparent border border-muted dark:backdrop-blur focus-visible:ring-muted hover:border-primary hover:text-gray-700">…</button> aka getByRole('row', { name: '#8018-QZ0U Loan Product' }).getByRole('button')
    7) <button type="button" class="rizzui-action-icon-root inline-flex items-center justify-center active:enabled:translate-y-px focus:outline-none focus-visible:ring-[1.8px] focus-visible:ring-offset-2 ring-offset-background transition-colors duration-200 p-0.5 w-7 h-7 rounded bg-transparent border border-muted dark:backdrop-blur focus-visible:ring-muted hover:border-primary hover:text-gray-700">…</button> aka getByRole('row', { name: '#4323-FP1X Loan Product' }).getByRole('button')
    8) <button type="button" class="rizzui-action-icon-root inline-flex items-center justify-center active:enabled:translate-y-px focus:outline-none focus-visible:ring-[1.8px] focus-visible:ring-offset-2 ring-offset-background transition-colors duration-200 p-0.5 w-7 h-7 rounded bg-transparent border border-muted dark:backdrop-blur focus-visible:ring-muted hover:border-primary hover:text-gray-700">…</button> aka getByRole('row', { name: '#2652-EB0L Loan Product' }).getByRole('button')
    9) <button type="button" class="rizzui-action-icon-root inline-flex items-center justify-center active:enabled:translate-y-px focus:outline-none focus-visible:ring-[1.8px] focus-visible:ring-offset-2 ring-offset-background transition-colors duration-200 p-0.5 w-7 h-7 rounded bg-transparent border border-muted dark:backdrop-blur focus-visible:ring-muted hover:border-primary hover:text-gray-700">…</button> aka getByRole('row', { name: '#3219-HHOM Loan Product' }).getByRole('button')

Call log:
  - waiting for getByRole('row', { name: /Loan Product/i }).getByRole('button')

    at ApprovePage.approveLoanProduct (C:\Users\derej\Desktop\Connect\pages\bankPortal\checker\approve.page.js:17:35)
    at C:\Users\derej\Desktop\Connect\tests\bankPortal\Checker\approve.spec.js:35:21
```

# Page snapshot

```yaml
- main:
  - img "Sign In Thumbnail"
  - img "logo"
  - img "cbenewchecker"
  - heading "cbenewchecker cbebank" [level=6]
  - paragraph: cbenewchecker@gmail.com
  - heading "👋 Welcome to Connect 's Bank Portal!" [level=4]
  - paragraph: Easily manage and monitor all transactions, track overall activities seamlessly.
  - button "Transaction Actions"
  - button "Merchant Actions"
  - heading "Transaction Actions" [level=2]
  - img
  - searchbox
  - button:
    - img
  - text: "Filters:"
  - button "Request Action":
    - text: Request Action
    - img
  - button "Action Type":
    - text: Action Type
    - img
  - button "PENDING":
    - text: PENDING
    - img
    - img
  - textbox "By Date"
  - img
  - table:
    - rowgroup:
      - row "Action ID Requested Action Action Type Maker User Created Date Status Details":
        - columnheader "Action ID"
        - columnheader "Requested Action"
        - columnheader "Action Type"
        - columnheader "Maker User"
        - columnheader "Created Date"
        - columnheader "Status"
        - columnheader "Details"
    - rowgroup:
      - row "#2139-KMZB Loan Product UPDATE_INTEREST cbenewmaker cbenewbank Jun 19 2025 PENDING":
        - cell "#2139-KMZB":
          - paragraph: "#2139-KMZB"
        - cell "Loan Product":
          - paragraph: Loan Product
        - cell "UPDATE_INTEREST":
          - paragraph: UPDATE_INTEREST
        - cell "cbenewmaker cbenewbank":
          - paragraph: cbenewmaker cbenewbank
        - cell "Jun 19 2025":
          - paragraph: Jun 19 2025
        - cell "PENDING"
        - cell:
          - link:
            - /url: /action/detail/7ea5c709-41eb-4e8b-b006-2c045fbcd61c?action=LOAN_PRODUCT
            - button:
              - img
      - row "#1841-U2TR Loan Product UPDATE_INTEREST cbenewmaker cbenewbank Jun 19 2025 PENDING":
        - cell "#1841-U2TR":
          - paragraph: "#1841-U2TR"
        - cell "Loan Product":
          - paragraph: Loan Product
        - cell "UPDATE_INTEREST":
          - paragraph: UPDATE_INTEREST
        - cell "cbenewmaker cbenewbank":
          - paragraph: cbenewmaker cbenewbank
        - cell "Jun 19 2025":
          - paragraph: Jun 19 2025
        - cell "PENDING"
        - cell:
          - link:
            - /url: /action/detail/38378283-218a-4b75-be4c-9e6f2e05b2d1?action=LOAN_PRODUCT
            - button:
              - img
      - row "#1163-SE62 Loan Product UPDATE_INTEREST cbenewmaker cbenewbank Jun 19 2025 PENDING":
        - cell "#1163-SE62":
          - paragraph: "#1163-SE62"
        - cell "Loan Product":
          - paragraph: Loan Product
        - cell "UPDATE_INTEREST":
          - paragraph: UPDATE_INTEREST
        - cell "cbenewmaker cbenewbank":
          - paragraph: cbenewmaker cbenewbank
        - cell "Jun 19 2025":
          - paragraph: Jun 19 2025
        - cell "PENDING"
        - cell:
          - link:
            - /url: /action/detail/ece623a8-abe8-483a-b900-36c15b6fda99?action=LOAN_PRODUCT
            - button:
              - img
      - row "#6453-PVQC Loan Product UPDATE_INTEREST cbenewmaker cbenewbank Jun 19 2025 PENDING":
        - cell "#6453-PVQC":
          - paragraph: "#6453-PVQC"
        - cell "Loan Product":
          - paragraph: Loan Product
        - cell "UPDATE_INTEREST":
          - paragraph: UPDATE_INTEREST
        - cell "cbenewmaker cbenewbank":
          - paragraph: cbenewmaker cbenewbank
        - cell "Jun 19 2025":
          - paragraph: Jun 19 2025
        - cell "PENDING"
        - cell:
          - link:
            - /url: /action/detail/8922d9fa-ea7e-495e-870b-d53faec188bf?action=LOAN_PRODUCT
            - button:
              - img
      - row "#2357-LLKU Loan Product UPDATE_INTEREST cbenewmaker cbenewbank Jun 19 2025 PENDING":
        - cell "#2357-LLKU":
          - paragraph: "#2357-LLKU"
        - cell "Loan Product":
          - paragraph: Loan Product
        - cell "UPDATE_INTEREST":
          - paragraph: UPDATE_INTEREST
        - cell "cbenewmaker cbenewbank":
          - paragraph: cbenewmaker cbenewbank
        - cell "Jun 19 2025":
          - paragraph: Jun 19 2025
        - cell "PENDING"
        - cell:
          - link:
            - /url: /action/detail/834c84ca-c83f-479b-b857-1b0e1e9e76f9?action=LOAN_PRODUCT
            - button:
              - img
      - row "#0269-EQOW Loan Application CREATE cbenewmaker cbenewbank Jun 05 2025 PENDING":
        - cell "#0269-EQOW":
          - paragraph: "#0269-EQOW"
        - cell "Loan Application":
          - paragraph: Loan Application
        - cell "CREATE":
          - paragraph: CREATE
        - cell "cbenewmaker cbenewbank":
          - paragraph: cbenewmaker cbenewbank
        - cell "Jun 05 2025":
          - paragraph: Jun 05 2025
        - cell "PENDING"
        - cell:
          - link:
            - /url: /action/detail/93e9d251-2a55-4586-beec-c5887fcc8d0d?action=LOAN_APPLICATION
            - button:
              - img
      - row "#8018-QZ0U Loan Product UPDATE_INTEREST cbenewmaker cbenewbank May 19 2025 PENDING":
        - cell "#8018-QZ0U":
          - paragraph: "#8018-QZ0U"
        - cell "Loan Product":
          - paragraph: Loan Product
        - cell "UPDATE_INTEREST":
          - paragraph: UPDATE_INTEREST
        - cell "cbenewmaker cbenewbank":
          - paragraph: cbenewmaker cbenewbank
        - cell "May 19 2025":
          - paragraph: May 19 2025
        - cell "PENDING"
        - cell:
          - link:
            - /url: /action/detail/c229afcb-1c51-4b20-8e71-f2d869f8035b?action=LOAN_PRODUCT
            - button:
              - img
      - row "#4323-FP1X Loan Product UPDATE_INTEREST cbenewmaker cbenewbank May 19 2025 PENDING":
        - cell "#4323-FP1X":
          - paragraph: "#4323-FP1X"
        - cell "Loan Product":
          - paragraph: Loan Product
        - cell "UPDATE_INTEREST":
          - paragraph: UPDATE_INTEREST
        - cell "cbenewmaker cbenewbank":
          - paragraph: cbenewmaker cbenewbank
        - cell "May 19 2025":
          - paragraph: May 19 2025
        - cell "PENDING"
        - cell:
          - link:
            - /url: /action/detail/3bf97d2a-8637-4777-b0d0-4ae3487316a7?action=LOAN_PRODUCT
            - button:
              - img
      - row "#2652-EB0L Loan Product UPDATE_INTEREST cbenewmaker cbenewbank May 19 2025 PENDING":
        - cell "#2652-EB0L":
          - paragraph: "#2652-EB0L"
        - cell "Loan Product":
          - paragraph: Loan Product
        - cell "UPDATE_INTEREST":
          - paragraph: UPDATE_INTEREST
        - cell "cbenewmaker cbenewbank":
          - paragraph: cbenewmaker cbenewbank
        - cell "May 19 2025":
          - paragraph: May 19 2025
        - cell "PENDING"
        - cell:
          - link:
            - /url: /action/detail/d9c23b1a-d2f8-4c93-a263-f314ce58ef73?action=LOAN_PRODUCT
            - button:
              - img
      - row "#3219-HHOM Loan Product UPDATE_INTEREST cbenewmaker cbenewbank May 19 2025 PENDING":
        - cell "#3219-HHOM":
          - paragraph: "#3219-HHOM"
        - cell "Loan Product":
          - paragraph: Loan Product
        - cell "UPDATE_INTEREST":
          - paragraph: UPDATE_INTEREST
        - cell "cbenewmaker cbenewbank":
          - paragraph: cbenewmaker cbenewbank
        - cell "May 19 2025":
          - paragraph: May 19 2025
        - cell "PENDING"
        - cell:
          - link:
            - /url: /action/detail/c2fc2022-8dbc-49b2-ac1f-5c60377a8af0?action=LOAN_PRODUCT
            - button:
              - img
  - text: "Rows per page:"
  - button "10":
    - text: "10"
    - img
  - list:
    - listitem: Showing 1-10 of 69 items
    - listitem "Previous Page":
      - img
    - listitem "1"
    - listitem "2"
    - listitem "3"
    - listitem "Next 3 Pages": •••
    - listitem "7"
    - listitem "Next Page":
      - img
    - listitem:
      - text: Go to
      - textbox "Page"
      - text: Page
  - paragraph: Copyright © 2025 Connect System | EagleLion System technology. All rights reserved.
  - text: Copyright © 2025 CONNECT System | EagleLion System Technology. All rights reserved.
- region "Notifications alt+T"
- alert
```

# Test source

```ts
   1 | import { expect } from '@playwright/test';
   2 |
   3 | export class ApprovePage {
   4 |   constructor(page) {
   5 |     this.page = page;
   6 |     this.statusButton = page.getByRole('button', { name: 'Status' });
   7 |     this.pendingTab = page.getByText('Pending');
   8 |   }
   9 |
  10 |   async navigateToPending() {
  11 |     await this.statusButton.click();
  12 |     await this.pendingTab.click();
  13 |   }
  14 |
  15 |   async approveLoanProduct(rowName) {
  16 |     const row = this.page.getByRole('row', { name: new RegExp(rowName, 'i') });
> 17 |     await row.getByRole('button').click();
     |                                   ^ Error: locator.click: Error: strict mode violation: getByRole('row', { name: /Loan Product/i }).getByRole('button') resolved to 9 elements:
  18 |     await this.page.getByRole('button', { name: 'Approve' }).click();
  19 |     await this.page.getByRole('button', { name: 'Approve' }).click(); // Confirmation
  20 |   }
  21 | }
  22 |
```