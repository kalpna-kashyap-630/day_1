//example of filter -
//filter() - return a new array of elements that pass a test
//filter() - creates a new array with only the elements that pass a condition
console.log("example of filter");
let numbers = [1, 2, 3, 4, 5, 6];
let evenNumbers = numbers.filter(x => x % 2 === 0);
console.log(evenNumbers); // [2, 4, 6]
console.log(numbers);     // [1, 2, 3, 4, 5, 6]


//Filter objects - 
let users = [
    {name: "Rohan", age: 20},
    {name: "Sam", age: 17},
    {name: "Bob", age: 22},
];
let adults = users.filter(user => user.age >= 18);
console.log(adults);

//find leap year with using filter 
let year = [2020,2021,2022];
let leapYear = year.filter(y => y % 4 === 0);
console.log(leapYear);

//grade with using filter
let student= [
    {name: "sam", marks: 90, grade: "A"},
    {name: "dav", marks: 80, grade: "B"},
    {name: "Bob", marks: 70, grade: "C"},
    {name: "rosh",marks: 40, grade: "Fail"}
];
let grade = student.filter(g => g.marks >=90);
console.log(grade);


const usersArr = [
    {
        first_name:"kalpna",
        last_name: "kashyap"
    },
     {
        first_name:"suhani",
        last_name: "kashyap"
    },
     {
        first_name:"kavita",
        last_name: "kashyap"
    },
     {
        first_name:"Simran",
        last_name: "thakur"
    },
     {
        first_name:"suhani",
        last_name: "thakur"
    }

]
 
const newArr = [];
for (let i = 0; i < usersArr.length; i++) {
    if (usersArr[i].last_name === "kashyap") {
        newArr.push(usersArr[i]);
    }
}
console.log(newArr);
