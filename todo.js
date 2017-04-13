'use strict';

//write your code here

const model = require('./models');

class Controller {
  constructor() {
    this.argv = process.argv;
    this.model = model;
    this.view = new View(); 
  }

  addTask() {
    let db = this.model;
    db.Todo.create({
      task: 'Testing',
      isCompleted: false
    })
    .then(() => {
      console.log('success');
    })
    .catch((err) => {
      console.log(err);
    });
  }

  start() {
    switch(this.argv[2]) {
      case 'help':
      default:
        console.log('help');
        // this.help();
        break;
      case 'add':
        console.log('add');
        // this.add(this.getUserInput(3).join(' '))
        break;
      case 'list':
        console.log('list');
        // this.list();
        break;
      case 'task':
        console.log('task');
        // this.task(this.getUserInput(3).join(' '));
        break;
      case 'delete':
        console.log('delete');
        // this.delete(this.getUserInput(3).join(' '));
        break;
      case 'complete':
        console.log('complete')
        // this.complete(this.getUserInput(3).join(' '));
        break;
      case 'uncomplete':
        console.log('uncomplete');
        // this.uncomplete(this.getUserInput(3).join(' '));
        break;
      case 'list:outstanding':
        console.log('outstanding');
        // this.listOutstanding(this.getUserInput(3).join(' '));
        break;
      case 'list:complete':
        console.log('list:complete');
        // this.listComplete(this.getUserInput(3).join(' '));
        break;
      case 'tag':
        console.log('tag');
        // this.tag(this.getUserInput(3).join(' '));
        break;
      case 'filter':
        console.log('filter');
        // this.filter(this.getUserInput(3).join(' '));
        break;
    }
  } // start method

  getUserInput(startingIdx) {
    let result = [];
    for (let i = startingIdx; i < this.argv.length; i++) {
       result.push(this.argv[i]);
    }
    return result;
  } //getUserInputMethod




}

class View {
  constructor() {
  }
  
  viewMsg() {
    
  }

}

let myTodo = new Controller();

// console.log(myModel.Todos)
myTodo.addTask();
