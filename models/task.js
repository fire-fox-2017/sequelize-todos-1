'use strict';
module.exports = function(sequelize, DataTypes) {
    var Task = sequelize.define('Task', {
        task_name: DataTypes.STRING,
        mark: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            },
            addTask: (tasks) => {
                Task.create({
                        task_name: tasks,
                        mark: false
                    })
                    .catch((err) => {
                        return err.message
                    })
            },
            getAllTask: (callback) => {
                Task.findAll()
                    .then(rows => {
                        callback(rows)
                    })
                    .catch((err) => {
                        return err.message
                    })
            },
            deleteTask: (index) => {
                Task.destroy({
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
                Task.findAll()
                    .then((rows) => {
                        callback(rows)
                    })
                    .catch((err) => {
                        return err.message
                    })
            },
            getTaskById: (index, callback) => {
                Task.findById(index)
                    .then((task) => {
                        callback(task)
                    })
                    .catch((err) => {
                        return err.message
                    })
            },
            updateComplete: (index) => {
                Task.find({
                        where: {
                            id: index
                        }
                    }).then((task) => {
                        task.updateAttributes({
                            mark: "true"
                        })
                    })
                    .catch((err) => {
                        return err.message
                    })
            },
            updateUncomplete: (index) => {
                Task.find({
                        where: {
                            id: index
                        }
                    }).then((task) => {
                        task.updateAttributes({
                            mark: "false"
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
    return Task;
};