//Example 1 :

console.log("Hello Javascript");

setTimeout(()=>{
    console.log("Hello");
},5000);

console.log("I am learning js");

//Example 2 :

const cart = ["shoes","pants","kurta"];

//create order -> Proceed to payment -> order summary page -> update Wallet.
// api.createOrder(cart,function (){
//     api.proceedToPayment(function (){
//         api.orderSummary(function(){
//             api.updateWallet();
//         });
//     });
// });

//Importance of javascript

//1.Callbacks are used to handle async operations in javascript.
//2.async programming in js exit because callback exist


//Issues with callbacks
//1.callback hell - 
//=> multiple nested callbacks and the code becomes unmaintainable and unreadable.
//2.Inversion of control - 
//=>we loose control of our program because we passed that callback function inside another functions.
//and we have given the control of the function to some other functions.
//=> and we don't know weather that function will ever execute our callback or not this invert of control is another issue with callback.














