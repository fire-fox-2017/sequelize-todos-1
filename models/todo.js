'use strict';
module.exports = function(sequelize, DataTypes) {
    var Todo = sequelize.define('Todo', {
        task: DataTypes.STRING,
        complete: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            },
            addTask: (tasks) => {
                Todo.create({
                        task_name: tasks,
                        complete: false
                    })
                    .catch((err) => {
                        return err.message
                    })
            },
            getAllTask: (callback) => {
                Todo.findAll()
                    .then(rows => {
                        callback(rows)
                    })
                    .catch((err) => {
                        return err.message
                    })
            },
            deleteTask: (index) => {
                Todo.destroy({
                        where: {
                            id: index
                        }
                    }).then(() => {
                        return `Deleted Task with id ${index} from your TODO list`
                    })
                    .catch((err) => {
                        return err.message
                    })
            },
            getTask: (callback) => {
                Todo.findAll()
                    .then((rows) => {
                        callback(rows)
                    })
                    .catch((err) => {
                        return err.message
                    })
            },
            getTaskById: (index, callback) => {
                Todo.findById(index)
                    .then((task) => {
                        callback(task)
                    })
                    .catch((err) => {
                        return err.message
                    })
            },
            updateComplete: (index) => {
                Todo.find({
                        where: {
                            id: index
                        }
                    }).then((task) => {
                        task.updateAttributes({
                            complete: "true"
                        })
                    })
                    .catch((err) => {
                        return err.message
                    })
            },
            updateUncomplete: (index) => {
                Todo.find({
                        where: {
                            id: index
                        }
                    }).then((task) => {
                        task.updateAttributes({
                            complete: "false"
                        })
                    })
                    .catch((err) => {
                        return err.message
                    })
            }
        },
        instanceMethods: {

        }
    });
    return Todo;
};
