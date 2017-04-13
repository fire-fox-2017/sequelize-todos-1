'use strict';
module.exports = function(sequelize, DataTypes) {
  var Tasks = sequelize.define('Tasks', {
    task: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      list: function(callback) {
        Tasks.findAll()
          .then((tasks) => {
            callback(tasks);
          })
          .catch((err) => {
            callback(err);
          });
      },
      add: function(task) {
        Tasks.create({"task": task, "complete": false}).then((data) => {console.log("ADD success");}).catch((err) => {return err;});
      },
      delete: function(id) {
        Tasks.destroy({where : {"id": id}})
          .then((destroyed) => {
            if(destroyed > 0) {
              console.log(`DELETE success, ${destroyed} data deleted`);
            } else {
              console.log(`ID is not found`);
            }
          })
          .catch((err) => {
            return err;
          });
      },
      find: function(id, callback) {
        Tasks.findById(id)
          .then((task) => {
            callback(task);
          })
          .catch((err) => {
            callback(err);
          });
      }
    },
    instanceMethods: {
      complete: function() {
        this.updateAttributes({"complete": true}).then((status) => {console.log(status)}).catch((err) => {console.log(err)});
      }
    }
  });
  return Tasks;
};
