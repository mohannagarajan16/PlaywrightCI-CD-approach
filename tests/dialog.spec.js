import {test,expect} from  "playwright/test";

test('dialog handling', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await page.waitForLoadState('networkidle');

    page.on('dialog', dialog => dialog.accept());   // register FIRST

    await page.locator('#confirmbtn').click();       // now the dialog gets handled
    await page.getByRole('button', { name: 'Mouse Hover' }).hover();
    await page.pause();

}
);