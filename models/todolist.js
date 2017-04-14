'use strict';
module.exports = function(sequelize, DataTypes) {
  var Todolist = sequelize.define('Todolist', {
    task: {
      type : DataTypes.STRING
    },
    status: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Todolist;
};