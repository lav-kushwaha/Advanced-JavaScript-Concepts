//Example 1 :
// function x(){
//     var i = 10;
//     setTimeout(function(){//This function forms a closure.
//         console.log(i);
//     },3000);
//     console.log("Hello JavaScript");
// }
// x();


//Example 2 :
// function x(){
//     for(var i=1;i<=5;i++){//var is function-scoped, the same i variable is used throughout the loop. When the loop completes, i retains its final value of 6.
//         setTimeout(function(){//This function forms a closure.
//             console.log(i);//6 6 6 6 6  
//         },3000);
//     }
//     console.log("Hello JavaScript");
// }
// x();

//Example 3 :
function x() {
    for(let i = 1; i <= 5; i++) { // 'let' is block-scoped, creating a new 'i' for each loop iteration.
        setTimeout(function() { // This function forms a closure.
            console.log(i); // Logs the value of 'i' for the current iteration.
        }, i*1000); // Delay of 1000 milliseconds.
    }
    console.log("Hello JavaScript");
}
x();

//Example 4 :
function x() {
    for(let i = 1; i <= 5; i++) {
       function close(x){//using this "close" function kind of we created a new function "x".
        setTimeout(function() { // This function forms a closure.
            console.log(x); // Logs the value of 'i' for the current iteration.
        }, x*1000); // Delay of 1000 milliseconds.
       }
       close(i);// everytime we call this "close" function with "i", it's create a new copy of "i" itself.
    }
    console.log("Hello JavaScript");
}
x();


