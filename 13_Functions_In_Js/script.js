//Function statement
//Function Expression
//Function Declaration
//Anonymous Function
//Named Function Expression
//Difference between parameters and arguments?
//First class function
//Arrow function


//#Function statement aka Function Declaration.

// This works because of hoisting
// a();//a called

// function a(){
//     console.log("a called");
// }
//a();

//#Function Expression.

//This will throw an error because the function expression is not hoisted.
//b();//TypeError : "b" is not a function - because b is treated a variable and it's assigned to undefined in memory.
// var b = function(){
//     console.log("b called");
// }

//This works fine because 'b' is defined before calling it.
//b();

//#Difference btw "Function statement" and "Function Expression"
//Function Statement: Hoisted, callable before its definition, and must have a name.
//Function Expression: Not hoisted, callable only after definition, and can be anonymous or named.

//#Anonymous Function 
//A function without name is known as Anonymous function.

// function (){ //Uncaught SyntaxError : Function statements require a function name.
//     console.log("anonymous function is called");
// }


//#Named Function Expression.
// var named = function xyz(){
//     console.log("Named function called");
// }

// named(); //Named function called.
//xyz(); //ReferenceError: xyz is not defined.

//#Difference between parameters and arguments?
// function fun(parameters){
//     console.log("Parameters :",parameters);
// }
// var val = 10;
// fun(val); //arguments

//The value which is you have passed inside the function are known as arguments.
//A function which gets the value are known as parameters.


//#First Class Function or First Class Citizens- Ability to be used like values.
//In programming, when we say something is first-class, it means that it can be used like any other value or data type. 
//For example, numbers and strings are first-class in most languages because you can:
//=>Assign them to variables.
//=>Pass them as arguments to functions.
//=>Return them from functions.
//=>Store them in data structures like arrays or objects.

//First-Class Functions in JavaScript
//=>When we say that functions are first-class in JavaScript, 
//we mean that functions can do all the things that other data types (like numbers or strings) can do.

// 1. Assigning a Function to a Variable
const greet = function() {
    console.log("Hello, world!");
};

// Call the function assigned to the variable
greet();  // Outputs: Hello, world!

// 2. Passing a Function as an Argument
function executeFunction(fn) {
    fn();  // Call the function that was passed in.
}

// Pass the greet function to executeFunction
executeFunction(greet);  // Outputs: Hello, world!

// 3. Returning a Function from Another Function
function createGreeter() {
    return function() {
        console.log("Hi there!");
    };
}

// Get the new function from createGreeter and call it
const newGreet = createGreeter();
newGreet();  // Outputs: Hi there!

// 4. Storing Functions in Data Structures
const functionsArray = [
    function() { console.log("Function 1"); },
    function() { console.log("Function 2"); }
];

// Call each function in the array
functionsArray[0]();  // Outputs: Function 1
functionsArray[1]();  // Outputs: Function 2



