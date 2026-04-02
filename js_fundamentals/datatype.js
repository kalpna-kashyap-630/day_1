//data types - 
console.log("Data Type")
//non - primitive data type - object, arrays, function , Date Object

//object  datatype -
let student = {
    name: "kalpna kashyap",
    profile: "nodejs developer",
    company: "iTechnolabs"
}
console.log("Name = ", student.name);
console.log("Profile = ", student.profile);
console.log("Company = ", student.company);

//Arrays Datatype -
let arr = [1,2,3,4,5];
console.log("Array = ", arr);

//Array with string value -
let arr1 = [1, "two" ,{name:"kalpna"},[3,4,5]];
console.log("arr1 =", arr1);

//function -
function greet(name) {return "hello, "+ name + "!";}
//callling the function
console.log(greet("kalpna"));


//date object -
// Creating a new Date object for the current date and time  
let currentDate = new Date();  
// Displaying the current date and time  
console.log(currentDate);  