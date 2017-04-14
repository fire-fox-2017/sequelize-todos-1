'use strict';
let argv = process.argv;
const db = require('./models');

// let list = () => {
//   db.to_do.findAll()
//   .then (tasks => {
//     tasks.forEach(task => {
//       console.log(task)
//     })
//   })
// }

if (argv[2] == "list"){
  db.to_do.findAll({
           order: ['id']
       }).then(rows => {
           arrTodo.forEach(rows => {
               console.log(to_do.getList());
           });
       });
} else if (argv[2] == "add"){
  // let task_name_input = "";
  // for (let i = 3; i < argv.length; i++){
  //   task_name_input = task_name_input.push(i).join(" ");
  // }
  argv.shift();
  argv.shift();
  argv.shift();
  let task_name_input = argv.join().replace(/,/g, " ");
  db.to_do.create({
    'task_name': task_name_input,
    'is_completed': false
  })
  .then(result => {
    console.log(`Appended "${task_name_input}" to your TODO list...`);
  })
  .catch(err => {
    console.log("ERR Input : " + err);
  })
} else if (argv[2] == "delete"){
  db.to_do.destroy({
    where: {
      id: argv[3]
    }
  }).then(result => {
      console.log(`Deleted Task with id "${argv[3]}" from your TODO list...`);
  })
    .catch(err => {
      console.log("ERR Delete : " + err);
  })
} else if (argv[2] == "complete"){
    db.to_do.update({
      is_completed: true
    }, {
      where: {
        id: argv[3]
      }
      }).then(result => {
          console.log(`Task with id ${argv[3]} have been completed.`);
        })
        .catch(err => {
          console.log("ERR Complete : " + err);
        })
} else if (argv[2] == "uncomplete"){
  db.to_do.update({
    is_completed: false
  }, {
    where: {
      id: argv[3]
    }
    }).then(result => {
        console.log(`Task with id ${argv[3]} have been completed.`);
      })
      .catch(err => {
        console.log("ERR Complete : " + err);
      })
}
