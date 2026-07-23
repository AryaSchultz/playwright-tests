import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

test('Login com usuário inválido', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username').fill(process.env.ERROR_USERNAME!);
    await page.getByPlaceholder('Password').fill(process.env.SAUCE_PASSWORD!);

    await page.getByRole('button', { name: 'Login' }).click();

    const errorMessage = page.locator('[data-test="error"]'); // criando uma constante que vai guardar um locador

    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');

});

test('Login com senha inválida', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username').fill(process.env.STANDARD_USERNAME!);
    await page.getByPlaceholder('Password').fill(process.env.ERROR_PASSWORD!);

    await page.getByRole('button', { name: 'Login' }).click();

    const errorMessage = page.locator('[data-test="error"]'); // criando uma constante que vai guardar um locador

    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');

});

test('Login com usuário e senha inválidos ', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username').fill(process.env.ERROR_USERNAME!);
    await page.getByPlaceholder('Password').fill(process.env.ERROR_PASSWORD!);

    await page.getByRole('button', { name: 'Login' }).click();

    const errorMessage = page.locator('[data-test="error"]'); // criando uma constante que vai guardar um locador

    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');

});

test('Login sem informar o usuário', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Password').fill(process.env.ERROR_PASSWORD!);

    await page.getByRole('button', { name: 'Login' }).click();

    const errorMessage = page.locator('[data-test="error"]'); // criando uma constante que vai guardar um locador

    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toHaveText('Epic sadface: Username is required');

});

test('Login sem preencher usuário e senha', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.getByRole('button', { name: 'Login' }).click();

    const errorMessage = page.locator('[data-test="error"]'); // criando uma constante que vai guardar um locador

    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toHaveText('Epic sadface: Username is required');

});

test('Login sem informar a senha', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username').fill(process.env.ERROR_USERNAME!);

    await page.getByRole('button', { name: 'Login' }).click();

    const errorMessage = page.locator('[data-test="error"]'); // criando uma constante que vai guardar um locador

    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toHaveText('Epic sadface: Password is required');

});

test('Login com usuário bloqueado', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username').fill(process.env.BLOCKED_USERNAME!);
    await page.getByPlaceholder('Password').fill(process.env.SAUCE_PASSWORD!);

    await page.getByRole('button', { name: 'Login' }).click();

    const errorMessage = page.locator('[data-test="error"]'); // criando uma constante que vai guardar um locador

    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toHaveText('Epic sadface: Sorry, this user has been locked out.');

});