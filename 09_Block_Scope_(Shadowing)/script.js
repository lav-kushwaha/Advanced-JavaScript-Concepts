{
    //compound statement
    var a = 10;
    console.log(a);
    
}

//"if condition" with single statements.
if(true) console.log("Hello world"); //This is perfectly valid js code

//"if condition" with multiple statements - we are grouping together using block.{}
if(true){
    console.log("Hello");
    console.log("I am learning js");
}

//Use of Block {} and why we are using :
//We group multiple statments together in a block so that we can use it where javascript expects one statements.
//{} : Block is wrapping up a multiple statements, it is grouping together multiple statements. so, that we can use it in a place where js expects one statements.

//Block Scope : variables and function we can access inside the block is known as block scope.

// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a);//10
//     console.log(b);//20
//     console.log(c);//30
// }

// console.log(a);//10
// console.log(b);//Uncaught referenceError : b is not defined
// console.log(c);//Uncaught referenceError : c is not defined

//let and const are stored in separate memory space(Block) which is hoisted and assigned to undefined.
//We can't access let and const outside of block.
//we can access var outside the block because it is in the global scope.

//Shadowing :

//Example 1 : Shadowing with var, let and const.

var a = 100;
let b = 200;
// const c = 300;

{
    var a = 10;//var a = 100(line no.42) is shadowed or shadowing and replace with 10.
    let b = 20;
    const c = 30;
    console.log(a);//10
    console.log(b);//20
    console.log(c);//30
}

//Note : line no. 48 and line no. 54 are referring to the same memory space which is global scope.
console.log(a);//10 - Here "a" is accessable bcs "var a=10" is allocated in the global scope not inside the block scope.
console.log(b);//200 - printed 200 bcs it is not shadowing also we can't access "let b" value "20" which is inside the block scope. 
console.log(c);//300

//Example 2 : Shadowing in function
    const c = 400;//script memory
    function shadow(){
    const c = 500;//block scope
    console.log(c);//30
}
console.log(c);//400 - we can't access block scope here. which is const c = 500;


//Example 3 : Illigle shadowing(Imp)

//SyntaxError : Identifier 'a' has already been declared.
let a = 20;
{
    var a = 30;
}
//Note : if you are trying shadowed let variable inside the block scope using var you cannot do that.
//It will throw SyntaxError : Identifier 'a' has already been declared.
//but you can shadowed let using a let 
//i.e,
let a = 20;
{
    let a = 30;
}

//we can shadowed like this var using let.
var a = 20;
{
    let a = 30;
}

//Example 3 : Lexical Scope Shadowing
//Lexical Scope : one inside another block or function and accessing the value of nearest variable.

//Example 1 :
const a = 20;
{
    const a = 100;
    {
        const a = 200;
        console.log(a); //200
    }
}

//Example 2 :
const a = 20;
{
    const a = 100;
    {
        // const a = 200;
        console.log(a); //100
    }
}

//Example 3 :
const a = 20;
{
    const a = 100;
    {
        const a = 200;
    }
}
console.log(a); //20

//Scope rule :
//Scope rule or concepts are same for the arrow function and function declaration. 