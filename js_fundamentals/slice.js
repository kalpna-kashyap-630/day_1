//slice method -
console.log("slice method - ");

let fruits = ["apple", "banana", "cherry", "date"];

let result = fruits.slice(1, 3);
console.log(result);    // ["banana" , "cherry"]
console.log(fruits);

//splice() method - 
console.log("splice method - ");

let fruitss = ["apple", "banana", "cherry", "date"];

let removed = fruitss.splice(1, 2);
console.log(removed);   // ["banana", "cherry"]
console.log(fruitss);    // ["apple", "date"]

//example of splice
console.log("example of splice")

let fruit = ["apple", "banana"];

fruit.splice(1, 0, "cherry");
console.log(fruit);    // ["apple", "cherry", "banana"]
