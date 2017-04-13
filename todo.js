'use strict';
//write your code here
let db = require("./models");
let argv = process.argv;

if (argv.length > 2) {
    argv.shift();
    argv.shift();
    if (argv[0] == "list") {
        db.todo.findAll({
            order: ['id']
        }).then(arrTodo => {
            arrTodo.forEach(todos => {
                console.log(todos.getList());
            });
        });
    } else if (argv[0] == "add") {
        argv.shift();
        let name = argv.join().replace(/,/g, " ");
        db.todo.create({
                'name_task': name,
                'completed_status': false
            })
            .then(result => {
                console.log(`Appended "${name}" to your TODO list...`);
            })
            .catch(err => {
                console.log("ERR Input : " + err);
            })
    } else if (argv[0] == "delete") {
        db.todo.destroy({
                where: {
                    id: argv[1]
                }
            }).then(result => {
                console.log(`Deleted Task with id "${argv[1]}" from your TODO list...`);
            })
            .catch(err => {
                console.log("ERR Delete : " + err);
            })
    } else if (argv[0] == "complete") {
        db.todo.update({
                completed_status: true
            }, {
                where: {
                    id: argv[1]
                }
            }).then(result => {
                console.log(`Task with id ${argv[1]} have been completed.`);
            })
            .catch(err => {
                console.log("ERR Complete : " + err);
            })
    } else if (argv[0] == "uncomplete") {
        db.todo.update({
                completed_status: false
            }, {
                where: {
                    id: argv[1]
                }
            }).then(result => {
                console.log(`Task with id ${argv[1]} have been uncompleted.`);
            })
            .catch(err => {
                console.log("ERR Uncomplete : " + err);
            })
    }
}
