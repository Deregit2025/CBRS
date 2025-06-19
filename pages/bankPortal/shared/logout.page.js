export async function logout(page) {
  await page.getByRole('img', { name: /maker|checker|cbenewmaker|cbenewchecker/i }).click();
  await page.getByRole('button', { name: 'Sign Out' }).click();
}
