import {test, expect} from '@playwright/test';

test('practise test1', async ({page})=>{

    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    await page.locator('#userEmail').fill("mohannagarajan16@gmail.com");
    await page.locator('#userPassword').fill("test@123A");
    await page.getByRole('button').click();
    await page.waitForLoadState('networkidle');
    await page.locator('.card-body').first().waitFor();
    const title = await page.locator('.card-body b').allTextContents();
    console.log(title);
    const count = await page.locator('.card-body b').count();


})