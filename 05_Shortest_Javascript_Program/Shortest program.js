// This empty file is JavaScript's shortest program.

/*
# Window: The global object created along with the global execution context.
=> Whenever any JavaScript program runs, a global object and a global execution context are created. 
=>Along with the execution context, a "this" reference is also created.

Note: Wherever JavaScript is running, there must be a JavaScript engine. 
For example:
- Chrome browser uses the V8 engine.
- Mozilla Firefox uses SpiderMonkey.
- Safari uses JavaScriptCore.
- Internet Explorer uses Chakra.

=> All JavaScript engines have the responsibility to create a global object.
=> In the case of a browser, this global object is known as `window`.

=> There is always a global object created.
=> Even if this script.js file is empty, the JavaScript engine will still create a global object.

=> At the global level or base level in the execution context, `this === window` is `true`.
=>If you log `this` to the console, you'll see it is equal to the window object.

# Global Space or Scope
=> The global space or scope is any code you write in JavaScript that is not inside a function.
=> Anything that is not inside a function is in the global scope.

For example:

var a = 10;  // This variable is in the global scope

// Function a() is in the global scope.
function a() {
    var a = 20; // This variable is in the function scope
}

Note: Whenever you create any variables and functions in the global scope, they will be attached to the window object (`window`). (IMPORTANT)
*/
