var x = 1;
a(); 
b();
console.log(x);

function a() {
    var x = 10;
    console.log(x);
}

function b() {
    var x = 100;
    console.log(x);
}

/**
1. Memory Creation Phase:
=> When we execute this program, the global execution context will be created, and all variables and functions will be allocated to memory space in the memory creation phase.
=> The variables allocated in the memory space will be assigned 'undefined', and the entire function will be allocated to memory space in the memory creation phase.

2. Code Execution Phase:
=> In the code execution phase, the code will start executing from top to bottom, line by line.
=> In the code execution phase, the variables (i.e., x) will have their original values replace 'undefined' in the memory space.

# Call Stack
=> When the global execution context is created, it is pushed onto the stack.
=> Similarly, when a function (i.e., a()) is executed, its execution context is created and pushed onto the call stack.

# console.log()
=> When function a() is invoked, its execution context is created, and the variable x is assigned 'undefined' in the memory creation phase.
=> In the code execution phase, x is assigned its original value, replacing 'undefined' inside the memory space in the execution context.
=> In line 8, when console.log(x) is execute, the JavaScript engine will look for the value of x in the local memory space (local memory space is limited to that particular execution context).
=> console.log(x) will find 10 in its local memory and print it to the console.

Note: After function a() is executed, the whole function's execution context will be removed from the scope and from the call stack.

=> Similarly, this happens for function b().
*/
