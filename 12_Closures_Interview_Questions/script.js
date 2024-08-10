//Example 1:
// function outer(){
//     var a = 10;
//     function inner(){
//         console.log(a);
//     }
//     return inner;
// }

//Invocation
// var close = outer();
// close();//10
//or - both are same
// outer()(); //Here, we invoked outer function and that outer function return inner function then by using second "()" we invoked inner function.

//Example 2 : closure with let and parameter.
// function outer(b){
//     function inner(){
//         console.log(a,b);
//     }
//     let a = 10;
//     return inner;
// }
// var close = outer("Hello world");
// close();

// //Example 3 : closure with nested function.

// function outest(){
//     var c = 20;
//   function outer(b){
//     function inner(){ //inner function forms a closure with its outer variable
//         console.log(a,b,c);
//     }
//     let a = 10;
//     return inner;
//    } 
//     return outer;
// }

// //invocation :
// // var close = outest()("Hello world")(); //10 Hello world 20

// //or 

// var close = outest()("Hello world");
// close(); //10 Hello world 20

//Example 3 : closure with nested function.

function outest(){
    var c = 20;
  function outer(b){
    function inner(){ //inner function forms a closure with its outer variable
        console.log(a,b,c);//"a" is not in a scope chain.(ReferenceError: a is not defined)
    }
    // let a = 10;
    return inner;
   } 
    return outer;
}
// let a = 100;//if i'll comment this line then it will throw "a" is not defined.

//invocation :
// var close = outest()("Hello world")(); //100 Hello world 20

//or 
var close = outest()("Hello world");
close(); //100 Hello world 20


