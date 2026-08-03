import{test, expect} from '@playwright/test';

test('file uploading', async({page})=>{
    await page.goto('https://rahulshettyacademy.com/upload-download-test/');
    await page.locator('#fileinput').setInputFiles('C:/Users/Lenovo/Playwright- Mohan/tests/download.xlsx');
    await page.screenshot({path: 'upload.png'});
    
    const [download] = await Promise.all([
        page.waitForEvent('download'),
        page.locator('#downloadButton').click()
    ])
      console.log(await download.suggestedFilename());
      const filename = download.suggestedFilename();
      await expect(filename).toBe('download.xlsx');

     const path = await download.path();
        console.log(path);

      await download.saveAs('C:/Users/Lenovo/Playwright- Mohan/tests/downloaded.xlsx');
      
});
