
//example of array -

const myArr = [10,20,30,40,50,60];
const myHeors = ["shaktiman", "shinchain"];
const myArr2 = new Array(1,2,3,4,5);


console.log(myArr);
console.log(myHeors);
console.log(Array);

//access array -
console.log("index - 0 = ", myArr[0]); 
console.log("index - 1 = ", myArr[1]);
console.log("index - 2 = ", myArr[2]);
console.log("index - 3 = ", myArr[3]);
console.log("index - 4 = ", myArr[4]);
console.log("index - 5 = ", myArr[5]);
console.log("index - 6 = ", myArr[6]);

//methods of Array

// //push mehtod with using Array
console.log("push method");
const myArrs = [10,20,30];
console.log(myArrs);
myArrs.push(40)
console.log(myArrs);

//pop mehtod with using Array
console.log("pop method");
const myArrss = [10,20,30];
console.log(myArrss);
myArrss.pop()
console.log(myArrss);

//unshift method 
console.log("unshift method - shift value of anywhere");
const myUnshift = [10,20,30];
console.log(myUnshift);
myUnshift.unshift(50)
console.log(myUnshift);
//shift method - remove unshift value
console.log("sift method - remove unshift value");
myUnshift.shift()
console.log(myUnshift);
//  //includes- this method used for true and false
//  console.log(myUnshift.includes(30));
//  //indexOf - this method used for find the index of value
//  console.log(myUnshift.indexOf(30));

 
//  //join method - add all elements of an array into a string
//  const newArr = myArr.join()
//  console.log(myArr);
//  console.log(newArr);


//  //slice and splice method - returns a copy of a section of an array -
//  console.log("slice method");
//  console.log("A ", myArr);
//  const myn1 = myArr.slice(1,3)
//  console.log(myn1);
//  console.log("B ", myArr);

//  console.log("splice method");
//  const myn2 = myArr.splice(1,3)
//  console.log("C ",myArr);
//  console.log(myn2);



 //searching and finding methods - indexof,includes,find,findindex 
 
// 1️⃣ indexOf()
//Returns the index of an element

console.log("indexof method - returns index of element");
let fruits = ["apple", "banana", "mango"];

console.log(fruits.indexOf("banana")); // 1
//2️⃣ includes()
//Checks if an element exists (returns true or false)
console.log("includes() - Checks if an element exists (returns true or false");
console.log(fruits.includes("mango")); // true
console.log(fruits.includes("orange")); // false

//3️⃣ find()

console.log("find() - Returns the first element that matches a condition");

let numbers = [10, 20, 30, 40];
let result = numbers.find(num => num >= 30);

console.log(result); // 30


console.log("findIndex() - Returns the first element that matches a condition ");
let number = [10, 20, 30, 40];

let index = number.findIndex(num => num > 25);

console.log(index); //index no - 2

// splice() – Add or remove elements at any position
console.log(" splice() – Add or remove elements at any position");

let fruit = ["apple", "banana", "orange"];
fruits.splice(1, 1, "kiwi"); // At index 1, remove 1 element, add "kiwi"
console.log(fruit);

//slice() – Extract part of an array
console.log("slice() – Extract part of an array");
let fruitss = ["apple", "banana", "orange", "kiwi"];
let newFruits = fruitss.slice(1, 3); // From index 1 to 2 (not including 3)
console.log(newFruits);

//concat()
console.log("cancat() -combines Array ");
let arr1 = [1, 2];
let arr2 = [3, 4];
let combined = arr1.concat(arr2);
console.log(combined);
//join()
console.log("join() -join Array ");
let arr = [1, 2, 3];
let str = arr.join("-");
console.log(str);
//reverse()
console.log("reverse() - reverse array");
let arrrev = [1, 2, 3];
arr.reverse();
console.log(arr);

//sort
console.log("sort() - sort Array");
let arrsort = [3, 1, 2];
arr.sort();
console.log(arrsort);

//forEach -To perform an action of each element of an array
console.log("forEach() - loops through each element");
let arrr = [1, 2, 3, 6, 8];
arrr.forEach(x => console.log(x));

//map() – Returns a new array by transforming elements
console.log("map() – Returns a new array by transforming elements");
let doubled = arrr.map(x => x * 2);
console.log(doubled);

//filter() – Returns a new array of elements that pass a test
console.log("filter() – Returns a new array of elements that pass a test");
let filtered = arrr.filter(x => x > 5);
console.log(filtered);

//reduce() – Reduces array to a single value
console.log("reduce() – Reduces array to a single value");
let sum = arrr.reduce((total, x) => total + x, 0);
console.log(sum);





