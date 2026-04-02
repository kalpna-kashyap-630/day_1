//for of loop and for in loop


//for in loop - used for object

console.log("for in loop")

let obj = {
    harry: 90,
    shubh: 45,
    shivika: 55,
    shiv: 23
}
for(let a in obj){
    // console.log(a);
    console.log("Marks of " + a + " are " +obj[a]);
}

console.log("for in loop return key value -");

let student = {
    name: "Nidhi Thakur",
    age: 20,
    cgpa: 7.5,
    isPass:true,
};
for(let key in student){
    console.log("key = ", key, "value = ", student[key]);
}

//for of loop - used for string  and array not directly use for object
console.log("for of loop - ")

let str = "kalpna";

for(let i of str) {
    console.log("i = ",i);
}


