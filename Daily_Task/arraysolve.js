
//1 - find the largest number in an array 
function findMax(arr) {
    return Math.max(...arr);
}
console.log(findMax([3,5,1,9,2]));

//find the largest number in an array with using loop
console.log("//2 - find the largest number in an array");
const arrr =[10,30,50,80,20];
let max = arrr[0];
for(let i = 1;i< arrr.length;i++){
    if(arrr[i]>max) {
        max =arrr[i]
    }
}
console.log(max);

//2 - find the smallest number in an array
console.log("//2 - find the smallest number in an array");

const arr1 = [10,90,40,5,60];
let min = arr1[0];
for(let i = 1;i< arr1.length;i++){
    if(arr1[i]<min){
        min = arr1[i]
    }
}
console.log(min);

// 3 - sum of all elements in an array with using for loop
console.log("sum of all elements in an array with using for loop");
const arr2 = [1,2,3,4,5];
let sum = 0;
for(let i =0;i<arr2.length;i++){
    sum += arr2[i];
}
console.log(sum);

//4 - count even and odd numbers in an array -
console.log("count even and odd numbers in an array");

function countEvenOdd(arr) {
  let even = 0, odd = 0;

  arr.forEach(num => {
    num % 2 === 0 ? even++ : odd++;
  });

  return { even, odd };
}

console.log(countEvenOdd([1, 2, 3, 4, 5,6,7,8,9,10]));

//5 - check if an element exists in an array -
console.log("check if an element exists in an array");
function elementExists(arr, value) {
  return arr.includes(value);
}

console.log(elementExists([1, 2, 3], 2)); // true

//6 - sort an array in ascending order
console.log("sort an array in ascending order");
function sortArray(arr) {
  return arr.slice().sort((a, b) => a - b);
}

console.log(sortArray([5, 2, 9, 1]));


//this keyword -

