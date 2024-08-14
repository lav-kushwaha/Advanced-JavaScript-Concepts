//Example 1: setTimeout

console.log("start");

setTimeout(function cb(){
    console.log("setTimeout");
    
},5000)//500milisecond.


//Example 2 : DOM APIs

console.log("start");

document.getElementById("btn")
.addEventListener('click',function cb(){
    console.log("callback");
})

console.log("end");

//Example 3 : fetch()

console.log("start");

setTimeout(function cbT(){
    console.log("CB setTimeout");
},5000);

fetch("https://api.netflix.com")
.then(function cbF(){
    console.log("CB Netflix");
});

console.log("End");









