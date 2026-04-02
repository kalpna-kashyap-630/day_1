// // for loop
// console.log("print the 1 to 10 number with using for loop");
// for(let i=1;i<=5;i++)
// {
//     console.log(i);
// }

// //same program with using function
// console.log("print the 1 to 10 number with using Arrow function");

// function printNum(){
//     for(let i = 1; i<=5; i++)
//     {
//         console.log(i);
//     }
// }
// printNum();

// // same program with using Arrow function
// console.log("print the 1 to 10 number with using Arrow function");

// const printNumber = () => {
//     for(let i = 1; i <= 5;i++){
//         console.log(i);
//     }
// }
// printNumber();

// //print even number 1 to 50
console.log("print even number :");

function printEven(){
    for(let i = 1; i<=50;i++){

        if(i%2==0){
            console.log(i);
        }
    }
}
printEven();

// //print table 
console.log("print Table with using for loop and function");
function printTable(num=2){
    for(let i=1;i<=10;i++)
    {
        console.log(num ,"*", i, "=",num*i);
    }
}
printTable();

//solve loop problem -1
// console.log("print string with using loop");
// const string = "bvfvfbdkfkvfdbfkbvfdvfdkdfvfbkdb";
// for(let i=0;i<string.length;i++)
// {
//     console.log(string[i]);
// }

// // reverse string 
// console.log("print reverse string");
// const str = "bvfvfbdkfkvfdbfkbvfdvfdkdfvfbkdb";
// let rev = "";
// for(let i = str.length -1; i>= 0; i--){
//     rev += str[i];
// }
// console.log(rev);

// // print even string
// console.log("print even string");
// const strEven = "bvfvfbdkfkvfdbfkbvfdvfdkdfvfbkdb";
// let evenStr = "";
// for(let i =0;i< str.length; i++){
//     if (i % 2 == 0){
//         evenStr += str[i];
//     }
// }
// console.log("Even string:", evenStr);

//print name with using loop
const name = "kalpna kashyap";
for(let i=0;i<name.length;i++){
    console.log(name[i ]);
}
//reverse string
const name1 = "kalpna kashyap";
let reverse = "";
for (let i =name1.length -1; i>= 0; i--){
    reverse += name1[i];
}
 console.log(reverse);

 //even string
const nameEven = "kalpna kashyap";
let even = "";
for(let i= 0; i< nameEven.length;i++){
    if(i%2 == 0){
        even += nameEven[i];
    }
}
console.log("Even string : ", even);

//odd string
const nameOdd = "kalpna kashyap";
let odd ="";
for(let i=0; i< nameOdd.length;i++){
    if(i%2 !== 0){
        odd += nameOdd[i];
    }
}
console.log("Odd string : ",odd);

//count vowels in a string wiht using for loop
console.log("count vowels in a string with using for loop");
const name2 = "kalpna";
let count = 0;
for(let i = 0;i < name2.length; i++){
    const ch = name2[i];
    if(
        ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u'
    ){
        count++;
    }
}
console.log("vowel count:",count);

//write a program to print factorial of a number using a for loop -
console.log("write a program to print factorial of a number using a for loop");
const num = 5;
let factorial =1;
for(let i =1; i<= num; i++){
    factorial *= i;
}
console.log("factorial of 5! = ", factorial);

//sum of numbers from 1 to n
console.log("calculate the sum of number from 1 to n");
let n =5;
let sum = 0;
for(let i =1; i<= n; i++){
    sum += i;
}
console.log("sum :", sum);

//create a simple pattern -1
// *
// **
// ***
// ****
// *****

let rows = 5;
for(let i = 1; i<= rows; i++){
    let stars = "";
    for(let j = 1; j <= i; j++){
        stars += "* ";
    }
    console.log(stars);
}
//create a simple pattern -2
//     *
//    ***
//   *****
//  *******
// *********

let row = 5;
for(let i =1; i<= row; i++) {
    let star = "";
    // add spaces before stars 
    for(let j =1; j <= row -i; j++){
        star += " ";
    }
    for(let k =1; k <= 2 * i;k++){
        star +="*";
    }
    console.log(star);
}