const {test, expect} = require('@playwright/test');

const { POManager } = require('../pageobjects/POManager'); 

test('login test',async ({page})=>{
    const POmanager = new POManager(page);
    const productname ='iphone 13 pro';
    const username = 'mohannagarajan16@gmail.com';
    const password = 'test@123A';
    const products = await page.locator('.card-body b');
    const loginpage = POmanager.getLoginPage();
    await loginpage.goto();
    await loginpage.login(username,password);
    
    const dashboard = POmanager.getDashboard();
    await dashboard.searchProduct(productname);
    await dashboard.navigationToCart();
    
    const cartpage = POmanager.getCartPage();
    await cartpage.processCheckout();
    await cartpage.checkout();

    const orderPage =  POmanager.getOrderpage();
    await orderPage.selectCountry('India','ind');
    const orderId = await orderPage.placetheorder();
    console.log(orderId);
     
    const orderReview = POmanager.getOrderconfirm();
    await orderReview.orderR(orderId);
    expect(orderId.includes(await orderReview.getOrderId())).toBeTruthy;

}
)
//     await page.locator('.card-body').first().waitFor();
//     const title = await page.locator('.card-body b').allTextContents();
//     console.log(title);
//     const count = await products.count();
//     for(let i=0; i<count; ++i){
//         if(await products.nth(i).textContent() === productname){
//              console.log(await products.nth(i).textContent());
//               //await products.nth(i).locator("text= Add To Cart").waitFor();
//               //await products.nth(i).locator("text= Add To Cart").click();           
             
//        await page.locator('button').filter({ hasText: 'Add To Cart' }).last().click();
            
//             break;
//         }

        
// }
// //await page.pause();
// //await page.locator("[routerlink*='cart']").click();
// await page.locator("//button[@routerlink='/dashboard/cart']").click();
// await page.locator('div li').first().waitFor();
// const bool = await page.locator('h3:has-text("iphone 13 pro")').isVisible();
// expect(bool).toBeTruthy();
// await page.locator('text=Checkout').click();

// await page.locator("[placeholder*='Country']").type("ind",{delay:100});
// const dropdown = page.locator('.ta-results');
// await dropdown.waitFor();
// const optionsCount = await dropdown.locator('button').count();  
// for(let i=0; i<optionsCount; ++i){
//     const text = await dropdown.locator('button').nth(i).textContent(); 
//     if(text.trim() === "India"){
//         await dropdown.locator('button').nth(i).click();
//         break;
//     }


// }

// await page.locator('.action__submit').click();
// await expect(page.locator('.hero-primary')).toHaveText(' Thankyou for the order. ');
// await page.locator('.order-summary').waitFor();
// const orderId = await page.locator('.em-spacer-1 .ng-star-inserted').textContent();
// console.log(orderId);
// await page.locator('button[routerlink*="myorders"]').click();

// await page.locator('tbody').waitFor();
// const rows = await page.locator('tbody tr');
// for(let i=0; i< await rows.count(); ++i){
//     const rowOrderId = await rows.nth(i).locator('th').textContent();
//     if(orderID.includes(rowOrderId)){
//         await rows.nth(i).locator('button').first().click();
//         break;
//     }
// }
// const orderIdDetails = await page.locator('.col-text').textContent();
// expect(orderID.includes(orderIdDetails)).toBeTruthy();  
// await page.pause();

// }

// );

