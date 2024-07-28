/*
#Scope In Javascript :
=>In JavaScript, scope refers to the context in which variables, functions, and objects are accessible or visible to the code.
=>It determines the parts of the program in which a particular variable or function can be used.

#Types of Scope
1.Global Scope
2.Function Scope
3.Block Scope
4.Lexical Scope

*/

// Global Scope
// Variables declared outside any function or block are in the global scope. They are accessible from anywhere in the code.
let globalVar = "I am a global variable";

function someFunction() {
  console.log(globalVar); // Accessible here
}

someFunction();
console.log(globalVar); // Accessible here too

// Function Scope
// Variables declared inside a function are in the function scope. They are accessible only within that function.
function myFunction() {
  let functionScopedVar = "I am a function-scoped variable";
  console.log(functionScopedVar); // Accessible here
}

myFunction();
// console.log(functionScopedVar); // Error: functionScopedVar is not defined

// Block Scope
// Variables declared with `let` or `const` inside a block (e.g., inside `{}`) are block-scoped. They are accessible only within that block.
if (true) {
  let blockScopedVar = "I am a block-scoped variable";
  console.log(blockScopedVar); // Accessible here
}

// console.log(blockScopedVar); // Error: blockScopedVar is not defined

// Lexical Scope
// JavaScript uses lexical scoping (also known as static scoping), which means that the scope of a variable is determined by its location within the source code. Nested functions have access to variables declared in their outer scope.
function outerFunction() {
  let outerVar = "I am an outer variable";

  function innerFunction() {
    console.log(outerVar); // Accessible here due to lexical scoping
  }

  innerFunction();
}

outerFunction();

// Scope Chain
// When trying to access a variable, JavaScript starts looking in the local scope and continues up the scope chain until it finds the variable or reaches the global scope. 
//If the variable is not found, a `ReferenceError` is thrown.
let globalVarChain = "Global";

function outerFunctionChain() {
  let outerVarChain = "Outer";

  function innerFunctionChain() {
    let innerVarChain = "Inner";
    console.log(innerVarChain);   // Accessible
    console.log(outerVarChain);   // Accessible due to lexical scoping
    console.log(globalVarChain);  // Accessible due to scope chain
  }

  innerFunctionChain();
}

outerFunctionChain();


/*
#Summary
1.Global Scope: Variables are accessible from anywhere in the code.
2.Function Scope: Variables are accessible only within the function.
3.Block Scope: Variables are accessible only within the block.
4.Lexical Scope: Inner functions have access to variables in their outer scope due to where they were declared.
*/