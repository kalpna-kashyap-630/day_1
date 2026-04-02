
//example of Arrow function
//1st example -

//arrow function example -1
console.log("Arrow function");

const printHello = () => {
    console.log("hello Arrow Function");
}
printHello();

console.log("add two values with using Arrow function");

//arrow function example -2
let arrowsum =(a,b) => {
    console.log(a+b);
};
arrowsum(1,1);
//arrow function example -3
console.log("arrow function example -3");

const arrowAdd=(a,b) => {
    console.log(a+b);
};
arrowAdd(2,2);


//same example with simple function
console.log("simple function");
function add(x,y){
    console.log(x+y);
}
add(5,5);

//2nd way of simple function
console.log("simple function use return");
function sum(x,y)
{
    return x+y;
}
console.log(sum(3,3));


//example of this keyword use in arrow function -

const user = {username: "Suhani", price: 999,
    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);
    }
}
user.welcomeMessage()

console.log(this);