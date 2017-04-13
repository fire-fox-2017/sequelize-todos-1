'use strict';
module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define('Todo', {
    task: DataTypes.TEXT,
    completed: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      list: function(callback) {
        let listTodo = []
        Todo.findAll().then((values) => {
          values.forEach((val) => {
            let obj = {};
            obj['id'] = val.id;
            obj['task'] = val.task;
            obj['completed'] = val.completed;
            listTodo.push(obj)
          })
          callback(listTodo);
        })
      },
      add: function(taskData, callback) {
        Todo.create({
          task: taskData,
          completed: false
        }).then((res) => {
          callback(true, res)
        }).catch((err) => {
          console.log(err.message)
        })
      },
      completed: function(id, callback) {
        Todo.update({
          completed: true
        }, {
          where: {
            id: id
          }
        }).then(function(res) {
          callback(true, res)
        })
      },
      uncompleted: function(id, callback) {
        Todo.update({
          completed: false
        }, {
          where: {
            id: id
          }
        }).then(function(res) {
          callback(true, res)
        })
      },
      delete: function(id, callback) {
        Todo.destroy({
          where: {
            id: id
          }
        }).then((res) => {
          callback(true, res)
        })
      },
    }
  });
  return Todo;
};