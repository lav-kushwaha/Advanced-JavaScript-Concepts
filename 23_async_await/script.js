/**
 * What is async ?
 * What is await ?
 * How aync await works behind the scenes?
 * Examples of using async/await
 * Error Handling
 * Interviews
 * Async await vs Promise .then/.catch
 */

//#creating a promsie :

//Example 1 :
// const promise = new Promise((resolve,reject)=>{
//      resolve("Promise resolved value!!")
// });

// //async function is always return a promise.
// async function getData(){
//     return promise;
// }

// const dataPromise = getData();
// dataPromise.then((data)=>console.log(data));

// //Example 2 :

// //async function is always return a promise.(v.imp)
// async function getData1(){
//     return "lav";//returning a value that is wrapped iniside the promise.
// }

// const dataPromise1 = getData1();
// // console.log(dataPromise1);
// dataPromise1.then((data)=>console.log(data));


//#Using await with async :
//Note : async and await combo is used to handle a promises.

// const p = new Promise((resolve,reject)=>{
//     resolve("Promise resolved value!!")
// });

// //await is a keyword that can be only used inside a async function.
// async function handlePromise(){
//     const val = await p;
//     console.log(val);
// }
// handlePromise();


// function getData(){
//     p.then((data)=>console.log(data));
// }

// getData();

//=======================================================================================================================================================================================================================================================

//#Diving deep into async/await

//Example 1(Imp-example) : Difference between promise vs async await.(v.imp)

//asynchronous operations which is not get data quickly it is take some time.
// const p = new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//     resolve("Promise resolved value!!")
//    },5000);
// });


//await is a keyword that can be only used inside a async function.
// async function handlePromise(){
//     //Js engine will wait(i.e,10sec,20sec,30sec etc) for promise to be resolved then it will move to the next line.
//     //otherwise, it will not move, it will wait in line no.76.
//     const val = await p;
//     console.log(val);
//     console.log("Hello world - await");

//     const val1 = await p;
//     console.log(val1);
//     console.log("Hello world - await02");
// }

// handlePromise();

//output : 
// Promise resolved value!!
// Hello world - await

//promise resolving using .then() method.
// function getData(){    
//     //Js engine will not wait for promise to be resolved - it will move on to the next line.
//     p.then((data)=>console.log(data));
//     console.log("Hello world - .then")
// }
// getData();

//output : 
//Hello world - .then
//Promise resolved value!!

//=======================================================================================================================================================================================================================================================

//Example 2 :

//asynchronous operations which is not get data quickly it is take some time.
const pr10sec = new Promise((resolve,reject)=>{
    setTimeout(()=>{
     resolve("Promise resolved value!!")
    },10000);
 });

 const pr5sec = new Promise((resolve,reject)=>{
    setTimeout(()=>{
     resolve("Promise resolved value!!")
    },5000);
 });
 
 
 //await is a keyword that can be only used inside a async function.
 async function handlePromise(){
     //Js engine will wait(i.e,10sec,20sec,30sec etc),for promise to be resolved then it will move to the next line.
     //otherwise, it will not move, it will wait in line no.76.

     //In line no. 127 await wait for 10sec for promise to be resolved,
     // then it will move to the next line.
     const val = await pr10sec;
     console.log(val);
     console.log("Hello world - await");
 
     //await wait 5sec for promise to be resolved - but it is also takes 10sec to be resolved,
     //bcz in line no 127, await is waiting for 10sec for promise to be resolved.
     const val1 = await pr5sec;
     console.log(val1);
     console.log("Hello world - await02");
 }
 
 //Invoking a method.
 handlePromise();//dry run this code and see how it's working.


 





