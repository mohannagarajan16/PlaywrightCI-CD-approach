const { test,expect} = require("@playwright/test");
const { url } = require("node:inspector");


test('network test',async ({page})=>{
    const productname ='iphone 13 pro';
    const products = await page.locator('.card-body b');
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    await page.locator('#userEmail').type('mohannagarajan16@gmail.com');
    await page.locator('#userPassword').type('test@123A');
    await page.locator('#login').click();
    await page.waitForLoadState('networkidle');
    await page.locator('.card-body').first().waitFor();
    await page.locator('button[routerlink*="myorders"]').click();
    
    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",
    route=> route.continue({url:'https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=6a77094b85b8849b4937e123'}));

    await page.locator('button').filter({ hasText: 'View' }).first().click();
    await page.pause();
    await expect(await page.locator(".blink_me")).toHaveText('You are not authorize to view this order');
    });