
class orderconfirm

{
constructor(page){
               this.page = page;
               this.myorder= page.locator('button[routerlink*="myorders"]');
               this.tbody = page.locator('tbody')
               this.orderDetails = page.locator('.col-text')
               this.rows = page.locator('tbody tr');
}

async orderR(orderId)
{

await this.myorder.click();

await this.tbody.waitFor();
//const rows = await page.locator('tbody tr');
for(let i=0; i< await this.rows.count();++i)
    {
    const rowOrderId = await this.rows.nth(i).locator('th').textContent();
    if(orderId.includes(rowOrderId)){
        await this.rows.nth(i).locator('button').first().click();
        break;
    }
}
}
async getOrderId()
{
return await this.orderDetails.textContent();

} 

}
module.exports = {orderconfirm};

