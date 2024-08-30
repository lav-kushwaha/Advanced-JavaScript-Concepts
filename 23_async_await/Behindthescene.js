const p1 = new Promise( (resolve, reject) =>{ 
    setTimeout(() =>{
        resolve("Promise Resolved Value!!")
    }, 10000);
  });
  
  const p2 = new Promise( (resolve, reject) =>{ 
    setTimeout(() =>{
        resolve("Promise Resolved Value!!")
    }, 5000);
  });
  
  async function handlePromise(){
      console.log("Hello World !!")
      const val = await p1;
      console.log("Namaste Javascript")
      console.log(val)
  
      const val2 = await p2;
      console.log("Namaste Javascript 2")
      console.log(val2)
  }
  
  handlePromise();
  
//   In the above condition, when p1 will resolve after 10 seconds, and p2 will resolve after 5 seconds
//   then we see that after 10 seconds it will resolve both value. 
//   As p2's setTimeout value is lesser(5 Seconds) than p1.(10 Seconds)
  
//   As you said when JavaScript fetch or reach the line of handlePromise function the following this will be happen.
  
//   1. In call stack first handlePromise is loaded and it console log the "Hello World !!"
//   2. Then it go to the next line, finds that there has been await p1.
//   3. When it saw await p1, handlePromise Function remove from call stack.
//   4. After the 10 seconds over, then Function go to call stack and start execution from where it is left.
//   5. Now the "Namaste Javascript" is print and also the val value i.e. "Promise Resolved Value!!"  


// ### Execution Flow Breakdown

// 1. **Initial Function Call**
//    - When `handlePromise()` is called, it is added to the call stack and starts executing.

// 2. **First `console.log`**
//    - It immediately logs "Hello World !!" to the console.

// 3. **First `await`**
//    - The line `const val = await p1;` is encountered.
//    - The `await` keyword pauses the execution of the `handlePromise` function until `p1` is resolved. 
//    - `p1` is a promise that will resolve after 10 seconds.

// 4. **Handling Other Code**
//    - While waiting for `p1` to resolve, JavaScript continues to execute other code and handle other asynchronous events.
//    - `p2` is also a promise that will resolve after 5 seconds.

// 5. **`p2` Resolution**
//    - After 5 seconds, `p2` resolves with the value "Promise Resolved Value!!". 
//    - At this point, JavaScript does not immediately process the next `await` in `handlePromise`. The `await` is still paused waiting for `p1` to resolve.

// 6. **`p1` Resolution**
//    - After 10 seconds, `p1` resolves with the value "Promise Resolved Value!!".
//    - Since `p1` has now resolved, the `await` line in `handlePromise` completes, and the function resumes execution.

// 7. **Resuming Execution**
//    - The next `console.log("Namaste Javascript")` is executed, and the resolved value of `p1` is logged.
//    - Next, the `await p2` line is encountered. At this point, `p2` has already resolved (after 5 seconds), so it immediately continues to the next line.

// 8. **Completing Function**
//    - The remaining lines `console.log("Namaste Javascript 2")` and `console.log(val2)` are executed, showing the resolved value of `p2`.

// ### Summary

// Here's a breakdown of the expected output and timing:

// - **0s:** "Hello World !!"
// - **5s:** `p2` resolves, but since `p1` has not yet resolved, `p2`'s result is not used yet.
// - **10s:** `p1` resolves, and the function resumes execution.
//   - "Namaste Javascript"
//   - "Promise Resolved Value!!" (from `p1`)
// - **10s:** Now, `p2` is awaited (although it has already resolved at 5s).
//   - "Namaste Javascript 2"
//   - "Promise Resolved Value!!" (from `p2`)

// ### Important Points

// - The `await` keyword pauses the function’s execution until the promise resolves, but it does not block the execution of other code outside the async function.
// - While `await` is waiting for a promise, JavaScript’s event loop can handle other tasks or promise resolutions.

// By understanding this flow, you can predict the order of operations in asynchronous code and how JavaScript handles concurrent tasks.