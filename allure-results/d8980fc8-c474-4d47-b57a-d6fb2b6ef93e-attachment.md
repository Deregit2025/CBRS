# Test info

- Name: End-to-end: Update interest rate and approve
- Location: C:\Users\derej\Desktop\Connect\tests\bankPortal\Checker\approve.spec.js:12:1

# Error details

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('textbox', { name: 'Email' })

    at makerLogin (C:\Users\derej\Desktop\Connect\pages\bankPortal\maker\login.page.js:8:54)
    at C:\Users\derej\Desktop\Connect\tests\bankPortal\Checker\approve.spec.js:14:9
```

# Test source

```ts
   1 | export async function login(page) {
   2 |   const baseURL = process.env.BASE_URL;
   3 |   //console.log(" Logging in as Checker:", baseURL);
   4 |
   5 |   if (!baseURL) {
   6 |     throw new Error("❌ BASE_URL not defined. Make sure your .env file is loaded.");
   7 |   }
>  8 |   await page.getByRole('textbox', { name: 'Email' }).fill('cbenewmaker@gmail.com');
     |                                                      ^ Error: locator.fill: Test timeout of 30000ms exceeded.
   9 |   await page.getByRole('button', { name: 'Next' }).click();
  10 |   await page.getByRole('textbox', { name: 'Password' }).fill('Password*1212');
  11 |   await page.getByRole('button', { name: 'Sign In' }).click();
  12 | }
  13 |
```