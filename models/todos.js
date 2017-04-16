'use strict';
module.exports = function(sequelize, DataTypes) {
  var todos = sequelize.define('todos', {
    task: DataTypes.STRING,
    completed: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    },
    instanceMethods:{
      getTask: function(){
        let done;
        if(this.completed){
          done='[X]'
        }else{
          done='[ ]'
        }
        return `${this.id}. ${done} ${this.task}`;
      }

    }




  });
  return todos;
};
