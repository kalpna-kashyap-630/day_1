const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let todos = [];

function showMenu() {
  console.log(" To-Do List");
  console.log("1. Add Task");
  console.log("2. Read Tasks");
  console.log("3. Delete Task");
  console.log("4. Exit");

  rl.question("Choose an option: ", handleMenu);
}

function handleMenu(choice) {
  switch (choice) {
    case "1":
      addTask();
      break;
    case "2":
      viewTasks();
      break;
    case "3":
      deleteTask();
      break;
    case "4":
      console.log("Exit");
      rl.close();
      break;
    default:
      console.log("Invalid option!");
      showMenu();
  }
}

function addTask() {
  rl.question("Enter task: ", (task) => {
    if (task.trim() === "") {
      console.log("Task cannot be empty!");
    } else {
      todos.push(task);
      console.log("Task added!");
    }
    showMenu();
  });
}

function readTasks() {
  console.log("\nYour Tasks:");
  if (todos.length === 0) {
    console.log("No tasks found.");
  } else {
    todos.forEach((task, index) => {
      console.log(`${index + 1}. ${task}`);
    });
  }
  showMenu();
}

function deleteTask() {
  readTasks();
  rl.question("Enter task number to delete: ", (num) => {
    const index = parseInt(num) - 1;
    if (index >= 0 && index < todos.length) {
      todos.splice(index, 1);
      console.log("Task deleted!");
    } else {
      console.log("Invalid task number!");
    }
    showMenu();
  });
}

showMenu();

