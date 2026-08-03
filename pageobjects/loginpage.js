class loginpage{

constructor(page){
    this.page=page;
    this.username=page.locator('#userEmail');
    this.password=page.locator('#userPassword');
    this.loginbtn=page.locator('#login');   

}

async goto(){


    await this.page.goto('https://rahulshettyacademy.com/client/#/auth/login'); 
    
}
async login(username,password){
   
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginbtn.click();
    await this.page.waitForLoadState('networkidle');


}
}

module.exports = {loginpage};