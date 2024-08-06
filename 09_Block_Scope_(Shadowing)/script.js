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
{
    var a = 10;
    let b = 20;
    const c = 30;
}

console.log(a);
// console.log(b);
console.log(c);