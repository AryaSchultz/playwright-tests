import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

test('Login com credenciais válidas', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill(process.env.STANDARD_USERNAME!);
    await page.getByPlaceholder('Password').fill(process.env.SAUCE_PASSWORD!);

    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});