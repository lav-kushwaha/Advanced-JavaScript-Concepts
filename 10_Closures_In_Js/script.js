//Example 1 :
function x(){
    var a = 10;
    function y(){
        console.log(a);
    }
    y();
}
x();

//Closure : 
//=>Closure is a function bind together with its lexical environment.
//=>Function along with it's lexical scope forms a closure.

//Returning function y.
//Example 2 :
function x(){
    var a = 10;
    function y(){
        console.log(a);
    }
    return y; //if we returning y from here not just a function return a closure is return along with its lexical scope.
}
var z = x();
console.log(z);//[Function: y]
z(); //10

//Example 3 : example 2 and example 3 both are same.
function x(){
    var a = 10;
    return function y(){
        console.log(a);
    }
}
var z = x();
console.log(z);//[Function: y]
z(); //10


//Example 4 : 
function x(){
    var a = 10;
     function y(){
        console.log(a);
    }
    a = 100;
    return y;
}

var z = x();
console.log(z);//[Function: y]
z(); //100

//Example 5 :
function z(){
    var a = 100;
    function x(){
        var b = 10;
         function y(){
            console.log(a,b);
        }
        y();
    }
    x();
}
z();


