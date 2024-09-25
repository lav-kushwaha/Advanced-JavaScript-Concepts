//Promise.all()

//Example 01 :

// const p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve("P1 Success!"),1000);
// });

// const p2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve("P2 Success!"),2000);
// });

// const p3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve("P3 Success!"),3000);
// });

// //Promise.all().
// Promise.all([p1,p2,p3])
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });


//Promise.all(fails)

// const p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve("P1 Success!"),1000);
// });

// const p2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>reject("P2 fails!"),2000);
// });

// const p3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve("P3 Success!"),3000);
// });

// //Promise.all()
// Promise.all([p1,p2,p3])
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.error(err);//p2 fails
// });


// //Promise.allSettled().

// //Example 02 :

// const p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve("P1 Success!"),1000);
// });

// const p2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve("P2 Success!"),2000);
//     setTimeout(()=>reject("P2 fails!"),2000);
// });

// const p3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve("P3 Success!"),3000);
// });

// //Promise.allSettled()
// Promise.allSettled([p1,p2,p3])
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.error(err);
// });


//Promise.race()

//Example 03 :

// const p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve("P1 Success!"),4000);
// });

// const p2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve("P2 Success!"),2000);
// });

// const p3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve("P3 Success!"),1000);
// });

// //Promise.race()
// Promise.race([p1,p2,p3])
// .then((res)=>{
//     console.log(res); //P3 success.
// })
// .catch((err)=>{
//     console.error(err);
// });


//Promise.any() - wait for the first settled promise success.

//Example 04 :

// const p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>reject("P1 fail!"),1000);
// });

// const p2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve("P2 Success!"),3000);
// });

// const p3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve("P3 Success!"),5000);
// });

// //Promise.any()
// Promise.any([p1,p2,p3])
// .then((res)=>{
//     console.log(res); //P2 success.
// })
// .catch((err)=>{
//     console.error(err);
// });


//Promise.any(fails) - all fails

const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>reject("P1 fail!"),4000);
});

const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>reject("P2 fail!"),1000);
});

const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>reject("P3 fail!"),2000);
});

//Promise.any()
Promise.any([p1,p2,p3])
.then((res)=>{
    console.log(res); 
})
.catch((err)=>{
    console.error(err);

    //aggregate errors
    console.log(err.errors); //['P1 fail!', 'P2 fail!', 'P3 fail!']

    console.log(err.errors[0]); //P1 fail!   
});

//Output :AggregateError: All promises were rejected.


