//Example 1 : HOC
function x(){
    console.log("Namaste");
}

function y(x){
    x();
}

//Example 2 :
// const radius = [3,1,2,4];
// const calculateArea = function(radius){
//     const output = [];
//     for(let i=0;i<radius.length;i++){
//         output.push(Math.PI*radius[i]*radius[i]);
//     }
//     return output;
// }

// console.log(calculateArea(radius));

// //Example 3:
// const calculateCicumference =  function(radius){
//     const output = [];
//     for(let i=0;i<radius.length;i++){
//         output.push(2*Math.PI*radius[i]);
//     }
//     return output;
// }

// console.log(calculateCicumference(radius));

// //Example 4 :
// const calculateDiameter =  function(radius){
//     const output = [];
//     for(let i=0;i<radius.length;i++){
//         output.push(2*radius[i]);
//     }
//     return output;
// }

// console.log(calculateDiameter(radius));


//Do Not Repeat Yourself (DRY)

// const radius = [3,1,2,4];

// function area (radius){
//     return Math.PI * radius * radius;
// }

// function circumference (radius){
//     return 2*Math.PI * radius;
// }

// function diameter (radius){
//     return 2*radius;
// }


// const calculate = function(radius,logic){
//     const output = [];
//     for(let i=0;i<radius.length;i++){
//         output.push(logic(radius[i]));
//     }
//     return output;
// }

// console.log(calculate(radius,area));
// console.log(calculate(radius,circumference));
// console.log(calculate(radius,diameter));


//#Pollyfill for map function in javascript.

const radius = [3,1,2,4];

function area(radius){
    return Math.PI * radius * radius;
}

Array.prototype.calculate = function(logic){
    const output = [];
    for(let i=0;i<radius.length;i++){
        output.push(logic(this[i]));
    }
    return output;
}

console.log(radius.calculate(area));
console.log(radius.map(area));



//Things learned:
//1. Follow DRY(Don't Repeat Yourself) principle while coding.
//2. Use function to stop writing repeating line of codes.
//3. Function that takes another function as argument(callback function) is known as Higher order functions.
//4. It is this ability that function can be stored, passed and returned,  they are called first class citizens.
//5. If we use Array.protype.function-name. This function is accessible to any array in your code.




