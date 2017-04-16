'use strict';

//write your code here

const db = require('./models');
const repl = require('repl');

// let replServer = repl.start({prompt: '$_$> '});

let create = (name) => {
	db.Task.create({name: name})
	.then (task => {
		console.log(`Created task ${task.name}.`)
	})
	.catch (err => {
		console.log(err.message);
	})
}

// replServer.context.create = create;





//list


// add


// delete

// complete


/*
let params = [];
process.argv.forEach( (val, index, array) => {
  if(index > 1) {
    params.push(val);
  }
});

console.log(params);
*/

class Todo {
  constructor () {

  }


  initApp() {

    let params = [];
    process.argv.forEach( (val, index, array) => {
      if(index > 1) {
        params.push(val);
      }
    });

    // console.log(`params = ${params}`)

    if(params.length > 0) {
      switch(params[0]) {
        case 'help':
          todo.help();
          break;
        case 'list':
          console.log("Todo List:")
          
          db.Task.findAll()
          .then (tasks => {

            for (let i = 0 ; i < tasks.length ; i++) {
              let complete_str = `[ ]`;
              if (tasks[i].is_completed)
                complete_str = `[x]`;
              console.log(`${i+1}. ${complete_str} ${tasks[i].name}`);
            }            

          })


          break;
        case 'add':
          // let task_str = "";
          // params.forEach((val, index, arr) => {
          //   if(index > 0)
          //     task_str += val + " ";
          // });

          let task_str = params.slice(1,params.length);
          // console.log(`task_str = '${task_str}'`);
          task_str = task_str.join(' ');
          console.log(`task_str = '${task_str}'`);

          // todo.add(new Task({task: task_str}));

          db.Task.create({name: task_str})
          .then (task => {
            console.log(`Created task ${task.name}.`)
          })
          .catch (err => {
            console.log(err.message);
          })

          break;
        case 'task':
          // todo.taskInfo(params[1]);
          break;

        case 'delete':
          // todo.delete(params[1]);
          // console.log("delete : " + params[1]);
          let id = null;
          let isDeleted = false;
          // find id based on the params[1]
          db.Task.findAll()
          .then (tasks => {
            for (let i = 0 ; i < tasks.length ; i++) {
              if (i == params[1]-1) {
                id = tasks[i].id;
                db.Task.destroy({where: {id: id}})
                .then (function(rowDeleted) {
                  if(rowDeleted === 1 ) {
                    console.log(`Deleted Task with id ${params[1]} successfully`);
                    isDeleted = true;
                  }
                  
                }, function (err) {
                  console.log(err);
                });

              }
            }

            if(!isDeleted)
              console.log("Invalid Task Id")
          })

          break;
        case 'complete':
          // todo.complete(params[1]);
          let isFound = false;
          // find id based on the params[1]
          db.Task.findAll()
          .then (tasks => {
            for (let i = 0 ; i < tasks.length ; i++) {
              if (i == params[1]-1) {

                tasks[i].is_completed = true;
                tasks[i].completed_at = new Date();
                tasks[i].save()
                .then (function () {
                  console.log(`'${tasks[i].name}' have been completed.`)
                  isFound = true;

                }, function (err) {
                  console.log(err);
                })



              }
            }

            if(!isFound)
              console.log("Invalid Task Id")
          })



          break;
        case 'uncomplete':
          // todo.uncomplete(params[1]);
          // todo.complete(params[1]);
          let isUncomplete = false;

          // find id based on the params[1]
          db.Task.findAll()
          .then (tasks => {
            for (let i = 0 ; i < tasks.length ; i++) {
              if (i == params[1]-1) {

                tasks[i].is_completed = false;
                tasks[i].completed_at = null;

                tasks[i].save()
                .then (function () {
                  console.log(`'${tasks[i].name}' have been marked uncomplete.`)
                  isUncomplete = true;

                }, function (err) {
                  console.log(err);
                })



              }
            }

            if(!isUncomplete)
              console.log("Invalid Task Id")
          })




          break;
        case 'list:outstanding':
          // todo.listOutstanding(params[1]);
          break;
        case 'list:completed':
          // todo.listCompleted(params[1]);
          break;
        case 'tag':
          // let id = params[1];
          // let tag_arr = params.slice(2,params.length);

          // // check tag?

          // todo.assignTags(id, tag_arr);
          break;
        case 'r':
          // console.log(todo._listObj.list);
          break;
        default:
          // if(/^filter:/.test(params[0])) {
          //   // console.log("filter");
          //   let filter_tag = params[0].split(":")[1];
          //   // console.log(`filter_tag = "${filter_tag}"`)
          //   todo.filterTag(filter_tag);
          // } else {
          //   console.log(`Sorry, wrong command.`);
          // }
          console.log(`Sorry, wrong command.`);

      }

    }

  } // end of initApp



}// end of class Todo



let todo = new Todo();
todo.initApp();