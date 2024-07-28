// #Example 1: Variable Scope and Hoisting

// function a() {
//         /* output: 10
//            JavaScript engine tries to find out if "b" exists in the local memory space or not. */
//         console.log(b);
//     }
    
//     var b = 10; // 'b' variable in the global scope. 
//     a();
    
    /* When a() is called, the JavaScript engine looks for b in the local scope of the function a().
       Since b is not found in the local scope, it checks the global scope. */
    
    // #Example 2: Accessing lexical scope of b
//     function a() {
//         var b = 10;
//         c();
//         function c() {
//             /* output: 10
//                The inner function c() can access variable b from its parent function a(). */
//             console.log(b);
//         }
//     }
//     a();
    
    // #Example 3: Lexical environment and Scope chain
//     function a() { // a() is lexically inside the global function.
//         var b = 10;
//         c();
//         function c() { // This c() function is lexically inside the a() function

//         console.log(b); /* When the JS engine encounters this line, it tries to find if b exists inside its local memory of c().
//                It won't find b because "b" is not inside the local memory of c().
//                So, it goes to the local memory of c()'s parent, which is a(), finds it there, accesses it, and prints it to the console.
               
//                Suppose "b" is not found inside a() (parent of c()), then it would try to find it in a()'s parent, which is the global lexical environment.
//                If it doesn't find "b" in the global lexical scope, it tries to find it in the global lexical environment scope's parent and finds null (because there is no more lexical environment to search in).
//                Then the program stops, and the JS engine will throw a ReferenceError "b is not defined". 
//                This way of finding is known as the SCOPE CHAIN. */
//         }
//     }
//     a();
//     console.log(b); // ReferenceError: b is not defined 
    
    /* Scope: Scope means where you can access a specific variable. */
    
    // #Lexical Environment 
    /* Lexical Environment: When an execution context is created, a lexical environment is also created. 
       It consists of the local memory plus the lexical environment of its parent.
       Lexical means hierarchy or in a sequence or in an order.
       Lexical environment = local memory + lexical environment of its parent. */
    
    // Scope Chain: 
    /* This is the mechanism that JavaScript uses to "look up" variables. It starts from the local scope and moves up to the parent scopes until it finds the variable or reaches the global scope. 
       If the variable is not found, it results in a ReferenceError. */
    
    // #Note :
    /* Each function has its own scope, and variables defined within a function are not accessible outside of it. 
       However, inner functions have access to variables in their parent function due to the scope chain. 
       This is a fundamental concept behind closures and many other advanced JavaScript features. */

// #Summary:
// #Example 1 explains hoisting and how JavaScript looks for variables in local and global scopes.
// #Example 2 demonstrates lexical scoping, where inner functions access variables from their parent functions.
// #Example 3 shows the scope chain, illustrating how JavaScript searches for variables from local to parent scopes, and the global scope if necessary.
// Scope refers to where a variable can be accessed.
// Lexical Environment is the combination of local memory and the parent environment.
// Scope Chain is the mechanism for looking up variables in nested scopes.
    