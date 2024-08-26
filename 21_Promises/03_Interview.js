//Q : what is promise ?
//=> Promise object is a Placeholder which will be the filled later with the value.
//or
//Promise object is a placeholder for certain period of time util we received the the value.
//or
//A promise object is a container for the future value.

//MDN Defination : Promise is an object that represents eventual completion of async operations.(best)
//That async operation will eventaully completed so its an object that represents it.

//If promise state is resolve we attached callback function with .then method to get data.


//Example Callback Hell :
//create order -> Proceed to payment -> order summary page -> update Wallet.
createOrder(cart,function (){
    proceedToPayment(orderId,function (){
        ShowOrderSummary(paymentInfo,function(){
            updateWalletBalance();
        });
    });
});  


//Example Promise chaining.
const promise = createOrder(cart);

promise.then((orderId)=>{
    proceedToPayment(orderId);
})

//OR

createOrder(cart)
.then(function(orderId){
    proceedToPayment(orderId);
})

.then(function(paymentInfo){
     ShowOrderSummary(paymentInfo);
})

.then(function(){
    updateWalletBalance();
})

//Important - Promise Chaining : 
//Note : Whenever we attaching a lot of ".then" function and alot of "callback" in this promise chain.
//what happens is we use to pipe the data.
//we want that data to flow on the whole chain (i.e, whatever the response of "createOrder()" should passed into the next line of chain which is .then() method
//and whatever the response we get from "proceedToPayment()" should passed into the next line of chain which is .then() method and so on. form chain like this)
//for that we have to take care in mind we should "return" from every .then() method to form a chain.
//Always "return" promise from promise when we are chaining it.(V.IMP)
//so that  we can get our data properly into a chain.

createOrder(cart)
.then(function(orderId){
   return proceedToPayment(orderId);
})

.then(function(paymentInfo){
   return ShowOrderSummary(paymentInfo);
})

.then(function(){
   return updateWalletBalance();
});


//Using Arrow functions :
//For callback function you can also use arrow function.
//In one liner arrow function no need to use return keyword it will automatically return.

createOrder(cart)
.then((orderId)=> api.proceedToPayment(orderId))
.then((paymentInfo)=> api.ShowOrderSummary(paymentInfo))
.then(()=> api.updateWalletBalance());


//Note : 
//Promise chaining get us help us out of callback hell.
//In case of Promise we dont passed callback function in another function like callback hell.
//In promise we attached callback function with promise object.(i.e, promiseObj.then(callback)).
//Promise object is immutable we cannot change.
//There are 3 states in promise object - pending, fulfilled(resolve) and reject.
//whenever there is a promise inside a promise chain we might have "return" that promise into the chain otherwise we might loose our data inside the chain.