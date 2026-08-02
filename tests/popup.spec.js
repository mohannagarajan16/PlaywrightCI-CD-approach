import {test, expect} from '@playwright/test';


test('popup handling', async({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://demoqa.com/alerts');

    page.on('dialog', async (dialog) => {
        console.log(dialog.type());
        console.log(dialog.message());  
        await dialog.accept('Mohan');
    });

    await page.locator("#promtButton").click();
  
    await page.screenshot({ path: 'popup.png' });
 
}
);