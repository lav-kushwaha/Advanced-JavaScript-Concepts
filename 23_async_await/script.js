/**
 * What is async ?
 * What is await ?
 * How aync await works behind the scenes?
 * Examples of using async/await
 * Error Handling
 * Interviews
 * Async await vs Promise .then/.catch
 */


//#creating a promsie

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


//#Diving deep into async/await

//asynchronous operations which is not get data quickly it is take some time.
const p = new Promise((resolve,reject)=>{
   setTimeout(()=>{
    resolve("Promise resolved value!!")
   },500);
});

//await is a keyword that can be only used inside a async function.
async function handlePromise(){
    const val = await p;
    console.log(val);
}
handlePromise();


