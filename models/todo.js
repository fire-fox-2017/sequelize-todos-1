'use strict';
module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define('Todo', {
    task: DataTypes.STRING,
    completed: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },

      uncompletedData:function(masukan){
        Todo
             .findAll()
             .then(datas=>{
               datas.forEach(data=>{
                 if(data.id == masukan){
                   Todo.update( {completed : false}, { where: { id:masukan }} )
                 }
               })
             })
      },

      completedData:function(masukan){
        Todo
             .findAll()
             .then(datas=>{
               datas.forEach(data=>{
                 if(data.id == masukan){
                   Todo.update( {completed : true}, { where: { id:masukan }} )
                   console.log(`${data.task} have been comleted`)
                 }
               })
             })
      }
    },


    instanceMethods:{

    }






  });
  return Todo;
};