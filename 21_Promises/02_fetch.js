//Example :

// const GITHUB_API = "https://api.github.com/users/lav-kushwaha";

// const user = fetch(GITHUB_API);//when this line will execute, it will return promise to user object.

//Inside Promise Object :
//we have prototype : Promise
//we have promise state : "pending"
//we have promise result : undefined

//There are two thing in promise :

//1.Promise state -  promise state will tells us what state promise is.
//there are 3 Promise State - pending, fulfilled and rejected 
//pending means we have not got our data. promise object is waiting for get data and fulfilled(Resolved) means we got our data and it is ready to response and use and rejected means it promise state reject we can't get data the promise operations failed.
//=> i.e, initially promise will be in the "pending" state.
//and once we have got the data back (i.e, after 5sec or 4sec async operation to get completed) after that promise state changes "pending" to "fullfilled" state.

//2.Promise result - result will store the data which is fetch method was return.


const GITHUB_API = "https://api.github.com/users/lav-kushwaha";

const user = fetch(GITHUB_API);//it is a async operations it takes some time to be execute.

console.log(user);
//when this console log statement will be executed at this point of time the user promise object is in a pending state.
//How? because js engine execute it does not wait for anything and in line no.23 js engine quickly execute and fetch returns promise which is takes some time to get the data and fill the data to get fulfilled.
//but js engine does not wait for anything it will move to the line no.25 and it execute console statement and that time "user" object is in the pending state. 
//but the google chrome show fulfilled state because after some time data will comes into the promise object. thats why it show the "current" state of promise which is fulfilled state.
//but when it was log it show the pending state but when we expand it will show in fulfilled state in google chrome browser and promise result is undefined to "respone".

//callback attached with this promise object("user").
//From Inside promise the PromiseResult data - will come inside the callback function data.

user.then(function(data){
    console.log(data.json());
})

//Note : Promise objects are immutable and resolved just once - we can't change the promise data which was return from fetch api.