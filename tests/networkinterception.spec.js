const {test,expect,request}= require('@playwright/test');
const { APiUtils } = require('./utils/APiUtils');
const loginPayload = {userEmail:"mohannagarajan16@gmail.com",userPassword:"test@123A"};
const orderPayLoad = {orders:[{country:"Russian Federation",productOrderedId:"6960ea76c941646b7a8b3dd5"}]};
const fakePayLoad = {data:[],message:"No Orders"}
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

 await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",
async route =>
{
  const response = await page.request.fetch(route.request());
   let body = JSON.stringify (fakePayLoad);
   route.fulfill(
      {
    response,
    body
      }
   );  

} );







    await page.locator("button[routerlink*='myorders']").click();
    await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*");
    console.log(await page.locator('div.mt-4.ng-star-inserted').textContent());
   
});
