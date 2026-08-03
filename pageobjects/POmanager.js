const {loginpage} = require('./loginpage');
const {dashboard} = require('./dashboard');
const {cartpage} = require('./cartpage');
class POManager 
{
    constructor(page){
        this.page = page;
        this.loginPage = new loginpage(this.page);
        this.dashboard = new dashboard(this.page);
        this.cartpage = new cartpage(this.page);
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

}
    module.exports = {POManager};