'use strict';
let db = require('./models')
import View from './view'
let model = require('./models')
const readline = require('readline');


//write your code here
class Todo{
  constructor(masukan){
    this._inputan = masukan[2];
  }

  dataTask(masukan){
    let task = masukan.slice(3).join(' ')
    let objk = {
      task: task,
      completed: false
    }
    return objk;
  }

  inserData(input_user){
    model.Todo.create(input_user)
          .then((instance)=>{
            console.log("Data Berhasil diinput")
          })
          .catch( (err) => {
            console.log("ini error: ", err.message)
          } )
  }

  deleteData(input_id){
    console.log(input_id)
    model.Todo.destroy(
      {'where' : { id : `${input_id}`}})
              .then(function(row) {
                if(row ===1){
                  console.log('Delete Sukses')
                }
              })
              .catch(function (err){
                console.log(err.message);
              })
  }


  print(){
    switch (this._inputan){
      case 'help' :
        View.help();
        break;

      case 'list':
        View.listData();
        break;

      case 'add':
        let objk = this.dataTask(masukan)
        this.inserData(objk);
        View.listData();
        break

      case 'delete':
        this.deleteData(masukan[3]);
        break;
      //
      case 'uncomplete':
        model.Todo.uncompletedData(masukan[3])
        break;

      case 'complete':
        model.Todo.completedData(masukan[3])
        break;
      }
    }


}

let masukan = process.argv

let todo = new Todo(masukan);
todo.print();