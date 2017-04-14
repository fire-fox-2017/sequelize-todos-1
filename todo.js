'use strict';

//write your code here
const fs = require("fs");
const db = require("./models");
let argv = process.argv

class ToDo {
  constructor() {
    this.helpList = ["node todo.js list                  to show the to do list",
                     "node todo.js add 'task'            to add new task to the list",
                     "node todo.js delete 'task id'      to delete a task from the list",
                     "node todo.js complete 'task id'    to mark a task",
                     "node todo.js unComplete 'task id'  to unmark a task",
                     "node todo.js task 'task id'        to show the task with corresponding id"];
  }

  help() {
    for (let i = 0; i < this.helpList.length; i++) {
      console.log(`${i+1}. ${this.helpList[i]}`);
    }
  }

  list() {
    console.log("Fetching data from table");
    db.Tasks.list((tasks) => {
      console.log(`\nID Mark  Task`);
      tasks.forEach((task) => {
        let mark = "";
        if (task.complete) {
          mark = "X";
        } else {
          mark = " ";
        }
        console.log(`${task.id}  [${mark}]  ${task.task}`);
      });
    });
  }

  complete(taskID) {
    db.Tasks.update(
      {"complete": true},
      {where: {"id": taskID}})
        .then((updated) => {
          db.Tasks.find(taskID, (task) => {
            if (task) {
              console.log(`"${task.task}" has been completed`);
            } else {
              console.log(`ID is not found`);
            }
          });
        });
  }

  unComplete(taskID) {
    db.Tasks.update({"complete": false}, {where: {"id": taskID}}).then((inst)=> console.log(inst));
  }

  task(taskID) {
    db.Tasks.find(taskID, (task) => {
      if(task) {
        console.log(`\nID Mark Task`);
        let mark = "";
        if(task.complete) {
          mark = "X";
        } else {
          mark = " ";
        }
        console.log(`${task.id}  [${mark}]  ${task.task}`);
      } else {
        console.log(`ID is not found`);
      }
    });
  }

  add(task) {
    db.Tasks.add(task);
    console.log(`Task "${task}" is being added`);
  }

  delete(taskID) {
    db.Tasks.delete(taskID);
    console.log(`Removing task ${taskID}`);
  }

  clear() {
    this.taskList = [];
    console.log("the list is now empty");
  }

}

let toDo = new ToDo();

if (argv[2] === "help" || argv.length < 3) {
  console.log("                 --TODO.JS command list--");
  toDo.help();
} else if (argv[2] === "list") {
  toDo.list();
} else if (argv[2] === "add") {
  if (argv[3].length > 0 && /\w+/.test(argv[3])) {
    let newItem = [];
    for (let i = 3; i < argv.length; i++) {
      newItem.push(argv[i]);
    }
    toDo.add(newItem.join(" "));
  } else {
    console.log("please input the task");
  }

} else if (argv[2] === "delete") {
  if (/[0-9]+/.test(argv[3])) {
    toDo.delete(argv[3]);
  } else {
    console.log("please input task id");
  }
} else if (argv[2] === "complete") {
  toDo.complete(argv[3]);
} else if (argv[2] === "unComplete") {
  toDo.unComplete(argv[3]);
} else if (argv[2] === "task") {
  toDo.task(argv[3]);
} else if (argv[2] === "clear") {
  toDo.clear();
}
