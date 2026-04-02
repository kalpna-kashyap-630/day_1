//variable is a container for store data

//declare variable
console.log("Display simple variable");
namek = "kalpna";
agek = 25;
pricek = 99.9;
console.log("Name = ",namek);
console.log("Age = ",agek);
console.log("Price = ",pricek);

//var : Variable can be re-declared & updated. A global scope variable.
//var variable
console.log("Display the var variable");
var age1 = 21;
var age1 = 22;
var age1 = 23;
console.log("Age =", age1);

//let : Variable connot be re-declared but can be updated. a block scope variable.
//let variable
console.log("Display the let variable");
let name = "kalpna";
let age = 25;
let price = 99.9;
console.log("Name = ",name);
console.log("Age = ",age);
console.log("Price = ",price);

//example of let
let rate = 5;
rate =10;
console.log("rate = ",rate); // rate =10

//example of let
let a;
console.log(a);  // display the undefined variable


//const : Variable cannot be re-declared or updated. a block scope variable.
//const variable

// console.log("Display the const variable")
// const value = 10;
// value = 20;
// value = 30;
// console.log("value = ", value);  // create error

//example of const
const PI = 3.14;
console.log("PI = ",PI);

//example of const
// const num;
// console.log(num); // errror // because 





//block scope of let
console.log("This is block scope of let :");
{
    let a = 5;
    // let a = 10; // create error
    console.log("a = ",a);
}
console.log("Redefined variable");
{
    let a=10;
    console.log("a = ",a);
}
console.log("Redefined variable");
{
    let a=20;
    console.log("a = ",a);
}


//block scope of const
console.log("This is block scope of const :");
{
    const  num=50;
    console.log("num = ", num)
}
{
    const  num=100;
    console.log("num = ", num)
}





