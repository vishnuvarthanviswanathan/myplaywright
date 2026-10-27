import{test}from '@playwright/test'
test ('globalframe',async({page})=>{
    await page.goto ("https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame");
    const iframes1 = await page.frameLocator('//iframe[@class=" lazyloaded"]');
    await iframes1.locator('//a[@href="https://www.globalsqa.com/training/jmeter-training/"]').click();
    await page.waitForTimeout(2000);
    await iframes1.locator('//a[@href="https://www.globalsqa.com/training/hp-load-runner-online-training/"]').click();
    await page.waitForTimeout(2000);
    await page.getByRole ("link",{name:"Drag And Drop"}).click();
    await page.waitForTimeout(2000);

})