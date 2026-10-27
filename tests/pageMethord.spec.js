import{test}from '@playwright/test'

test('intro',async({page})=>{
    await page. goto("https://www.flipkart.com/");
    await page. waitForTimeout(4000);
    // await page. goto("https://www.agaram.in/");
    // await page. waitForTimeout(2000);
    // await page. goBack();
    // await page. goForward();
    //await page. reload();
    //const url = await page.url();
    console.log(url); 
    await page.screenshot({
        path : 'screenshot.png',
        fullPage : true
})
})