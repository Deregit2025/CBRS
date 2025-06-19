# Test info

- Name: End-to-end: Update interest rate and approve, then verify as Maker
- Location: C:\Users\derej\Desktop\Connect\tests\bankPortal\Checker\approve.spec.js:12:1

# Error details

```
TimeoutError: page.waitForSelector: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('input[type="email"]') to be visible

    at login (C:\Users\derej\Desktop\Connect\pages\bankPortal\maker\login.page.js:13:14)
    at C:\Users\derej\Desktop\Connect\tests\bankPortal\Checker\approve.spec.js:14:3
```

# Page snapshot

```yaml
- img "Sign In Thumbnail"
- img "logo"
- heading "Welcome to" [level=4]
- heading "Connect Dashboard!" [level=2]
- img "logo"
- heading "Login" [level=3]
- paragraph: Welcome to Connect dashboard!
- text: Email
- textbox "Email"
- button "Next"
- link "Forgot Password":
  - /url: /auth/forgot-password
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
   9 |   // Force navigate to login page
  10 |   await page.goto(baseURL, { waitUntil: 'load' });
  11 |
  12 |   // ✅ Wait for login form to be visible
> 13 |   await page.waitForSelector('input[type="email"]', { timeout: 10000 });
     |              ^ TimeoutError: page.waitForSelector: Timeout 10000ms exceeded.
  14 |
  15 |   await page.getByRole('textbox', { name: 'Email' }).fill('cbenewmaker@gmail.com');
  16 |   await page.getByRole('button', { name: 'Next' }).click();
  17 |
  18 |   await page.waitForSelector('input[type="password"]', { timeout: 10000 });
  19 |   await page.getByRole('textbox', { name: 'Password' }).fill('Password*1212');
  20 |   await page.getByRole('button', { name: 'Sign In' }).click();
  21 | }
  22 |
```