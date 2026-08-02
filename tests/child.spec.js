import {test, expect} from '@playwright/test';

test.only('Child Window', async({browser})=>{
    const context = await browser.newContext();({
    recordVideo: { dir: 'test-results/videos/' }
  });
    const page1 =await context.newPage();
    await page1.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await page1.locator("a.blinkingText").click();
    const page2 = await context.waitForEvent('page');
    await page2.waitForLoadState();
    const text = await page2.locator("p[class='text-base md:text-lg']").textContent();
    console.log(text);
    await expect(text).toContain("1Browse open roles, take a free assessment, and let your skills speak for you.");
    //await page2.screenshot({ path: 'child-window.png', fullPage: true });
    await page1.bringToFront();
    await context.close();
    //await page2.pause();
}
);