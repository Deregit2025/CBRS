# Test info

- Name: End-to-end: Update interest rate and approve, then verify as Maker
- Location: C:\Users\derej\Desktop\Connect\tests\bankPortal\Checker\approve.spec.js:12:1

# Error details

```
Error: locator.waitFor: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('textbox', { name: 'Email' }) to be visible

    at login (C:\Users\derej\Desktop\Connect\pages\bankPortal\maker\login.page.js:13:20)
    at C:\Users\derej\Desktop\Connect\tests\bankPortal\Checker\approve.spec.js:41:3
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
  - button "Status":
    - text: Status
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
      - row "#0211-OAYC Loan Product UPDATE_INTEREST cbenewmaker cbenewbank Jun 19 2025 APPROVED":
        - cell "#0211-OAYC":
          - paragraph: "#0211-OAYC"
        - cell "Loan Product":
          - paragraph: Loan Product
        - cell "UPDATE_INTEREST":
          - paragraph: UPDATE_INTEREST
        - cell "cbenewmaker cbenewbank":
          - paragraph: cbenewmaker cbenewbank
        - cell "Jun 19 2025":
          - paragraph: Jun 19 2025
        - cell "APPROVED"
        - cell:
          - link:
            - /url: /action/detail/0f32ec5b-0b5e-4d01-9937-11a8dff84b40?action=LOAN_PRODUCT
            - button:
              - img
      - row "#4046-8BLM Loan Product UPDATE_INTEREST cbenewmaker cbenewbank Jun 19 2025 APPROVED":
        - cell "#4046-8BLM":
          - paragraph: "#4046-8BLM"
        - cell "Loan Product":
          - paragraph: Loan Product
        - cell "UPDATE_INTEREST":
          - paragraph: UPDATE_INTEREST
        - cell "cbenewmaker cbenewbank":
          - paragraph: cbenewmaker cbenewbank
        - cell "Jun 19 2025":
          - paragraph: Jun 19 2025
        - cell "APPROVED"
        - cell:
          - link:
            - /url: /action/detail/41e195e5-cfbf-479f-8418-faa9d0d10869?action=LOAN_PRODUCT
            - button:
              - img
      - row "#3982-6GVV Loan Product UPDATE_INTEREST cbenewmaker cbenewbank Jun 19 2025 PENDING":
        - cell "#3982-6GVV":
          - paragraph: "#3982-6GVV"
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
            - /url: /action/detail/d71d4a88-86fe-49ec-a344-96c5c74af575?action=LOAN_PRODUCT
            - button:
              - img
      - row "#0478-D4KT Loan Product UPDATE_INTEREST cbenewmaker cbenewbank Jun 19 2025 PENDING":
        - cell "#0478-D4KT":
          - paragraph: "#0478-D4KT"
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
            - /url: /action/detail/244a445d-eed2-4761-a53e-bdc54d3139b1?action=LOAN_PRODUCT
            - button:
              - img
      - row "#9271-55M9 Loan Product UPDATE_INTEREST cbenewmaker cbenewbank Jun 19 2025 PENDING":
        - cell "#9271-55M9":
          - paragraph: "#9271-55M9"
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
            - /url: /action/detail/2e351b81-fc8e-4d29-891c-6c34fb274429?action=LOAN_PRODUCT
            - button:
              - img
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
  - text: "Rows per page:"
  - button "10":
    - text: "10"
    - img
  - list:
    - listitem: Showing 1-10 of 202 items
    - listitem "Previous Page":
      - img
    - listitem "1"
    - listitem "2"
    - listitem "3"
    - listitem "Next 3 Pages": •••
    - listitem "21"
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
   1 | export async function login(page) {
   2 |   const baseURL = process.env.BASE_URL;
   3 |   console.log("🔐 Logging into:", baseURL);
   4 |
   5 |   if (!baseURL) {
   6 |     throw new Error("❌ BASE_URL not defined. Make sure your .env is loaded.");
   7 |   }
   8 |
   9 |   await page.goto(baseURL);
  10 |
  11 |   // 👇 ✅ Wait for email input to be ready before interacting
  12 |   const emailInput = page.getByRole('textbox', { name: 'Email' });
> 13 |   await emailInput.waitFor({ state: 'visible', timeout: 10000 });
     |                    ^ Error: locator.waitFor: Test timeout of 30000ms exceeded.
  14 |
  15 |   await emailInput.fill('cbenewmaker@gmail.com');
  16 |   await page.getByRole('button', { name: 'Next' }).click();
  17 |
  18 |   const passwordInput = page.getByRole('textbox', { name: 'Password' });
  19 |   await passwordInput.waitFor({ state: 'visible', timeout: 10000 });
  20 |
  21 |   await passwordInput.fill('Password*1212');
  22 |   await page.getByRole('button', { name: 'Sign In' }).click();
  23 | }
  24 |
```