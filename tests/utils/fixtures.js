const { test:base } = require('@playwright/test');
const { request } = require('@playwright/test');
const { APiUtils } = require('./APiUtils');

const loginPayload = { userEmail: "mohannagarajan16@gmail.com", userPassword: "test@123A" };
const orderPayLoad = { orders: [{ country: "Russian Federation", productOrderedId: "6960ea76c941646b7a8b3dd5" }] };




exports.customtest =base.extend(
{
    authendicatepage: async({browser},use) =>
    {

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    await page.locator('#userEmail').type('mohannagarajan16@gmail.com');
    await page.locator('#userPassword').type('test@123A');
    await page.locator('#login').click();
    await page.waitForLoadState('networkidle');
    await page.locator('.card-body').first().waitFor();
    await use(page);



    },

    createOrder: async({},use) =>
    {

       const apiContext = await request.newContext();
       const apiUtils = new APiUtils(apiContext,loginPayload);       
       //response =  await apiUtils.createOrder(orderPayLoad); 
        await apiUtils.getToken();                         // ✅ get token first
        const response = await apiUtils.createOrder(orderPayLoad);
        console.log(response);
        await use(response); 
       




    },
    Datadriven:
    {

     productName : 'iphone 13 pro'

    }




}



    


)