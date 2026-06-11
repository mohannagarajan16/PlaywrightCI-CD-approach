import { test, expect } from '@playwright/test';

test('first login test', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await page.locator('#username').fill('rahulshettyacademy');
    await page.locator('#password').fill('Learning@830$3mK2');
    await page.locator('#signInBtn').click();  
    await expect(page.title()).toContainText('login page practise | Rahul Shetty Academy');

  // test steps go here
});


