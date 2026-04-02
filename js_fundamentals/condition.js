// if -else condition
console.log("write a program to print pass and fail");
let marks = 50;
console.log("marks", marks);
if(marks>=50)
    {
console.log("pass");
}
else {
console.log("fail");
}


//even number with using if - else condition
console.log("write a program to print even number");
let num = 10;
console.log("num = ", num);
if(num%2==0){
    console.log("this number is even");
}
else{
    console.log("this number is odd");
}

//leap year
console.log("write a program to print leap year");
let year="2026";
console.log("year = ", year);
if(year%4==0){
    console.log("this is leap year");
}
else{
    console.log("this is not leap year");
}

//condition with function -
console.log("write a program to print positive and negative number  with using function");
function checkPositiveNegative(num){
    if(num>0){
        return "number is positive";
    }else{
        return "number is negative";
    }
}
console.log(checkPositiveNegative(-5));


console.log("write a program to print even and odd number  with using function");
function checkEvenOdd(num){
    if(num%2==0){
        return "number is Even";
    }else{
        return "number is Odd";
    }
}
console.log(checkEvenOdd(5));


//if-else-if 
console.log("if -else -if");

function checkGrade(marks) {
  if (marks >= 90) {
    return "Grade A";
  } else if (marks >= 75) {
    return "Grade B";
  } else if (marks >= 50) {
    return "Grade C";
  } else {
    return "Fail";
  }
}

console.log(checkGrade(82));

//switch condition
console.log("switch condition");

function getDay(dayNumber) {
  switch (dayNumber) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";
    default:
      return "Invalid day";
  }
}

console.log(getDay(1));

//ternary condition
console.log(" write a program to print age with using ternary condition");
function isAdult(age) {
  return age >= 18 ? "Adult" : "Minor";
}

console.log(isAdult(16));

//ternary condition
console.log("write a program to print Leap Year with using ternary condition condition");
function getYear(year) {
  return year % 4 == 0 ? "Leap Year" : "Not Leap Year";
}

console.log(getYear(2026));


//Logical operator
console.log("logical Operator");
function canVote(age, citizen) {
  if (age >= 18 && citizen === true) {
    return "Can vote";
  } else {
    return "Cannot vote";
  }
}

console.log(canVote(20, true));


// Nested if condition
console.log("nested if condition");

function login(username, password) {
  if (username === "admin") {
    if (password === "1234") {
      return "Login successful";
    } else {
      return "Wrong password";
    }
  } else {
    return "Wrong username";
  }
}

console.log(login("admin", "1234"));
