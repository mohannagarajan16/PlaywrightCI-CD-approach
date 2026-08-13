const {test, expect} = require ('@playwright/test');
const { POManager } = require('../../pageobjects/POManager.js')
const {Given, When, Then} = require ('@cucumber/cucumber');
const {chromium} = require('playwright'); 
const path = require('path');

Given('As a user I can login into website with {string} and {string}', {timeout: 100*1000}, async function (username, password){
  
    const products = await this.page.locator('.card-body b');
    const loginpage = this.POmanager.getLoginPage();
    await loginpage.goto();
    await loginpage.login(username,password);
  
});

  When('Select a product {string} from page and add in to cart', async function (productname) {
  // Write code here that turns the phrase above into concrete actions
    const dashboard = this.POmanager.getDashboard();
    await dashboard.searchProduct(productname);
    await dashboard.navigationToCart();

  
});

Then('order get placed and confirm the order', async function () {
  // Write code here that turns the phrase above into concrete actions

  const cartpage = this.POmanager.getCartPage();
    await cartpage.processCheckout();
    await cartpage.checkout();

    const orderPage = this.POmanager.getOrderpage();
    await orderPage.selectCountry('India','ind');
    this.orderId = await orderPage.placetheorder();
    console.log(this.orderId);
     
    const orderReview = this.POmanager.getOrderconfirm();
    await orderReview.orderR(this.orderId);
    expect(this.orderId.includes(await orderReview.getOrderId())).toBeTruthy();
  
});



Given('As a newuser I can login into website with {string} and {string}', {timeout: 100*1000}, async function (username, password) {
  // Write code here that turns the phrase above into concrete actions
  const loginpage = this.POmanager.getLoginPage();
    await loginpage.goto();
    await loginpage.login(username,password);
});

Then('log failed', function () {
  // Write code here that turns the phrase above into concrete actions
   this.page.screenshot({path:'screenshot2.png'});

   }

  );