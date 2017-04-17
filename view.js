"use strict"

let model = require('./models')

class View{

  static help(){
    console.log('[+] node todo.js help');
    console.log('[+] node todo.js list');
    console.log('[+] node todo.js add <DATA>');
    console.log('[+] node todo.js task <ID>');
    console.log('[+] node todo.js delete <ID>');
    console.log('[+] node todo.js complete <ID>');
    console.log('[+] node todo.js uncomplete <ID>');
  }

  static listData(){
    model.Todo
         .findAll()
         .then(datas=>{
           datas.forEach(data=>{
             if(data.completed == false)
                console.log(`[${data.id}][ ] ${data.task}`)
              else
                   console.log(`[${data.id}][X] ${data.task}`)
           })
         })
  }
}


export default View
