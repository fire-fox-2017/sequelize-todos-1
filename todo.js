'use strict';

//write your code here
// const repl = require('repl');

var db = require('./models');
let input = process.argv;
input.shift();
input.shift();

let viewHelp = () => {
  console.log(`--------- Aplikasi TO DO LIST ---------`)
  console.log(`help : untuk melihat daftar command \nlist : untuk melihat daftar task\nadd <task_content> : untuk menambah data \ntask <task_id> : untuk mencari data\ndelete <task_id> : untuk menghapus data \ncomplete <task_id> : untuk check mark data  \nuncomplete <task_id> : untuk un check mark data`);
}

let viewListTask = () => {
  db.tasks.getListTask(function(tasks){
    tasks.forEach(function(task){
      if(task.isComplete == true){
        console.log(`${task.id}. [x] ${task.task}`);
      } else {
        console.log(`${task.id}. [] ${task.task}`);
      }
    })
  })
}

let viewAddTask = (task) => {
  db.tasks.addTask(task);
}

let viewTask = (idTask) => {
  db.tasks.getTask(idTask, function(result){
    result.forEach(function(hasil){
      // console.log(hasil.id)
      if(hasil.isComplete == true){
        console.log(`${hasil.id}. [] ${hasil.task}`);
      } else {
        console.log(`${hasil.id}. [] ${hasil.task}`);
      }
    })
  });
}

let viewDeleteTask = (idTask) => {
  db.tasks.deleteTask(idTask);
}

let viewCompleteTask = (idTask) => {
  db.tasks.completeTask(idTask);
}

let viewUncompleteTask = (idTask) => {
  db.tasks.uncompleteTask(idTask);
}

let viewError = () => {
  console.log('Perintah Tidak Ditemukan');
}



if(input[0] === undefined || input[0] === 'help'){
  viewHelp();
} else if(input[0] === 'list'){
  viewListTask();
} else if(input[0] === 'add'){
  input.shift();
  viewAddTask(input.join(' '));
} else if(input[0] === 'task'){
  input.shift();
  viewTask(input);
} else if(input[0] === 'delete'){
  input.shift();
  viewDeleteTask(input);
} else if(input[0] === 'complete'){
  input.shift();
  viewCompleteTask(input);
} else if(input[0] === 'uncomplete'){
  input.shift()
  viewUncompleteTask(input);
} else {
  viewError();
}
