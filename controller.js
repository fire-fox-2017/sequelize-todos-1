'use strict'
const db = require('./models');
const View = require('./View');

class Controller {
  constructor() {

  }
  static help(){
    View.help()
  }

  static list(){
    let promises = new Promise ((resolve, reject)=>{
      db.Todolist.findAll()
        .then((lists)=>[
          resolve(lists)
        ])
    })
    promises.then((data)=>{
      return View.list(data)
      })
      .catch((err)=>{
        console.log(err);
      })
  }

  static add_task(name){
    let promise = new Promise((res,rej)=>{
      db.Todolist.create({
        task : name,
        status : false,
      })
        .then((params)=>{
          res(`Added Task ${name} in your list`)
        })
        .catch((err)=>{
          console.log(err);
        })
    })
    promise.then((data)=>{
      // console.log('berhasil');
      View.add_task(data)
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  static task(id){
    db.Todolist.findOne({where :{ id : id }})
      .then((data)=>{
        View.task(data.dataValues)
      })
  }
  static delete_task(id){
    let promise = new Promise((res,rej)=>{
      db.Todolist.destroy({where:{id:id}})
      .then(()=>{
        Controller.list()
        // console.log('berhasil');
        res(id)
      })
      .catch((err)=>{
        console.log(err);
      })
    })
    promise.then((data)=>{
      console.log(`Task with Id : ${data} has been delete`)
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  static completed_task(id){
    db.Todolist.update({status : true },{where:{id:id}})
      .then(()=>{
        Controller.list()
      })
  }
  static uncompleted_task(){
    db.Todolist.update({status : false },{where:{id:id}})
      .then(()=>{
        Controller.list()
      })
  }
}

module.exports = Controller
Contact GitHub API Training Shop Blog About
