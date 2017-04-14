'use strict';
module.exports = function(sequelize, DataTypes) {
  var to_do = sequelize.define('to_do', {
    task_name: DataTypes.STRING,
    is_completed: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
    },{
      instanceMethods: {
        getList: function() {
               let temp = "";
               if (this.is_completed) {
                   temp = "[X]";
               } else {
                   temp = "[ ]";
               }
               return `${this.id}. ${temp} ${this.task_name}`;
           }
      }
    });
  return to_do;
};
