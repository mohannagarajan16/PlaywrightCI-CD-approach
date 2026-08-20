const {test,expect,request}= require('@playwright/test');
const {customtest} = require('./utils/fixtures.js');


customtest('demofixture',async({authendicatepage,createOrder,Datadriven})=> {

    authendicatepage.goto("https://rahulshettyacademy.com/client/#/dashboard/dash");
    await authendicatepage.pause();
    await authendicatepage.locator('button[routerlink*="myorders"]').click();
    await authendicatepage.locator('tbody').waitFor();
    await expect(authendicatepage.getByText(createOrder.orderId)).toBeVisible();
    console.log(createOrder.orderId);
    console.log(Datadriven.productName);
//login to application/create order and verify the order is created from histroy page 





}
)