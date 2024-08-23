const cart = ["shoes","pants","kurta"];

//Example 1 :
//callback hell :
createOrder(cart,function(orderId){//it responsibility to createOrder to create order and then call the function proceed to payment.
    proceedToPayment(orderId);
});

//problem with above code is we have given the control of createOrder() to call the callback functions of proceedToPayment() method.
//and we don't know weather it is going to call or not.

//#Solution - to resolve this we can use promise - it don't take a callback function it's just take card details.

//Example 2 :
//Promise :
const promise = createOrder(cart); //whenever this line executed by javascript it will return a promise.
//promise it nothing but we can assumed it empty object "{}"" with some data value on it {data:value}.
//data value {data:undefined} is hold whatever that createOrder return to us.
//create order api is an aync operation. it will take some time to execute but we don't know much time it takes to execute.

//{data:undefined} =>after certain time=> {data:orderdetails}

//IMP :
//whenever js engine will execute, so createOrder() api will return some promise, promise is nothing just an empty object.{data:undefined}.
//and the next lines of program will start executing and after 5sec,6sec how much time ever it takes, after what will happen this promise empty object, filled with data automatically.{data:orderdatils} 
//and now, we have "orderdetails" on it {data:orderdatils} after async times it takes. - This is what promise is.


//once we have data inside promise object {data:orderDetails} the callback function. we have attach to the object, will automatically called.
promise.then(function(orderId){//callback function attach to promise object.
    proceedToPayment(orderId);
});


//Differences in examples :

//Example 1 : callback hell :

const cart1 = ["shoes","pants","kurta"];

createOrder(cart1,function(orderId){//it responsibility to createOrder to create order and then call the function proceed to payment.
    proceedToPayment(orderId);
});

//Example 2 : Promise
const promise1 = createOrder(cart);

//This callback function will only call whenever data will we inside the promise object.
promise1.then(function(orderId){//callback function attach to promise object.
    proceedToPayment(orderId);
});

//Differences in ex-1 and ex-2 :

//=>In ex-1 we are "passing" the callback functions to another functions.
//=>We just "passed" the callback function and createOrder(cart) api would have call it whenever it wants to.

//In ex-2 we are "attached" callback function to promise object.
//=>In ex-2 we will have control of our program with us - createOrder(cart) api will only do its job. 
//it will create an order and it will filled the promise object with data (orderId).
//whenever it wants to and as soon as promise object will filled with data it will automatically call our callback function.


