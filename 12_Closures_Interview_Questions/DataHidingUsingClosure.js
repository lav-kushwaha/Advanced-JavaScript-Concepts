//Advantages of Closure

//Example:1
// var counter = 0;
// function incrementCounter(){
//     counter++;
// }

// console.log(counter);


//Note : the major problem in this code is that anyone in this code access this "counter" and changed it.


// //Example 2: Data Hiding Using Closure.

// function counter(){
//     var count = 0;
//     function incrementCounter(){
//         count++;
//     }
// }

// //Here, count is hidden using closure we cannot access directly outside of function. 
// console.log(count);//ReferenceError: "count" is not defined


//Example 3: Data Hiding Using Closure and To achieve variable.
// function counter(){
//     var count = 0; //count is hidden it's like a private variable inside the counter.
//     return function incrementCounter(){
//           count++;
//         console.log(count)
//     }
// }

// var counter1 = counter();
// counter1();//1
// counter1();//2


// //it's created a new independent fresh copy of counter() function.
// var counter2 = counter();
// counter2();//it is new call it again start from 1.


//Example 4: Data Hiding Using Closure and constructor.
function Counter(){
    var count = 0; //count is hidden it's like a private variable inside the Counter function.
    this.incrementCounter = function(){
          count++;
        console.log(count);//1
    }

    this.decrementCounter = function(){
        count--;
      console.log(count);//0
  }
}

var counter1 = new Counter(); //constructor counter
counter1.incrementCounter();
counter1.decrementCounter();


//Q.Disadvantages of Closure :
//Closures can make your program use more memory, be harder to debug, and can cause memory leaks if not managed well. 
//They might also make your code more complicated, slow things down a bit, accidentally keep variables you don't want, create security issues, and be tricky to test.

//Q.Garbage Collector
//The garbage collector in JavaScript is like a cleanup crew that automatically clears out unused data to free up memory, so your program runs smoothly without wasting space.

//Q.Relation between Garbage collector and Closure
//"Closures" keep references to variables from their outer functions, even after those functions have finished running. 
//This can cause those variables to stay in memory as long as the closure exists.

//The "garbage collector" comes in to free up memory when it detects that variables or objects are no longer needed by the program.
//However, if a closure still references those variables, the garbage collector won't free them, potentially leading to higher memory usage.

//Example :
function outer() {
    var x = 10; // 'x' is created and assigned the value 10.

    z = 10; // 'z' is assigned the value 10 without 'var', making it a global variable.
    // However, it's not referenced by 'inner', so it's eligible for cleanup if not used elsewhere.

    // The 'inner' function is defined, and it has access to 'x'.
    return function inner() {
        console.log(x); // 'inner' uses 'x' from the 'outer' function.
    }
}

var y = outer(); // 'outer' is called, and it returns the 'inner' function.
// At this point, 'x' is no longer needed by 'outer', but it stays in memory
// because the 'inner' function still references it.

y(); // When 'y' (which is the 'inner' function) is called, it logs '10',
// showing that 'x' is still in memory and accessible.

//Summary:
//x remains in memory even after outer() finishes because inner() keeps a reference to it.
//The garbage collector doesn't remove x since it might still be used by inner().

//In short :
//Closures can keep variables in memory longer, and the garbage collector won't clear them until the closure is no longer needed, which can lead to higher memory usage.



