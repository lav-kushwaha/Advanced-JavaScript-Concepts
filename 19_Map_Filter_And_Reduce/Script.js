//Map :

//Example 01 

// const arr = [5,1,3,2,6];

//Double - [10,2,6,4,12]

//Triple - [15,3,9,6,18]

//Binary - ["101","1","11","10","110"]

// function Double(x){
//     return x*2;
// }

// function Triple(x){
//     return x*3;
// }

// function Binary(x){
//     return x.toString(2);
// }

// const ouptut = arr.map(Binary);
// console.log(ouptut);

//another way :

// const ouptut1 = arr.map((x)=>x.toString(2));
// console.log(ouptut1);


//Filter :

//Example 1 :

// const numbers = [1, 2, 3, 4];

// const output = numbers.filter((x)=>x%2==0);
// console.log(output);


//Reduce :
//Reduce function is basically used at a place where you have to take all the elements of an array and come out to the single value out of them.

// const arr = [1,2,3,4,5];

//sum of all the element in the array.
// function findsum(arr){
//     let sum = 0;
//     for(let i =0;i<arr.length;i++){
//         sum = sum + arr[i];
//     }
//     return sum;
// }
//console.log(findsum(arr));

//sum of all the element in the array using reduce.
// const output = arr.reduce((acc,curr)=>{
//     acc = acc + curr;
//     return acc;
// },0)


//find the max element in the array.
// function maxValue(arr){
//     let max = 0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>max){
//             max = arr[i];
//         }
//     }
//     return max;
// }
// console.log(maxValue(arr));


//find the max element in the array using reduce.
// const output = arr.reduce((max,curr)=>{
//     if(curr>max){
//         max = curr;
//     }
//     return max;
// },0)

// console.log(output);

//Examples :
const user = [
    {name:"Lav", lastName:"Kushwaha",age:23},
    {name:"Donald",lastName:"trump",age:75},
    {name:"elon",lastName:"musk",age:50},
    {name:"sachin",lastName:"tendulkar",age:23}
]

// const Mapoutput = user.map((x)=>{
//    return x.name + " "+ x.lastName;
// });

// console.log(Mapoutput);


// const filterOutput = user.filter(x=>x.age<30).map((x)=>x.name+ " " +x.lastName);
// console.log(filterOutput);

const output = user.reduce(function(acc, curr){
    if (curr.age < 30){
        acc.push(curr.name);
    }
    return acc;
}, [])

console.log(output);


// const Reduceouptut = user.reduce((acc,curr)=>{
    
//     if(acc[curr.age]){
//         acc[curr.age] = 1 + acc[curr.age];
//     }else{
//         acc[curr.age] = 1;
//     }
    
//     return acc;
     
// },{});

// console.log(Reduceouptut);


//Things learned:
//1. map method is used when we want transformation of whole array.
//2. filter is used when we want to filter the array to obtain required value.
//3. reduce is used when we want to reduce the array to single value eg (max, min, avg, sum, difference etc).
//4. reduce passes two arguments one function(which includes accumulator and initial value as argument itself) and another initial value of accumulator.