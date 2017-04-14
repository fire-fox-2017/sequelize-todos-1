'use strict'
const Controller = require('./controller');

class View {
  constructor() {

  }
  static help(){
    console.log(`============JS Todo List============\n$ todo.js help()\n$ todo.js list()\n$ todo.js add(<task_content>) \n$ todo.js task(<task_id>)\n$ todo.js del_task(<task_id>)\n$ todo.js complete(<task_id>)\n$ todo.js uncomplete(<task_id>)`);
  }
  static list(input){
    input.forEach((element)=>{
      console.log(`${element.id} ${element.status ? '[x]':'[ ]'} ${element.task}`)
    })
  }
  static add_task(input){
    console.log(input);
  }
  static task(input){
    console.log(input);
  }
  // static delete_task(){
  //
  // }
}

module.exports = View;