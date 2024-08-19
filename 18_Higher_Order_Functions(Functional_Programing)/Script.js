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

const radius = [3,1,2,4];

function area (radius){
    return Math.PI * radius * radius;
}

function circumference (radius){
    return 2*Math.PI * radius;
}

function diameter (radius){
    return 2*radius;
}


const calculate = function(radius,logic){
    const output = [];
    for(let i=0;i<radius.length;i++){
        output.push(logic(radius[i]));
    }
    return output;
}

console.log(calculate(radius,area));
console.log(calculate(radius,circumference));
console.log(calculate(radius,diameter));





