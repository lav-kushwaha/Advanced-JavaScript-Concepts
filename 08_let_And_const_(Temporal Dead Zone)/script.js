 // ReferenceError: Cannot access 'a' before initialization 
//  console.log(a); //when this line is executed variable "a" will be allocated in the memory into the separate space (script) and it was also assigned undefined but it has not be initialised this phase is known as TDZ.
//                  //Until it goes to the in line no. 4 and runs that line and the value "10" will be replace to "undefined" and "assigned" to "a" then the TDZ end.
let a = 10; //Before This line was the "TDZ" for variable "a" and if we try to access variable "a" its throw referenceError.

// console.log(b); //undefined
var b = 100;//This "b" is the property of window object.

console.log(window.b); //100

// console.log(window.a); //In case of "let a = 10" variable "a" is not a property of window object it is attached to separated space.

/**

#Temporal Dead Zone (TDZ) : 
=>Temporal dead zone is the time. since, when this let variable was hoisted and till it is initialised some value. 

Q.What is the difference between hoisting and temporal dead zone?
=>Temporal Dead Zone (TDZ) refers to the phase between the hoisting of a variable declaration and its actual initialization. 
=>During this time, any attempt to access the variable, results in a 'ReferenceError'.
=>This concept is specific to variables declared with 'let' and 'const'.

Note : Best Way To Avoid TDZ is write all the declaration and initialization on the top.

======================================================================++++++++++++++++++++++++++++++++=====================================================================

**TYPES OF ERROR IN JS**

#Reference Error :

=>A ReferenceError in JavaScript occurs when you try to access a variable that hasn't been declared within the accessible scope. 
=>This error is thrown when the JavaScript engine cannot find a variable in the current scope chain.
=>Accessing a variable in the TDZ will throw a ReferenceError.
=>i.e.1, console.log(x) //Uncaught ReferenceError: x is not defined - bcs x is not present in our program there is not reference for "x"
=>i.e.2, /
        console.log(a);/ ReferenceError: Cannot access 'a' before initialization 
        let a = 10;
     /

#Common Causes of ReferenceError:

1.Using an Undeclared Variable:
console.log(x); // ReferenceError: x is not defined

2.Accessing Variables in the Temporal Dead Zone (TDZ):
console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 10;

3.Misspelled Variable Names:
let name = "Alice";
console.log(nam); // ReferenceError: nam is not defined

4.Accessing Variables Out of Scope:
function test() {
  let y = 20;
}
console.log(y); // ReferenceError: y is not defined

Note : 
ReferenceErrors occur when trying to access undeclared variables or variables outside their scope.
Common causes include typos, accessing variables before declaration, and scope-related issues.


#Syntax Error : 

=>A syntax error in JavaScript is an error that occurs when the code violates the language's grammatical rules, preventing it from being parsed and executed.
=>Syntax errors are caught at compile-time (when the script is loaded and parsed by the JavaScript engine).
=>i.e, let a = 10;
       let a = 100; //Uncaught SyntaxError : Identifier 'a' has already been declared.
=>i.e2, let let = "value"; // 'let' is a reserved word

=>i.e3, /
            const a;
            a = 10; //uncaught syntax error : Missing initializer in const declaration 

            #correct way :
            const a = 10;//we have to declare,initialized and assigned value with const in the same line.
        /

#Common Causes of Syntax Errors:

1.Missing or Misplaced Punctuation:
console.log("Hello World) // Missing closing quote and parenthesis

2.Incorrect Use of Keywords:
let 123 = "number"; // Variable names cannot start with numbers

3.Unmatched Braces or Parentheses:
if (true { // Missing closing parenthesis
  console.log("Hello");
}

4.Improperly Formatted Statements:
let a = 10 // Missing semicolon (though semicolons are often optional, they can lead to issues)
let b = 20

5.Unexpected Tokens:
let a = 10; 
let b = ; // Unexpected token ";"

6.Using Reserved Words:
let let = "value"; // 'let' is a reserved word


#TypeError : 

=>TypeErrors are thrown when an operation cannot be performed on a value due to its type.
=>Common causes include calling non-functions, accessing properties of undefined or null, and using methods incorrectly.

#Common Causes of TypeError:

1.Calling a Non-Function:
var x = 5;
x(); // TypeError: x is not a function

2.Accessing Properties on Undefined or Null:
var obj = null;
console.log(obj.name); // TypeError: Cannot read property 'name' of null

3.Incorrect Use of Methods:
var num = 123;
num.toUpperCase(); // TypeError: num.toUpperCase is not a function

4.Invalid Operand Types:
var str = "hello";
str - 5; // TypeError: Invalid operation on string and number


Q.Difference between reference error, syntax error and type error ?
=>ReferenceError: Occurs when accessing a variable that doesn't exist or is out of scope.
=>SyntaxError: Occurs due to incorrect syntax or code that can't be parsed.
=>TypeError: Occurs when an operation is performed on a value of an inappropriate type.

 */