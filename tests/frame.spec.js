import {test,expect} from '@playwright/test';

test('iframe handling', async({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    const iframe = await page.frameLocator('#courses-iframe');
    await iframe.getByRole('link', { name: 'Job Support' }).click();
    await expect(await iframe.locator('h1').textContent()).toContain('Job Support');  
   // await iframe.locator('a[href="consulting"][css="1"]').click();


})