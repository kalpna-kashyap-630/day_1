//example of map
//map() - create a new array by transforming each element of the original array
console.log("example of map() -");
let numbers = [1, 2, 3, 4];
let doubled = numbers.map(x => x * 2);
console.log(doubled); // [2, 4, 6, 8]
console.log(numbers); // [1, 2, 3, 4] 


//convert array of strings

let names = ["john", "alice", "bob"];
let capitalNames = names.map(name => name.toUpperCase());

console.log(capitalNames);

//Array of Objects - 
let users = [
    {name: "suman", age: 25},
    {name: "sumit", age: 30}
];
let userNames = users.map(user => user.name);

console.log(userNames);