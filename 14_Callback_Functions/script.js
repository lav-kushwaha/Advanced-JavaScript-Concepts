//#What is a callback aka (Main Thread) function in javascript.

// The global execution context is created and pushed onto the call stack.
// Initially, the call stack contains only the global context.

// Step 1: setTimeout is called
setTimeout(function() {
    console.log("timer");  // This function is set to execute after 5 seconds
}, 5000);
// The setTimeout function is added to the call stack.
// It schedules the callback function to run after 5 seconds.
// After scheduling, setTimeout is popped off the call stack.
// The call stack returns to the global context.

// Step 2: Function x is defined and called
function x(y) {
    console.log("x");  // Logs "x" immediately
    y();               // Calls the function y (which is a callback function)
}
// The x function is defined but not executed yet, so nothing happens in the call stack.

// Step 3: x function is invoked
x(function() {
    console.log("Callback function");  // Logs "Callback function" when called
});
// The x() function is called and pushed onto the call stack.
// The console.log("x") statement executes and logs "x" to the console.
// The callback function (y) is then pushed onto the call stack.
// The callback function logs "Callback function" and is popped off the call stack.
// After y() completes, x() is also popped off the call stack.
// The call stack returns to the global context.

// After 5 seconds: setTimeout callback execution
// After 5 seconds, the callback function inside setTimeout is pushed to the task queue.
// When the call stack is empty, the event loop pushes the callback function onto the call stack.
// The callback function logs "timer" to the console and is then removed from the call stack.
// The call stack returns to the global context.

// End of Script Execution:
// All code has run, and there are no more tasks to execute.
// The global execution context is now removed from the call stack.

// Final state:
// The call stack is empty, indicating that the script has fully executed.


//====================================================================================================================================================================

//#Javascript is a synchronous and single-threaded language

//Blocking the main thread

//Power of callbacks?

//Deep about Event listeners

//Closures demo with Event Listeners

//Scope Demo with Event Listeners

//Garbage Collection & removeEventListeners

