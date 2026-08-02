import { test, expect } from '@playwright/test';

test('first login test', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await page.locator('#username').fill('rahulshettyacademy');
    await page.locator('#password').fill('Learning@830$3mK2');
    const formControl = await page.locator("select[class='form-control']");
    await formControl.selectOption('consult');
    await page.locator('label.customradio').locator('span').nth(1).click();
    await page.locator('#terms').check();
    console.log(await page.locator('#terms').isChecked());
    await page.locator('#signInBtn').click();  
    //await page.waitForLoadState('networkidle');
    // await page.locator(".card-body h4").first().waitFor()
    // const title = await page.locator(".card-body h4").allTextContents();
    // console.log(title);
    // await expect(page.locator(".card-body h4").first()).toHaveText('iphone X');
    //await expect(page.title()).toHaveText('login page practise | Rahul Shetty Academy');

  // test steps go here
}); 

test('child window handling', async ({ browser }) => {

  const context = await browser.newContext();
  const page1 = await context.newPage();
  await page1.goto('https://rahulshettyacademy.com/loginpagePractise/'); 
  await page1.locator(".blinkingText[href='https://rahulshettyacademy.com/documents-request']").click();
  const page2= await context.waitForEvent('page');
  await page2.waitForLoadState();
  const text = await page2.locator('p.im-para.red').textContent();
  console.log(text);
  await expect(text).toContain('testing');
  await page2.pause();
//  const pages = context.pages();
//   const childPage = pages[1];
//   await childPage.waitForLoadState();
//   const text = await childPage.locator('.im-para.red').textContent();
//   console.log(text);  
 });

