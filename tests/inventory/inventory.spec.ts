import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

test.beforeEach('Login com credenciais válidas', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill(process.env.STANDARD_USERNAME!);
    await page.getByPlaceholder('Password').fill(process.env.SAUCE_PASSWORD!);

    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

test('Validação quantidade de produtos', async ({ page }) => {

    const products = page.locator('.inventory_item');
    
    await expect(products).toHaveCount(6); // Valida se a quantidade de produtos é 6
});

test('Validar se todos os produtos tem nome descrição e preço', async ({ page }) => {

    const name = page.locator('.inventory_item_name');
    const description = page.locator('.inventory_item_desc');
    const price = page.locator('.inventory_item_price');
    
    await expect(name).toHaveCount(6); // Valida se a quantidade de produtos é 6
    await expect(description).toHaveCount(6); // Valida se a quantidade de descrições é 6
    await expect(price).toHaveCount(6); // Valida se a quantidade de preços é 6

    for (let i = 0; i < 6; i++) {
        await expect(name.nth(i)).not.toHaveText('');
        await expect(description.nth(i)).not.toHaveText('');
        await expect(price.nth(i)).not.toHaveText('');
    }
});

test('Validar se o formato dos preços está correto', async ({ page }) => {

  
    const price = page.locator('.inventory_item_price');
    
    for (let i = 0; i < 6; i++) {
       await expect(price.nth(i)).toHaveText(/\$\d+\.\d{2}/); // valida se o preço estpa no formato correto 
    // usando regx 
    // \$     -> começa com $
    // \d+    -> um ou mais números
    // \.      > ponto
    // \d{2}  -> exatamente duas casas decimais
    }

});

test('Validar se o botão de adicionar ao carrinho funciona', async ({ page }) => {

    const addToCartButton = page.locator('.btn_inventory');
    await addToCartButton.first().click(); // clica no primeiro botão de adicionar ao carrinho  
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1'); // valida se o carrinho tem 1 item

});
