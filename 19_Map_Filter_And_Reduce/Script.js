//Map

//Example 01 

const arr = [5,1,3,2,6];

//Double - [10,2,6,4,12]

//Triple - [15,3,9,6,18]

//Binary - ["101","1","11","10","110"]

function Double(x){
    return x*2;
}

function Triple(x){
    return x*3;
}

function Binary(x){
    return x.toString(2);
}

// const ouptut = arr.map(Binary);
// console.log(ouptut);

//another way :

// const ouptut1 = arr.map((x)=>x.toString(2));
// console.log(ouptut1);


//Filter :

//Example 1 :

const numbers = [1, 2, 3, 4];

const output = numbers.filter((x)=>x%2==0);
console.log(output);


//Reduce



