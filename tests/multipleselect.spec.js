import { test } from '@playwright/test'
test('Multiple Select Test', async ({ page }) => {
    await page.goto("https://www.testautomationcentral.com/demo/dropdown.html");
    await page.locator('//button[@data-target="multi - select - dropdown"]').click();
 //await page.selectOption("//select[contains(@class,"form - multiselect")]/child::option[@value="option1"]/following-sibling::option[@value="option3"]/following-sibling::option[@value="option5"]);
    
await page.selectOption('//select[contains(@class,"form-multiselect")]', [
    { value: "option1" },
    { value: "option3" },
    { value: "option5" }
]);
})