const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let todos = [];

function showMenu() {
  console.log(`
=== TO-DO APP ===
1. Add Task
2. List Tasks
3. Mark Task as Completed
4. Delete Task
5. Exit
`);
}

function addTask() {
  rl.question("Enter task description: ", (task) => {
    if (task.trim() === "") {
      console.log("Task cannot be empty.");
    } else {
      todos.push({ text: task, completed: false });
      console.log("Task added!");
    }
    mainMenu();
  });
}

function listTasks() {
  if (todos.length === 0) {
    console.log("No tasks found.");
  } else {
    todos.forEach((todo, index) => {
      const status = todo.completed ? "✔" : "✗";
      console.log(`${index + 1}. [${status}] ${todo.text}`);
    });
  }
  mainMenu();
}

function completeTask() {
  rl.question("Enter task number to mark as completed: ", (num) => {
    const index = num - 1;
    if (todos[index]) {
      todos[index].completed = true;
      console.log("Task marked as completed!");
    } else {
      console.log("Invalid task number.");
    }
    mainMenu();
  });
}

function deleteTask() {
  rl.question("Enter task number to delete: ", (num) => {
    const index = num - 1;
    if (todos[index]) {
      todos.splice(index, 1);
      console.log("Task deleted!");
    } else {
      console.log("Invalid task number.");
    }
    mainMenu();
  });
}

function mainMenu() {
  showMenu();
  rl.question("Choose an option: ", (choice) => {
    switch (choice) {
      case "1":
        addTask();
        break;
      case "2":
        listTasks();
        break;
      case "3":
        completeTask();
        break;
      case "4":
        deleteTask();
        break;
      case "5":
        console.log("Goodbye!");
        rl.close();
        break;
      default:
        console.log("Invalid choice.");
        mainMenu();
    }
  });
}

// Start the app
mainMenu();
