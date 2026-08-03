import { expect } from "@playwright/test";
class cartpage


{
 constructor(page){
        this.page = page;
        this.cartProducts = page.locator("div li").first();
        this.cartproduct = page.locator('h3:has-text("iphone 13 pro")');
        this.checkoutbutton = page.locator('text=Checkout');

 }

 async processCheckout(productname){
       await this.cartProducts.waitFor();
       const bool = await this.cartproduct.isVisible();
       console.log(await this.cartproduct.textContent());
       expect(bool).toBeTruthy();
      
       
 }
 async checkout(){
     await this.checkoutbutton.click();
 }

}
module.exports = {cartpage};