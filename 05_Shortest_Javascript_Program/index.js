var a = 10; // This variable is in the global scope

function b() {
    var a = 100; // This variable is in the function scope
}

console.log(window.a); // Output: 10
// Explanation: In a browser environment, `window` is the global object.
// `a` is a property of the global object, so it can be accessed as `window.a`.

console.log(a); // Output: 10
// Explanation: Since `a` is in the global scope, it can be accessed directly by its name without prefixing it with `window`.

console.log(this.a); // Output: 10
// Explanation: In the global execution context, `this` refers to the global object (`window` in a browser).
// Therefore, `this.a` is equivalent to `window.a` and will output 10.

console.log(this === window); // Output: true
// Explanation: In the global execution context in a browser, `this` refers to `window`,
// so this comparison evaluates to true.

/*
Summary:
- `window.a`, `this.a`, and `a` all refer to the same global variable `a` with a value of 10 in the global scope.
- Variables declared inside functions (like `var a = 100;` inside function `b`) are local to the function scope and do not affect the global variable `a`.
*/
