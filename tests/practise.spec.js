const {test,expect} = require('@playwright/test');


test.only('practise test',async ({page})=>{
    await page.goto('https://rahulshettyacademy.com/client/#/auth/register');
    await page.locator('#firstName').type('Mohan');
    await page.locator('#lastName').type('Nagarajan');
    await page.locator('#userEmail').type('mohannagarajan16@gmail.com');    
    await page.locator('#userMobile').type('8667669818');  
    await page.locator('select:visible').selectOption('Engineer');
    
    await page.locator("input[value='Male']").click();
    await page.locator('#userPassword').type('test@123');
    await page.locator('#confirmPassword').type('test@123');
    await page.evaluate(() => window.scrollTo(0, 500));
    await page.getByRole('checkbox').click();
    await page.locator("#login").click();
    // Wait for toast message to appear
    const toast = await page.locator('#toast-container'); // common toast selector
    await toast.waitFor({ state: 'visible' });
    //await page.pause();
    // Print toast message text
    const toastText = await toast.textContent();
    console.log('Toast message:', toastText);

    // Assert registration is successful
    expect(toastText).toContain('Registered Successfully');
});