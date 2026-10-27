import {test} from '@playwright/test'

test('intro',async({page})=>{
    await page.goto("https://www.file.io/");
    await page.setInputFiles('//label[@for="select-files-input"]',"C:/Users/Vishnu varthan/Desktop/Corporate Documents/Glomatriz Doc/Mba overall certificate.pdf");
    await page.waitForTimeout(2000);
})