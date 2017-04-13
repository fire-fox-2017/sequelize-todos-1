'use strict';

//write your code here

let db = require('./models')

function addList(sentence) {
    db.Task.addTask(sentence)
    console.log(`Appended "${sentence}" to your TODO list...`);
}

function listTask() {
    db.Task.getAllTask((tasks) => {
        tasks.forEach((task) => {
            console.log(`${task.id}. ${task.task_name}`);
        })
    })
}

function deleteTask(index) {
    db.Task.deleteTask(index);
}

function getTask() {
    db.Task.getTask((tasks) => {
        let id = 1
        tasks.forEach(task => {
            if (task.mark == 'false') {
                console.log(`${task.id}. [ ] ${task.task_name}`);
            } else {
                console.log(`${task.id}. [X] ${task.task_name}`);
            }
            id++
        })
    })
}

function getTaskById(index) {
    db.Task.getTaskById(index, (task) => {
        if (task.mark == 'false') {
            console.log(`${task.id}. [ ] ${task.task_name}`);
        } else {
            console.log(`${task.id}. [X] ${task.task_name}`);
        }
    })
}

function updateComplete(index) {
    db.Task.updateComplete(index)
    console.log(`Updated Task with id ${index} become complete`);
}

function updateUncomplete(index) {
    db.Task.updateUncomplete(index)
    console.log(`Updated Task with id ${index} become uncomplete`);
}

function help() {
    let listHelp = [
        `help                   : Melihat daftar command yang bisa diakses`,
        `list                   : Melihat daftar TODO`,
        `add                    : Menambahkan TODO ke dalam list`,
        `task <id>              : Melihat detail TODO`,
        `delete <id>            : Menghapus TODO`,
        `complete <id>          : Menandai bahwa TODO selesai`,
        `uncomplete <id>        : Menandai bahwa TODO belum selesai`
    ]
    for (let i = 0; i < listHelp.length; i++) {
        console.log(`${i+1}. ${listHelp[i]}`);
    }
}

let processConvert = process.argv
if (processConvert[2] == "add") {
    addList(String(processConvert.slice(3)).replace(/,/g, ' '))
} else if (processConvert[2] == "list") {
    listTask()
} else if (processConvert[2] == "delete") {
    deleteTask(processConvert[3])
} else if (processConvert[2] == "listTask") {
    getTask()
} else if (processConvert[2] == "task") {
    getTaskById(processConvert[3])
} else if (processConvert[2] == "complete") {
    updateComplete(processConvert[3])
} else if (processConvert[2] == "uncomplete") {
    updateUncomplete(processConvert[3])
} else if (processConvert[2] == "help") {
    help(processConvert[3])
} else {
    console.log(`Comand is not found`);
}