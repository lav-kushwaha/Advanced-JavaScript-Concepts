// JavaScript Engine Architecture

// JavaScript engine processes code through three major steps:
// 1. Parsing
// 2. Compilation
// 3. Execution

// 1. Parsing Phase
// During the parsing phase, the JavaScript engine breaks down the code into tokens.
// For example, in the code `let a = 10`:
// - `let` is one token
// - `a`, `=`, and `10` are additional tokens

// Syntax Parsing
// Tokens are then used by the Syntax Parser to create an Abstract Syntax Tree (AST).
// The AST represents the code structure and is used in the compilation phase.

// 2. Compilation Phase
// Interpreter vs. Compiler

// Interpreter
// An interpreter executes code line by line in the order it appears.

// Compiler
// A compiler first compiles the entire code into an optimized version before execution.
// This compiled code runs faster and more efficiently than the original code.

// Note
// An interpreter starts execution immediately, while a compiler performs optimizations
// before executing the code, resulting in higher efficiency.

// Just-In-Time (JIT) Compilation
// JIT compilation converts frequently used JavaScript code into machine code at runtime.
// This optimization is based on actual usage, enhancing overall speed despite a slight
// initial delay.

// Ahead-Of-Time (AOT) Compilation
// AOT compilation compiles the source code into machine code before the program runs,
// usually during the build process. This machine code is directly executed by the computer's hardware.

// In the JavaScript engine, AOT compilation can optimize some parts of the code in advance,
// producing bytecode that is then used in the execution phase.

// 3. Execution Phase
// Components:

// Memory Heap
// The memory heap stores all variables and functions. It is constantly synchronized with
// the call stack and the garbage collector.

// Call Stack
// The call stack keeps track of function calls and execution contexts in a Last-In, First-Out (LIFO) manner.

// Garbage Collector
// The garbage collector uses the Mark and Sweep algorithm to manage memory:
// - Mark Phase: Identifies all objects that are reachable from root references (e.g., global variables, active stack).
// - Sweep Phase: Frees up memory occupied by objects that are not reachable.

// Summary
// When JavaScript code is executed:
// 1. Parsing Phase: The code is broken into tokens and converted into an Abstract Syntax Tree (AST).
// 2. Compilation Phase: The AST is compiled into bytecode by the interpreter and optimized by the JIT compiler.
// 3. Execution Phase: The bytecode is executed with the help of the memory heap, call stack, and garbage collector.

// Note
// The JavaScript runtime environment, found in browsers and Node.js, includes the JavaScript engine
// and provides infrastructure such as APIs, callback queues, and event loops to manage and execute JavaScript code effectively.

