const {loginpage} = require('./loginpage');
const {dashboard} = require('./dashboard');
const {cartpage} = require('./cartpage');
const {orderpage}= require('./orderpage')
const {orderconfirm} = require('./orderconfirm')
class POManager 
{
    constructor(page){
        this.page = page;
        this.loginPage = new loginpage(this.page);
        this.dashboard = new dashboard(this.page);
        this.cartpage = new cartpage(this.page);
        this.orderpage = new orderpage(this.page);
        this.orderconfirm= new orderconfirm(this.page)

    }

    getLoginPage()
    {
        return this.loginPage;
    }   

    getDashboard(){

        return this.dashboard;
        }



    getCartPage()
    {
        return this.cartpage;
    }


    getOrderpage()
    {
        return this.orderpage;

    }

    getOrderconfirm()
    {

        return this.orderconfirm;
    }




}
    module.exports = {POManager};