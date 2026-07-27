import { test, expect } from '@playwright/test';

// da pra procurar mais aqui https://playwright.dev/docs/test-assertions

test("assertions", async ({page}) =>{

    await page.goto("http://uitestingplayground.com/verifytext");
  
    await expect(page).toHaveURL("http://uitestingplayground.com/verifytext"); // validando url 
    await expect(page).toHaveTitle("Verify Text");

    const element = await page.locator("h3"); // aqui a gente cria a variavel para ela receber o valor que queremos
    await expect(element).toBeVisible(); // valida se o elemento que a gente selecionou com a variavel está visuvel 
    await expect(element).toHaveText("Verify Text"); // valida se o elemento tem o texto que foi digitado

    const button = page.locator("#submit"); // cria uma variavel que procura um elemento com o id #submit
    await expect(button).toBeVisible(); // valida se está visivel 
    await expect(button).toBeHidden(); // valida se está escondido 

    await expect(button).toHaveText("Enviar"); // valida se é exatamente esse o texto do botão 
    await expect(button).toContainText("Enviar"); // valida se tem esse texto no botão ex.. pode ser Enviar formulário

    //valores de input 

    const input = page.locator("#name"); // cria a variavel pra ela receber o valor do elemento com o id #name

    await input.fill("Ary"); // colocando um valor dentro do campo 

    await expect(input).toHaveValue("Ary"); // validar se o valor colocado é o mesmo 

    await expect(input).toHaveAttribute("placeholder","Digite seu nome"); // valida se o valor do campo antes de ser preechido é o segundo valor fornecido 

    await expect(button).toHaveAttribute("type","submit"); // valida se o tipo do elemento é o mesmo que o do segundo valor formencido 

    await expect(button).toHaveClass("btn btn-primary"); // valida se o campo que a gente seleionou com a variavel tem a classe que foi colocada ali 

    // checkbox 

    const check = page.locator("#remember"); // cria a variavel que recebe o elemento com o id #remember

    await check.check(); // clica na checkbox

    await expect(check).toBeChecked(); // valida se foi clicada 

    //habilidado e desabilitado

    await expect(button).toBeEnabled(); // ver se um campo está habilitado 

    await expect(button).toBeDisabled(); // ver se um campo está desabilitado

    // editavel 
    await expect(input).toBeEditable(); // valida se um campo é editavel 

    //foco
    await input.focus(); // cria a variavel 

    await expect(input).toBeFocused(); // valida se aquele elemento está no foco da pagina ( se ele é o elemento que está pronto para receber a digitação do usuário.)

    // quantidade de elemento 
    const products = page.locator(".inventory_item");

    await expect(products).toHaveCount(6); // espera que tenha 6 itens na variavel que foi criada

    // valiar estilo 
    await expect(button).toHaveCSS("background-color","rgb(226, 35, 26)");

    //validar id 
    await expect(button).toHaveId("submitButton");

    //comparação numerica 

    const total = page.locator("#valor-total")
    
    await expect(total).toBe(10);




}) 
