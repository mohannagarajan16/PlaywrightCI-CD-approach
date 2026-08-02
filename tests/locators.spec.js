import { test, expect } from '@playwright/test';

test ('locator test',async ({page})=>{
    await page.goto('https://rahulshettyacademy.com/angularpractice/');
    
    await page.locator("div[class='form-group'] input[name='name']").type('Mohan Nagarajan');
    await page.locator("div[class='form-group'] input[name='email']").fill('mohannagarajan16@gmail.com');
    await page.getByPlaceholder('Password').fill('test@123A');
    await page.getByText('Check me out if you Love IceCreams!').check();
    await page.getByLabel('Gender').selectOption('Male');
    await page.getByText('Employed').check();
   //await page.locator('input[type="date"]').fill('01/01/1990');
    await page.getByRole('button',{name:'Submit'}).click();
    await page.getByText('Success!  The Form has been submitted successfully!').isVisible();    
    await page.getByRole('link', { name: 'Shop' }).click();    
    await page.locator('app-card').filter({hasText:'Nokia Edge'}).getByRole("button").click();
     
}
 
    
);