'use strict';
const db = require('./models');

let list = ()=>{
  db.todos.findAll({order: [['id', 'ASC']]})
      .then(todos => {
          todos.forEach(todo => {
              console.log(todo.getTask())
          })
      })
}

let complete = (value) => {

  db.todos.update({completed:true},{where: {id:value}})
  .then(todos=>{
    console.log(todos);
  })

}
let hapus = (value) =>{
  db.todos.destroy({where:{id:value}})
  .then(todos=>{
    console.log(todos)
  })

}

let addTask = (task) => {
  console.log(task);
    db.todos.create({
        'task': task,
        'completed' : false
    }).then(todo=>{
      console.log(JSON.stringify(todo.toJSON(),null,2));
    }).catch(err=>{
      console.log(err.message);
    })
}



let argv=process.argv;
if(argv.length>1){
  argv.shift();
  argv.shift();
  // console.log(argv[0])
  if(argv[0]=='list'){
    list();
  }
  if(argv[0]=='complete'){
    complete(Number(argv[1]));
  }
  if(argv[0]=='delete'){
    hapus(Number(argv[1]));
  }
  if(argv[0]=='add'){
    argv.shift();
    let task = argv.join(' ');
    // console.log(task);
    // hapus(Number(argv[1]));
    addTask(task)
  }
}else{
  console.log("no word detected");
}








//write your code here
