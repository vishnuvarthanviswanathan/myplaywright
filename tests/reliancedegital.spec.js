import { test } from '@playwright/test';

test('window handling', async ({ page, context }) => {

    await page.goto("https://www.reliancedigital.in/");

    await page.locator('//div[@class="address-bar desktop-only show"]//div[@class="addressbar__container full-width-container menu-container"]//div[text()=" Tablets "]').click();

    await page.waitForTimeout(2000);
    await page.mouse.wheel(0, 2000);

    const [newTab] = await Promise.all([
        context.waitForEvent('page'),
        page.locator('//div[@class="wrapper"]//picture[@class="card-image"]/child::img[@alt="Asus Pad 30.98 cm (12.2 inch) Wi-Fi Tablet, 256 GB, 8 GB RAM, Pure White, T3201M5A-TL005DW"]').click()
    ]);

    await newTab.waitForLoadState();

    await newTab.locator('//div[@class="product-description-container"]//div[@aria-label="add to compare"]').click();

    await newTab.waitForTimeout(2000);

    await page.bringToFront();
    await page.mouse.wheel(0, 2000);

    const [newTab2] = await Promise.all([
        context.waitForEvent('page'),
        page.locator('//div[@class="wrapper"]//picture[@class="card-image"]/child::img[@alt="Moto Pad 70 Groove 32.25 cm (12.7 Inch) WiFi Tablet with Clear Case, 8 GB RAM, 256 GB, Pantone Blue Surf, ZAJ80000IN"]').click()
    ]);

    await newTab2.waitForLoadState();

    await newTab2.locator('//div[@class="product-description-container"]//div[@aria-label="add to compare"]').click();

    await newTab2.waitForTimeout(2000);

    await newTab2.locator('//div[@aria-label="Product comparison"]//button[@aria-label="Go to product comparison page"]').click();
    await page.mouse.wheel(0, 1000);
    await newTab2.waitForTimeout(2000);
});