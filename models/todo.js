'use strict';
module.exports = function(sequelize, DataTypes) {
    var todo = sequelize.define('todo', {
        name_task: DataTypes.STRING,
        completed_status: DataTypes.BOOLEAN
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            }
        },
        instanceMethods: {
            getList: function() {
                let temp = "";
                if (this.completed_status) {
                    temp = "[X]";
                } else {
                    temp = "[ ]";
                }
                return `${this.id}. ${temp} ${this.name_task}`;
            }
        }
    });
    return todo;
};
