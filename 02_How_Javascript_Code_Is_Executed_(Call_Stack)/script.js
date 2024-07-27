var n = 2;
function square(num) {
    var ans = num * num;
    return ans;
}
var square2 = square(n);
var square4 = square(4);

/**
Q. How does this code work behind the scenes?
=> When we run this code, a global execution context is created.

# The execution context is created in two phases:
1. Memory Creation Phase
2. Code Execution Phase

Note:
1. Memory Creation Phase

# Allocation
=> In the 1st phase: When we run the code, JavaScript will see the first line of code has a variable `n`. It will allocate memory for the variable `n` in the memory creation phase.
=> Similarly, after that, it will go to the next line and see a function named `square`. JavaScript will allocate memory for the function `square` in the memory creation phase.
=> The same process applies to `square2` and `square4` in the memory creation phase.

# What is stored in `n` and `square` during the memory creation phase?
=> `n` will store the value `undefined` in the first phase. (n: undefined)
=> `square` will store the whole function code. (square: "function square(num) { var ans = num * num; return ans; }")
=> `square2`: undefined
=> `square4`: undefined

2. Code Execution Phase
=> In the code execution phase, JavaScript once again runs through the whole program line by line and executes the code.
=> In the 2nd phase, in line 1 (var n = 2) of the code: `2` will be assigned to `n` (n: 2), previously it was `undefined` in the memory creation phase.
=> After finishing line 1, it will go to the next line. In line 2, there is nothing to execute.
=> Then it will go to line 6, and in line 6 there is a function invocation (var square2 = square(n);), so it will invoke the function.

# Execution context of the `square(n)` function:
=> When the function is invoked, a brand new execution context is created inside the global execution context (code execution phase).
=> The new execution context also has two phases:
1. Memory Creation Phase
2. Code Execution Phase

1. Memory Creation Phase - Always remember, memory is only allocated for variables (in the function, this involves the parameter and other variables) and functions.

# Allocation
=> In the 1st phase: The parameter `num` will be allocated in the memory and in line 3, `ans` (a variable) will be allocated in the memory.
=> `num` and `ans` will be `undefined` in the memory in phase 1. (num: undefined and ans: undefined)

2. Code Execution Phase

=> When `var square2 = square(n);` is invoked, the value of `n`, which is `2` (from line 1), is passed to `num`. Now `num` will change from `undefined` to `2` in the memory (num: 2).
=> After that, the code will move to the next line (line 3). There, `num * num` is calculated (2 * 2 = 4). Now `4` will be stored in the memory and `ans` will change from `undefined` to `4` (ans: 4).
=> After finishing line 3, control goes to line 4. Here we encounter `return ans`, which returns the `ans` value from where the function was invoked (line 6).

# Note: Once the function returns, the `square` function execution context will be deleted from the global execution context (code execution phase), which is the main code execution context.

=> Now the variable `square2` will change from `undefined` to `4`, which was previously `undefined` in the memory creation phase.

=> After that, it will move to line 7. For line 7, a new execution context will be created inside the code execution phase for `var square4 = square(4);`. This is similar to the previously created context for line 6. 

=> After the whole code is executed, the global execution context will be deleted.

# Note: 
=> When the code is executed, an execution context is created.
=> When the whole code is executed, the execution context is deleted.
*/

/**
 Q.What is Call Stack ?
 =>The call stack is a data structure that tracks the sequence of function calls in a program, using a LIFO (Last In, First Out) principle to manage execution contexts.
 =>The callstack is like a stack and everytime in the bottom of the stack we have Global execution context(GEC) that means any js program will run the callstack will populated with Global execution contexts.
 =>whole global execution contexts will be pushed into the stack.
 =>whenever execution contexts will be created that will be pushed into the stack.
 
 =>i.e : when the new function(square2 fn name) will be invoked(i.e: line no.6) and "new execution contexts" will be created that is "pushed" into the "stack" and once the whole function is executed "square fun execution contexts will be removed from the stack" and control go back to Global execution contexts.
 
 #Note : callstack is used to only for managing execution contexts.
 =>So, whenever execution contexts will be created it is pushed into the stack and whenever execution context is deleted it is pop() into the stack.
 =>After the whole code is being executed the call stack will gets empty (Global execution context is also pop() out of stack).

 Note : Call stack maintains the order of execution of execution contexts.

#There are many different name of call stack :
0.call stack
1.Execution context stack 
2.Program stack
3.control stack
4.runtime stack
5.Machine stack
 */