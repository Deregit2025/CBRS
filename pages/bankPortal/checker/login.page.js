export async function loginChecker(page) {
  const baseURL = process.env.BASE_URL;
  //console.log(" Logging in as Checker:", baseURL);

  if (!baseURL) {
    throw new Error("❌ BASE_URL not defined. Make sure your .env file is loaded.");
  }
  await page.getByRole('textbox', { name: 'Email' }).fill('cbenewchecker@gmail.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Password*1212');
  await page.getByRole('button', { name: 'Sign In' }).click();
}
