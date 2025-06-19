import { expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config({ path: `./envFiles/.env.${process.env.testenv}` });

export async function login(page) {
  await page.goto(process.env.BASE_URL);  // ← dynamic based on testenv
  await page.getByRole('textbox', { name: 'Email' }).fill('cbenewmaker@gmail.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Password*1212');
  await page.getByRole('button', { name: 'Sign In' }).click();
}
