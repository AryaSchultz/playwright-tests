import { test, expect } from '@playwright/test';


test("Selectors", async ({page}) =>{
    
    //text
    await page.click("text = algum texto que ta na tela");
    //css selectors
    await page.click("button") // elemento do css
    await page.click("#id"); // id
    await page.click(".class"); // classe
   
    // only visible css selector
    await page.click(".submitbtn:visible") // ele só vai clicar na classe visivel
    // comninaçoes 

    await page.click("#username .first") //clica no id username onde tem a classe .frist 

    //Xpath
    await page.click("//button")
}) 
