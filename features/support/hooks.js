const { Before, After, BeforeStep, AfterStep } = require("@cucumber/cucumber");
const {test, expect} = require ('@playwright/test');
const { POManager } = require('../../pageobjects/POManager')
const {Given, When, Then} = require ('@cucumber/cucumber');
const {chromium} = require('playwright'); 
const { Status } = require("@cucumber/cucumber");
const path = require("node:path");


Before( async function()

{

    const browser = await chromium.launch({headless:false});
    const context = await browser.newContext();
    this.page = await context.newPage();
    this.POmanager = new POManager(this.page);

}
)
BeforeStep( function(){


})

AfterStep( async function({result})
{

if(result.status === Status.FAILED)
{
   await this.page.screenshot({ path: `screenshots/failure-${Date.now()}.png` });

}


}




)



After(function()
{
console.log(this.orderId);

}
);








