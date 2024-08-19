//Example 1 :

// console.log("Start");

// setTimeout(function cb(){
//     console.log("Callback");//print after 10sec
// },5000);

// console.log("End");

// //million
//Blocking thread in a simple way we can do something like:

// let startDate = new Date().getTime();
// let endDate = startDate; //Initialize endDate with the same value as startDate

// while(endDate < startDate + 10000){ // Loop until 10 seconds have passed
//     endDate = new Date().getTime(); //Continuously update endDate with the current time
// }

// console.log("While expires");

//Example 2 :

// console.log("Start");

// setTimeout(function cb(){
//     console.log("Callback");
// },0);

// console.log("End");

//output :
// Start
// End
// Callback

//Example 3 :
console.log("Start");

function cb(){
    console.log("Callback");
}

// cb()

setTimeout(cb,0);

console.log("End");


//Things learned:
//1. The setTimeout function stores it in the callback queue which is executed only after call stack is empty, even if setTimeout is set to 0ms. 
//2. setTimeout ensures that minimum it will take the time mentioned because it may be paused due to call stack not empty.



