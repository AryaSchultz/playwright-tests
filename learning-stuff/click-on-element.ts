import { test, expect } from '@playwright/test';


test("Click on element", async ({page}) =>{

    await page.goto("http://uitestingplayground.com/click");
    await page.click("#badButton"); //CLICANDO USANDO ID 
    await page.click("text=Button That Ignores DOM Click Event"); // clicando baseado no texto
    
}) 

