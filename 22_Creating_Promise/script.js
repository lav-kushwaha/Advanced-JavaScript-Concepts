//Example : creating a promise.(Creation part)

//Note : Promise have 2 things either it is resolve or rejected.

//Promises main 2 core part.
//1.consuming part
//2.creation part

// There are two way to form chaining :

//1st way : 

// const cart = ["shoes","shirt","kurta"];
//Invoking createOrder method.(consuming part)
// const promise = createOrder(cart);//orderId
// console.log(promise);

//The .then() method in JavaScript is used with promises,
//and it only executes when the promise is resolved.
// promise.then((orderId)=>{
//         console.log(orderId);
//     // proceedToPayment(orderId);
// })
// .catch((err)=>{
//     console.log(err);
    
// })

//OR - You can write like this :

//2nd way
const cart = ["shoes","shirt","kurta"];

createOrder(cart)
.then((orderId)=>{//we have attach callback function to the createOrder() with the help of .then() method.
    console.log(orderId);
    return orderId;
})
.then((orderId)=>{
   return proceedToPayment(orderId);
})
.then((paymentInfo)=>{
    console.log(paymentInfo);
})
.catch((err)=>{
    console.log(err);
})
.then(()=>{
    console.log("No matter what happens, I will definietly be called");//bcs it is after .catch whatever are error will come that would be above the the .catch().
})

//Note : Whenever you are making chaining like this, you must have to "return" from top of the chain.

function createOrder(cart){

    //promise constructor.(creation part)
    const pr = new Promise((resolve,reject)=>{
        //createOrder
        //validateCart
        //orderId
        if(!validateCart(cart)){
            const err = new Error("Cart is not valid");
            reject(err);
        }

        //Logic for createOrder.
        const orderId = "12345";
        if(orderId){
            setTimeout(()=>{
                resolve(orderId);
            },5000);
        }
    });

    return pr;
}

function validateCart(cart){
    return false; //For the simplicity we just return true.
}

function proceedToPayment(orderId){
     return new Promise((resolve,reject)=>{
        resolve("Payment successfull");
     });
}


//Note : Promise is an object.
//There are 3 state of promise - pending, fulfilled and rejected.


