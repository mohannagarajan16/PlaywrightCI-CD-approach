
class dashboard
{
 constructor(page){
        this.page = page;
        this.prodcuts = page.locator('.card-body');
        this.producttext = page.locator('.card-body b');
        this.addtocart = page.locator('button').filter({ hasText: 'Add To Cart' }).last();
        this.cartbutton = page.locator("//button[@routerlink='/dashboard/cart']");
        
    
 }

 async searchProduct(productname){

    await this.prodcuts.first().waitFor();
    const titles = await this.producttext.allTextContents();
    console.log(titles);
    const count = await this.producttext.count();
    for(let i=0; i<count; ++i){
        if(await this.producttext.nth(i).textContent() === productname){
             console.log(await this.producttext.nth(i).textContent());
              //await products.nth(i).locator("text= Add To Cart").waitFor();
              //await products.nth(i).locator("text= Add To Cart").click();
         await this.addtocart.click();
         break;

        }
 }
 }
async navigationToCart(){
    await this.cartbutton.click();



}
}
module.exports = {dashboard};

