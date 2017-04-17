'use strict';

//write your code here

let db = require('./models')

function addList(sentence) {
    db.Todo.addTask(sentence)
    console.log(`Appended "${sentence}"`);
}

function listTask() {
    db.Todo.getAllTask((tasks) => {
        tasks.forEach((todo) => {
          if(todo.complete == true){
            console.log(`${todo.id}. [X]${todo.task}`);
          }else{
            console.log(`${todo.id}. [ ]${todo.task}`);
          }
        })
    })
}

function deleteTask(index) {
    db.Todo.deleteTask(index);
}

function getTaskById(index) {
    db.Todo.getTaskById(index, (todo) => {
        if (todo.complete == 'false') {
            console.log(`${todo.id}. [ ] ${todo.task}`);
        } else {
            console.log(`${todo.id}. [X] ${todo.task}`);
        }
    })
}

function updateComplete(index) {
    db.Todo.updateComplete(index)
    console.log(`Updated Task with id ${index} become complete`);
}

function updateUncomplete(index) {
    db.Todo.updateUncomplete(index)
    console.log(`Updated Task with id ${index} become uncomplete`);
}

function help() {
  console.log(
`help                   : Melihat daftar command yang bisa diakses\n
list                   : Melihat daftar TODO\n
add                    : Menambahkan TODO\n
task <id>              : Melihat detail TODO\n
delete <id>            : Menghapus TODO\n
complete <id>          : Menandai bahwa TODO selesai\n
uncomplete <id>        : Menandai bahwa TODO belum selesai`);

}

switch(process.argv[2]){
  case "help":
    help()
  break;
  case "list":
    listTask()
  break;
  case "add":
    addList(String(process.argv.slice(3)).replace(/,/g, ' '))
  break;
  case "task":
    task(process.argv[3])
  break;
  case "delete":
    deleteTask(process.argv[3])
  break;
  case "complete":
    updateComplete(process.argv[3])
  break;
  case "uncomplete":
    updateUncomplete(process.argv[3])
  break;
}
