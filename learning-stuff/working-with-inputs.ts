import { test, expect } from '@playwright/test';


test("Working w/ inputs", async ({page}) =>{

    await page.goto("http://uitestingplayground.com/textinput")
    
    await page.type("#newButtonName", "texto"); // o primeiro é o seletor o segundo é o texto 
    
   
}) 
