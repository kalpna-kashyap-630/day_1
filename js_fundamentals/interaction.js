//interaction : alert, prompt, confirm
console.log("Interaction : alert, prompt, confirm");
//alert
alert("Hello");

//prompt
let age2 = prompt('how old are you?', 100);
alert(`you are ${age2} years old!`);

let x =  prompt('Enter the value x ');
let y =  prompt('Enter the value y ');
console.log("x = ", x);
console.log("y = ", y);

//confirm
let isBoss = confirm("Are you boss?");
alert(isBoss);
