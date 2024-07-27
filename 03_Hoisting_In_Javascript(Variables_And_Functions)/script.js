//Example 1 :
// var x = 7;

// function getName(){
//     console.log("Lav Kushwaha");
// }

// getName();//Lav Kushwaha
// console.log(x);//7
// console.log(getName);//function getName(){console.log("Lav kushwaha");}

//Note : Even before the code is start executing memory is allocated to all variables(x:undefined) and functions(function getName(){console.log("Lav kushwaha")}) inside the (GEC) memory creation phase memory space.


//Example 2 : variable x is hoisted - memory is allocated to variable x and assign undefined in memory space (x:undefined) in  memory creation phase inside (GEC).
// getName();//Lav kushwaha
// console.log(x);//undefined
// console.log(getName);//[Function: getName]

// var x = 7;

// function getName(){
//     console.log("Lav kushwaha");
// }

//Note : Even before the code is start executing memory is allocated to all variables(x:undefined) and functions(function getName(){console.log("Lav kushwaha")}) inside the memory space (Global context execution) in memory creation phase.
//Thats why printed :
//Lav kushwaha
//undefined
//[Function: getName]

//Example 3 :

// getName();//Lav Kushwaha
// console.log(x);//It will throw an reference error "x" is not defined bcz there is no variable present in the name of "x" and it is not in the memory space.(In memory space when code is executing variable and function is allocated)
// console.log(getName);//[Function: getName]

// function getName(){
//     console.log("Lav kushwaha");
// }

//Example 4 : with arrow function.

getName();//Uncaught TypeError : getName is not a function - it because getName is  a variable not a function we can't invoke variable in case of arrow function.(In the memory creation phase in memory space inside global execution context getName variable is assign to undefined)
console.log(x);//Undefined
console.log(getName);//[Function: getName]

var x = 7;

//Arrow Function
//getName and getName2 is behave like a variable and its allocated in the memory and assign to undefined in GEC memory space.

var getName = () => {//In this case : This getName is behave like a variable and its allocated in the memory and assign to undefined.(In GEC inside memory space getName variable is assign to "undefined" in memory).
    console.log("Lav kushwaha");
}

console.log(getName())//Here, getName() method is invoked because when we are executing code (GEC) created and getName variable is allocated in the memory space and assign to "Undefined" in memory creation phase inside (GEC).
// and in code executing phase actual function : - ("() => { console.log("Lav kushwaha");}") is assign and then invoked.

//Function Expression :

var getName2 = function () {
    ///In this case : This getName2 is behave like a another variable and its allocate in the memory and assign to undefined(In GEC inside memory space getName3 variable is assign to "undefined" in memory).
}

//Function Declaration :

function getName3 (){
    //This getName3 is behave like a function it is not a variable.(In GEC inside memory space getName3 whole function is allocated in the memory)
}




















