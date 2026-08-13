const { expect } = require("@playwright/test");

class orderpage{
constructor(page)
 {

    this.page = page;
    this.country = page.locator("[placeholder*='Country']")
    this.dropdown = page.locator('.ta-results');
    this.submit = page.locator('.action__submit');
    this.orderconfirmationtext = page.locator('.hero-primary');
    this.orderId = page.locator('.em-spacer-1 .ng-star-inserted');
}

    async selectCountry(countryName,countryCode)

    {   
    
    await this.country.type(countryCode,{delay:100});
    await this.dropdown.waitFor();
    const optionsCount = await this.dropdown.locator('button').count();  
    for(let i=0; i<optionsCount; ++i){
        const text = await this.dropdown.locator('button').nth(i).textContent(); 
        if(text.trim() === countryName){
            await this.dropdown.locator('button').nth(i).click();
            break;
        }
    
    
    }
}

    async placetheorder()

    {

     await this.submit.click();
     await expect(this.orderconfirmationtext).toHaveText(" Thankyou for the order. ");
     return await this.orderId.textContent();
    
    }
    
}
module.exports = {orderpage}
   





