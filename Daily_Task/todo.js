const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let todos = [];

function showMenu() {
  console.log("TO DO List");
  console.log("1. Add Car");
  console.log("2. Update Car");
  console.log("3. View Cars");
  console.log("4. Delete Car");
  console.log("5. Exit");

  rl.question("Choose an option: ", handleMenu);
}

function handleMenu(choice) {
  switch (choice) {
    case "1":
      addCar();
      break;
      case "2":
      updateCar();
      break;
    case "3":
      viewCars();
      break;
    case "4":
      deleteCar();
      break;
    case "5":
      console.log("Exit");
      rl.close();
      break;
    default:
      console.log("Invalid option!");
      showMenu();
  }
}

function addCar() {
  rl.question("Enter task: ", (task) => {
    todos.push(task);
    console.log("Task added!");
    showMenu();
  });
}

function viewCars() {
 console.log("All Cars: ");
    for (let i = 0; i < todos.length; i++) {
  console.log((i + 1) + " " + todos[i]);
}
  showMenu();
}

function updateCar() {
    //checks if the list is empty
  if (todos.length === 0) {
    console.log("No tasks to update.");
    return showMenu();
  }
  for (let i = 0; i < todos.length; i++) {
    console.log((i + 1) + " " + todos[i]);  //print items

  }
  //Ask the user which item to update 
 rl.question("Enter task number to update: ", function(num) {
    let index = parseInt(num) - 1;

    if (index >= 0 && index < todos.length) {
      rl.question("Enter new task: ", function(newTask) {
        todos[index] = newTask; 
        console.log("Task updated!");
        showMenu();
      });
    } else {
      console.log("Invalid task number.");
      showMenu();
    }
  });
}
 
function deleteCar() {
  if (todos.length === 0) {
    console.log("No tasks to delete.");
    return;
  }
  //display all cars
  console.log("cars:");
  for (let i = 0; i < todos.length; i++) {
    console.log((i + 1) + ". " + todos[i]);
  }
//ask which task to delete
  rl.question("Enter task number to delete: ", (num) => {
    const index = parseInt(num) - 1;
//validate the task number
    if (index >= 0 && index < todos.length) {
        //delete the selected task
      todos.splice(index, 1);
      console.log("Task deleted!");
    } else {
      console.log("Invalid task number.");
    }

    showMenu(); 
  });
}
showMenu();
