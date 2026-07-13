import{test,expect } from '@playwright/test';  


test('login test',async ({page})=>{
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    await page.locator('#userEmail').type('mohannagarajan16@gmail.com');
    await page.locator('#userPassword').type('test@123A');
    await page.locator('#login').click();
    
}
);