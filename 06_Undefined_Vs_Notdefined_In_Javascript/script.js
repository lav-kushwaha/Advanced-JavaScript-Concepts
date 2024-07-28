// #Undefined
// Meaning: A variable has been declared but not assigned a value.

//#Don't do this : its not good practice -
// a = undefined;
// console.log(a);

//Example 1: Declared but not assigned:
let a;
console.log(a); // undefined
//Behavior: No error; returns undefined.


//Example 2: Missing property:
let obj = {};
console.log(obj.someProperty); // Output: undefined

//Example 3: Function with no return statement:
function doSomething() {}
let result = doSomething();
console.log(result); // Output: undefined

//Example 4: Function parameters that are not provided:
function greet(name) {
    console.log(name); // Output: undefined if no argument is passed
  }
greet();
  

//#Not Defined
// Meaning: A variable has not been declared in any accessible scope.

//Example:Accessing a non-existent variable:
console.log(b); // ReferenceError: b is not defined

//Behavior: Throws ReferenceError.

/*
#Key Differences
#Scope:
Undefined: Refers to a variable that has been declared but not yet assigned a value.
Not Defined: Refers to a variable that has never been declared in the accessible scope.

#Errors:
Undefined: No error is thrown when accessing an undefined variable, but the value undefined is returned.
Not Defined: A ReferenceError is thrown when attempting to access a variable that is not defined.
*/


//Examples of loosely typed nature of the language:

// Initial assignment: number
let variable = 42;
console.log(variable); // Output: 42
console.log(typeof variable); // Output: "number"

// Reassigning to a string
variable = "hello";
console.log(variable); // Output: "hello"
console.log(typeof variable); // Output: "string"

// Reassigning to a boolean
variable = true;
console.log(variable); // Output: true
console.log(typeof variable); // Output: "boolean"

// Reassigning to an object
variable = { key: "value" };
console.log(variable); // Output: { key: "value" }
console.log(typeof variable); // Output: "object"

// Reassigning to an array
variable = [1, 2, 3];
console.log(variable); // Output: [1, 2, 3]
console.log(typeof variable); // Output: "object"

// Reassigning to a function
variable = function() { return "I'm a function"; };
console.log(variable); // Output: function() { return "I'm a function"; }
console.log(typeof variable); // Output: "function"
