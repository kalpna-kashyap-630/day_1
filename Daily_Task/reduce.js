//reduce() - Reduce array to a single value
//reduce() - combines all elements into one value

console.log("reduce() - ");
let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((total, x) => total + x, 0);
console.log(sum); // 10
numbers.reduce((acc, current) => {
  return acc + current
}, 0)

//find total price - 
let cart = [
    {item: "Book", price: 100},
    {item: "Pen",  price: 30},
    {item: "Bag",  price: 5000},
];
let totalPrice = cart.reduce((total, product) => {
    return total + product.price;
},0);
console.log(totalPrice);

//count -
let fruits = ["apple", "banana", "apple", "orange", "banana"];

let count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(count);

// { apple: 2, banana: 2, orange: 1 }
