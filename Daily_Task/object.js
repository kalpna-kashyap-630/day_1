
 const user = {
    name : "kalpna",
    full_name : "kalpna kashyap",
    email : "kalpna123@gmail.com",
    location : "Kullu"
 };
 console.log(user);

 console.log("Name = ",user.name);
 console.log("Full_Name = ",user.full_name);
 console.log("Email = ",user.email);
 console.log("Location = ",user.location);

 //next example of create object 
 const tinderUser = {}
 tinderUser.id = "123abc",
 tinderUser.name = "sammy"
 console.log(tinderUser);

//object with method-
console.log("object with method");
 const person = {
  name: "Alice",       //name,age - properties
  age: 25,
  sayHello: function () {
    console.log("Hello!");
  }
};

person.sayHello(); // Hello!    sayHello() - method


//next example
const obj1 = {1:'a',2:'b'}
const obj2 = {3:'a',4:'b'}
// const obj3 = {obj1,obj2}
const obj3 = Object.assign (obj1,obj2)
console.log(obj3)

 
//array of object - 
const users =[
    {
        id: 1,
        email: "kalpn123@gmail.com"
    },
     {
        id: 2,
        email: "kalpn123@gmail.com"
    },
     {
        id: 3,
        email: "kalpn123@gmail.com"
    },
]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

//function with object
// function calculateCreatePrice(val1, val2, ...num1){
//     return num1
// }
// console.log(calculateCreatePrice(200,400,500,2000));

console.log("function with object");
const userobj = {
    username: "kalpna",
    price: 199
}
function handleObject(anyobject){
     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(userobj)


//object with arrow function
console.log("object with arrow function");
const math = {
    add : (a,b) => a+b,
    subtract : (a,b) => a-b
};
console.log(math.add(5, 3));  //8
console.log(math.subtract(5,2));  //3