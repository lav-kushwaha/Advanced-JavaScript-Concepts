//Real world examples of async await(api.github.com)

//Example 1 :
// const API_URL = "https://api.github.com/users/vivek-panchal";
// async function handlePromise(){
//     //fetch()=>Response.json()=>jsonValue
//     let data = await fetch(API_URL);
//     let response = await data.json();
//     console.log(response);
// }

// handlePromise();

//=======================================================================================================================================================================================================================================================

//Example 2 : Error Handling(try-catch)

//github api
const API_URL = "https://api.github.com/users/lav-kushwaha";
async function handlePromise(){
    //fetch()=>Response.json()=>jsonValue
    try {
        let data = await fetch(API_URL);//fetch method will return promise.
        let response = await data.json();
        console.log(response);
    }
    catch(err){
        console.log(err);
        
    }
}

handlePromise();

//another way to handle error.
// handlePromise().catch((err)=>console.log(err));

//=======================================================================================================================================================================================================================================================
//Async/await vs Promise.then/catch

//aync await is just a syntactical sugar over promises.
//Behind the scene it is uses promises.

//async await is new way of writing promises.
