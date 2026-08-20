class APiUtils {
    
constructor(apiContext,loginPayload){
    this.apiContext=apiContext;
    this.loginPayload=loginPayload;
    
}

async getToken(){
    const loginResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",{
        data:this.loginPayload

    });       
    
//     const loginResponseBody = await loginResponse.json();
//     const token = loginResponseBody.token;
//    // console.log(token);
//     return token;
 const loginResponseBody = await loginResponse.json();
    console.log('LOGIN RESPONSE:', loginResponseBody);   // ← add this
    const token = loginResponseBody.token;
    console.log('TOKEN:', token);                          // ← add this
    return token;

}

async createOrder(orderPayLoad){

        let response = {};
        response.token = await this.getToken();
        //console.log(response.token);

    const orderResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",{

        data: orderPayLoad,
        headers:{
            'Authorization':response.token,
            'Content-Type':'application/json'
        }
    });

    const orderResponseBody = await orderResponse.json();
    console.log(orderResponseBody);
    const orderId = orderResponseBody.orders[0];
    response.orderId = orderId;

   return response;

    console.log(response);
    

}
}
module.exports = { APiUtils };