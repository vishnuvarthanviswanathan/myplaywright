// Task :1 => Finding Minimum Product Prize 


const { test } = require('@playwright/test');

test('Find minimum T-shirt price', async ({ page }) => {

    await page.goto('https://www.myntra.com/kids-tshirts');

    const prices = await page.locator (`//li[@class="product-base"]//span[@class="product-discountedPrice"]`).allInnerTexts();

    const priceList = prices.map(price =>Number(price.replace(/[^\d]/g, '')));

        const minimumPrice = Math.min(...priceList);
        console.log('Minimum T-shirt price:', minimumPrice);

});




// Task :2 => Minimum prize product name 


import { test, expect } from '@playwright/test';

test('Verify T-shirt count on Myntra', async ({ page }) => {
    await page.goto('https://www.myntra.com/boy-tshirts/');

    // Get product count
    const products = await page.locator('//li[@class="product-base"]');
    const productsCount = await products.count();
    console.log('T-shirt count:', productsCount);

    const pricesList = await page.locator('//li[@class="product-base"]//span[@class="product-discountedPrice"]').allTextContents();
    //     Get price count
    //     const pricecount = await tshirtprice.count();
    //     onsole.log('T-shirt price count:', pricecount);

    // Use map() to convert price strings into numbers

    const prices = pricesList.map(price => Number(price.replace('Rs. ', '')))
    // Find minimum price
    const minimumPrice = Math.min(...prices)
    console.log('Minimum T-shirt price: Rs.', minimumPrice);

    const minProductName = await page.locator(`//li[@class="product-base"]//span[@class="product-discountedPrice" and normalize-space()="Rs. ${minimumPrice}"]/ancestor::li[@class="product-base"]/descendant::h4[@class="product-product"]`).allInnerTexts();

    console.log('Product name:', minProductName);
})




// Task :3 => Total Product Count


const { test, expect } = require('@playwright/test');

test('Verify T-shirt count on Myntra', async ({ page }) => {
    await page.goto('https://www.myntra.com/boy-tshirts');

    // Search for T-shirts
    await page.locator('input.desktop-searchBar').fill('tshirts');
    await page.keyboard.press('Enter');

    // Locate the T-shirt products
    const tshirts = page.locator('.product-base');

    // Wait until products are displayed
    await expect(tshirts.first()).toBeVisible();

    // Get the product count
    const count = await tshirts.count();

    console.log('T-shirt count:', count);

    // Verify that at least one product is displayed
    expect(count).toBeGreaterThan(0);
});




// Task :4 => Finding the mininum price of the product (with Discount price and Without Discount Price)


const { test } = require('@playwright/test');

test('Find minimum kids T-shirt price', async ({ page }) => {

    await page.goto('https://www.myntra.com/kids-tshirts');

    const prices = page.locator(
        '//li[@class="product-base"]//div[@class="product-price"]//span[@class="product-discountedPrice"] | //li[@class="product-base"]//div[@class="product-price"]//span[not(@class) and text()]'
    );

    const priceTexts = await prices.allInnerTexts();

    const priceValues = priceTexts.map(price =>
        Number(price.replace(/[^\d]/g, ''))
    );

    const minimumPrice = Math.min(...priceValues);

    console.log('Minimum T-shirt price: Rs.', minimumPrice);
});



// Task :5 => Need to find 50 product in that 50 product need to find minimum price of the product and the product name 

    
import { test } from '@playwright/test';

test('Find minimum T-shirt price and product', async ({ page }) => {

    await page.goto('https://www.myntra.com/boy-tshirts');

    // const products = page.locator('//li[@class="product-base"]');

    // console.log('Product Count:', await products.count());
    async function getMinimumPrice() {
        const pricesText = await page.locator(
            '//li[@class="product-base"]//div[@class="product-price"]//span[@class="product-discountedPrice" or (not(@class) and text())]'
        ).allInnerTexts();

        const prices = pricesText.map(text =>
            Number(text.replace(/[^\d]/g, ''))
        );

        const minimumPrice = Math.min(...prices);

        console.log('Minimum Price:', minimumPrice);

        const productName = await getProductName(minimumPrice);

        console.log('Product Name:', productName);

    }


    async function getProductName(miniPrice) {

        const productName = await page.locator(`//li[@class="product-base"]/descendant::span[(@class="product-discountedPrice" and normalize-space()="Rs. ${miniPrice}") or (not(@class) and normalize-space()="Rs. ${miniPrice}")]/ancestor::li[@class="product-base"]/descendant::h4[@class="product-product"]`).allInnerTexts();

        return productName;
    }


    await getMinimumPrice();
});




// Task :6 => in yahoo search we need to find the xpath of "8" news in under the trending now


(span[text()="Trending now"]/ancestor::div[@class="layoutTop"]/following-sibling::div[@class="layoutMiddle"]//li[contains(@class,"keyword-wrapper")]//a[contains(@class,"keyword-text")])[8]



// Task :7 => amazon la product name kandu pidichitu adhu oda maximum rating pudichi andha minimum rating oda product ah highlight pananum


import { test, expect } from '@playwright/test';

test('Select iPhone 17 Pro with maximum rating', async ({ page }) => {

    await page.goto('https://www.amazon.in/s?k=iphone+17+pro');

    const products = page.locator(
        '//span[contains(text(),"iPhone 17 Pro") and not(contains(text(),"Pro Max"))]/ancestor::div[@data-cy="title-recipe"]'
    );

    //await expect(products.first()).toBeVisible({ timeout: 15000 });


    const ratingsText = await page.locator(
        '//span[contains(text(),"iPhone 17 Pro") and not(contains(text(),"Pro Max"))]/ancestor::div[@data-cy="title-recipe"]/following-sibling::div[@data-cy="reviews-block"]//span[contains(@class,"a-size-small")]').allTextContents();

        console.log(ratingsText)
    const ratings = await ratingsText.map(review => Number(review).toFixed(1));


    const maxRating = Math.max(...ratings);

    const productNameXPath =
        `//span[contains(text(),"iPhone 17 Pro") and not(contains(text(),"Pro Max"))]/ancestor::div[@data-cy="title-recipe"]/following-sibling::div[@data-cy="reviews-block"]//span[text()="${maxRating}"]/ancestor::div[@role="listitem"]//input[@aria-label="Add to cart"]`;

    await page.locator(productNameXPath).first().click();


    console.log('Maximum rating:', maxRating);

    console.log('Successfully clicked the highest-rated product');
});