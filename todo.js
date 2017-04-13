'use strict';
import Controller from './controller'
import View from "./view"
class Todo {
  constructor(argv) {
    this.input = argv[2];
    this.taskParams = argv.slice(3).join(" ");
    this.controller = new Controller()
  }
  start() {
    switch (this.input) {
      case 'list':
        this.controller.listTask()
        break;
      case 'add':
        this.controller.addTask(this.taskParams)
        break
      case 'complete':
        this.controller.completedTask(this.taskParams)
        break
      case 'uncomplete':
        this.controller.uncompletedTask(this.taskParams)
        break
      case 'delete':
        this.controller.deleteTask(this.taskParams)
        break
      default:
        this.help()
    }
  }
  help() {
    console.log('$ babel-node list')
    console.log('$ babel-node add <task>')
    console.log('$ babel-node delete <id>')
    console.log('$ babel-node complete <id>')
    console.log('$ babel-node uncomplete <id>')
  }
}
let input = process.argv;
let todo = new Todo(input);
todo.start();
//todo.addTask(taskParams)