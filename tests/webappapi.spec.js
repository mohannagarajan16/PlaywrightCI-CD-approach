const {test,expect,request}= require('@playwright/test');
const { APiUtils } = require('./utils/APiUtils');
const loginPayload = {userEmail:"mohannagarajan16@gmail.com",userPassword:"test@123A"};
const orderPayLoad = {orders:[{country:"Russian Federation",productOrderedId:"6960ea76c941646b7a8b3dd5"}]};
let response;

test.beforeAll ('API', async()=>{
    const apiContext = await request.newContext();
    const apiUtils = new APiUtils(apiContext,loginPayload);
           response =  await apiUtils.createOrder(orderPayLoad);
    
    console.log(response);
})
test('Get Order Details',async({page})=>{
    await page.addInitScript(value=> {

        window.localStorage.setItem('token',value);
    }, response.token);
    await page.goto('https://rahulshettyacademy.com/client');
    await page.locator("button[routerlink*='myorders']").click();
    await page.locator("tbody").waitFor();
    const rows = await page.locator("tbody tr");    

  for(let i=0; i<await rows.count(); ++i){
    const rowOrderId = await rows.nth(i).locator("th").textContent();
    if(response.orderId.includes(rowOrderId)){
        await rows.nth(i).locator("button").first().click();
        break;
    }   

  }

const orderIdDetails = await page.locator(".col-text").textContent();
expect(response.orderId.includes(orderIdDetails)).toBeTruthy();
await page.pause();
});
