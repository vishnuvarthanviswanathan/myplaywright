// import{test}from '@playwright/test'

// test ('oneFrameTest',async({page})=>{
// await page.goto ("https://www.tutorialspoint.com/selenium/practice/frames.php");
// const iframes1 = await page.frameLocator('//iframe[@src="new-tab-sample.php"and @width="100%"and @height="150px"]');
// await iframes1.locator('//a[@href="https://www.tutorialspoint.com"]').click();
// await page.waitForTimeout(2000);


// const iframes2 = await page.frameLocator('//iframe[@src="new-tab-sample.php"and @ width="30%"and @ height="100px"]');
// await iframes2.locator('//a[@href="https://www.tutorialspoint.com"]').click();
// await page.waitForTimeout(2000);

// })


import{test}from '@playwright/test'
test ('oneFrameTest',async({page})=>{
    await page.goto ("https://www.tutorialspoint.com/selenium/practice/frames.php");
    const iframes1 = await page.frameLocator('//h2[text()="Iframe 2"]/preceding-sibling::iframe[@src="new-tab-sample.php"]');
    const iframes2 = await page.frameLocator('//h2[text()="Iframe 2"]/following-sibling::iframe[@src="new-tab-sample.php"]');
    await iframes1.locator('//a[@href="https://www.tutorialspoint.com"]').click();
    await page.waitForTimeout(2000);
    await iframes2.locator('//a[@href="https://www.tutorialspoint.com"]').click();
    await page.waitForTimeout(2000);
})