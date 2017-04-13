'use strict';

//write your code here
const fs = require("fs");
const db = require("./models");
let argv = process.argv

class ToDo {
  constructor() {
    // this.taskList = [];
    this.helpList = ["node todo.js list                to show the to do list",
                     "node todo.js add 'task'          to add new task to the list",
                     "node todo.js delete 'task id'    to delete a task from the list",
                     "node todo.js mark 'task id'      to mark a task",
                     "node todo.js unmark 'task id'    to unmark a task",
                     "node todo.js task 'task id'      to show the task with corresponding id"];
  }

  // loadData(file) {
  //   let data = JSON.parse(fs.readFileSync(file));
  //   this.taskList = data;
  // }

  help() {
    for (let i = 0; i < this.helpList.length; i++) {
      console.log(`${i+1}. ${this.helpList[i]}`);
    }
  }

  list() {
    console.log("Fetching data from table");
    db.Tasks.list((tasks) => {
      console.log(`\nID Mark Task`);
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

  mark(taskID) {
    db.Tasks.update({"complete": true}, {where: {"id": taskID}}).then((inst)=> console.log(inst));
  }

  unMark(taskID) {
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
    console.log(`Task ${task} is being added`);
  }

  checkID(taskID) {
    let found = 0;
    for (let i = 0; i < this.taskList.length; i++) {
      if (this.taskList[i].id === taskID) {
        found ++;
      }
    }
    if (found > 0) {
      return false;
    } else {
      return true;
    }
  }

  search(taskID) {
    let index = null;
    for (let i = 0; i < this.taskList.length; i++) {
      if (Number(this.taskList[i].id) === Number(taskID)) {
        index = i;
      }
    }
    return index;
  }

  delete(taskID) {
    db.Tasks.delete(taskID);
    console.log(`Removing task ${taskID}`);
  }



  // unMark(taskID) {
  //   let index = this.search(taskID);
  //   if (this.taskList.length > 0) {
  //     if (index === null) {
  //       console.log(`task ID cannot be found in the list`);
  //     } else if (this.taskList[index].item.length > 0) {
  //       this.taskList[index].marked = false;
  //       console.log(`task ${this.taskList[index].item} with id ${taskID} is unmarked`);
  //     } else {
  //     console.log(`task ID cannot be found in the list`);
  //     }
  //  } else {
  //    console.log("no item to be unmarked from the list, please add some task first")
  //  }
  // }

  saveToFile(file) {
    fs.writeFile(file, JSON.stringify(this.taskList), (err) => {
      if (err) {
        console.log("error occured when saving the change to the file");
      }
    });
  }

  clear() {
    this.taskList = [];
    console.log("the list is now empty");
  }

}

let toDo = new ToDo();
// let file = "data.json";
// toDo.loadData(file);

if (argv[2] === "help") {
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
    // toDo.saveToFile(file);
  } else {
    console.log("please input the task");
  }

} else if (argv[2] === "delete") {
  if (/[0-9]+/.test(argv[3])) {
    toDo.delete(argv[3]);
    // toDo.saveToFile(file);
  } else {
    console.log("please input task id");
  }
} else if (argv[2] === "mark") {
  toDo.mark(argv[3]);
  // toDo.saveToFile(file);
} else if (argv[2] === "unmark") {
  toDo.unMark(argv[3]);
  // toDo.saveToFile(file);
} else if (argv[2] === "task") {
  toDo.task(argv[3]);
} else if (argv[2] === "clear") {
  toDo.clear();
  // toDo.saveToFile(file);
}
