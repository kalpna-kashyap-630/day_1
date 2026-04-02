//callback is a function or a piece of code that is passed as an arugment to another function


function sayHello(){
    console.log("hello");
}
 function sayHi(){
    console.log("Hi..");
 }
function add(num1, num2, callback){
    console.log(num1 + num2);
    callback();
}
let a = 10;
let b = 20;


add(a,b, sayHello);
add(30,5, sayHi);


//example -2 

function greet(name, callback){
 console.log('Hello ' + name);
 callback();
}

function sayGoodbye(){
    console.log('Goodbye!');
}
greet('kalpna',sayGoodbye);

//callback with array iteration
console.log("callback with array iteration");
const number = [1,2,3];
number.forEach(function(num){
    console.log(num*2);
});

//Synchronous Callbacks
console.log("Executed immediately during the function execution");

function calculate(a,b, callback){
    return callback(a,b);
}
function add(x,y){
    return x + y;
}
console.log(calculate(2,3, add));

//asynchronous callbacks
console.log("Asynchronous callbacks");
//executed after an async operation finishes -
setTimeout(() =>{
    console.log("async callback");
},1000);

//asynchronous callbacks
console.log("Asynchronous callbacks");

setTimeout(function () {
  console.log("This runs after 2 seconds");
}, 2000);


//Named Callback functions
console.log("callbacks with a function name");

function myGreet(){
    console.log("Hello!");
}
setTimeout(myGreet, 500);

//Event Callback functions -
//Triggered by events like clicks, keypress, ect.
// button.addEventListener("click", () => {
//     console.log("Button clicked");
// });