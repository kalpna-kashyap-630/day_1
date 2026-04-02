//async - this keyword is used before a function 
// the function always returns a promise 

async function greet(){
    return "hello";
}
greet(). then(result => console.log(result));




//await - can be used only inside an async function
//pauses execution untill the promise is resolved or rejected
//returns the resolved value of the promise

function getData(){
    return new Promise(resolve => {
        setTimeout(() => resolve("Data Received"), 1000);
    });
}

async function showData(){
    const result = await getData();
    console.log(result);
}
showData();