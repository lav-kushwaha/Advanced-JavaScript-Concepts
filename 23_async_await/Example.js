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

const API_URL = "https://api.github.com/users/lav-kushwaha";
async function handlePromise(){
    //fetch()=>Response.json()=>jsonValue
    try {
        let data = await fetch(API_RL);
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
//Interview Tips :