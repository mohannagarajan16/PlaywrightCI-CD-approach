import{test,expect} from '@playwright/test';

test('dropdown handling', async({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await page.locator('#dropdown-class-example').selectOption('option3');
    await expect(page.locator('#dropdown-class-example')).toHaveValue('option3');
});
