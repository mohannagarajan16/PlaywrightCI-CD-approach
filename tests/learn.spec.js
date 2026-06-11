const {test, expect}= require('@playwright/test');

test('First test',async ({page})=>{
    await page.goto('https://www.google.com/');
    console.log(await page.title());
   // await page.locator('input[name="q"]').type('Playwright');
   // await page.locator('input[name="btnK"]').click();
   // await page.waitForTimeout(2000);
})

test('Second test',async ({page})=>{
    await page.goto('https://login.yahoo.com/');
    await expect(page).toHaveTitle(`Log-in-Sign in to Login'`);
    
    
})
 
test('Third test' ,async({page})=>{
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await page.locator('#username').type('rahulshettyacademy');
    await page.locator('#password').type('learning');
    await page.locator('#signInBtn').click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('login page practise | Rahul Shetty Academy');
});