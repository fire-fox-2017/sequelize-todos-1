'use strict';

//write your code here

const model = require('./models');
const argv = process.argv;
const userInput = argv.splice(3, argv.length).join(' ');

class Controller {
  constructor() {
    this.argv = process.argv;
    this.model = model;
    this.view = new View();
    // this.userInput = userInput;
  }

  getUserInput(startingIdx) {
    let result = [];
    for (let i = startingIdx; i < this.argv.length; i++) {
       result.push(this.argv[i]);
    }
    return result;
  } //getUserInputMethod

  addTask(content) {
    let model = this.model;
    model.Todo.create({
      task: content,
      isCompleted: false
    })
    .then((content) => {
      this.view.addMsg(content.task);
    })
    .catch((err) => {
      console.log(err);
    });
  }
  
  listTask() {
    let model = this.model;
    model.Todo.findAll()
    .then((tasks) => {
      tasks.forEach((task, idx) => {
        console.log(`${task.id} [${(task.isCompleted ? 'X' : ' ')}] : ${task.task}`);
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  deleteTask(id) {
    let model = this.model;
    model.Todo.find({ //find adalah alias dari findOne
      where: {
        id: id
      }
    })
    .then((result) => {
      this.view.deleteMsg(result.task);
      result.destroy();
    })
  }

  showOneTask(id) {
    let model = this.model;
    model.Todo.findById(id)
    .then((task) => {
      console.log(`${task.id} [${(task.isCompleted ? 'X' : ' ')}] : ${task.task}`);
    });
  }

  complete(id) {
    let obj = this;
    let model = this.model;
    model.Todo.update({
      isCompleted: true
    },
    {
      where: {
        id: id
      }
    })
    .then(function(task) {
      obj.view.completeMsg(task.task);
    });
  }

  uncomplete(id) {
    let obj = this;
    let model = this.model;
    model.Todo.update({
      isCompleted: false
    },
    {
      where: {
        id: id
      }
    })
    .then(function(task) {
      obj.view.completeMsg(task.task);
    });
  }

}

class View {
  constructor() {
  }
  
  addMsg(task) {
    console.log(`Successfully adding ${task} to your todo list`);
  }

  deleteMsg(task) {
    console.log(`Successfully delete ${task} from your todo list`);
  }

  completeMsg(task) {
    console.log(`Successfully complete ${task} from your todo list`);
  }

  uncompleteMsg(task) {
    console.log(`Successfully uncomplete ${task} from your todo list`);
  }

}

let myTodo = new Controller();


let processUserInput = (myTodo) => {
  switch(argv[2]) {
    case 'help':
    default:
      console.log('help');
      break;
    case 'add':
      myTodo.addTask(userInput);
      break;
    case 'list':
      myTodo.listTask();
      break;
    case 'delete':
      myTodo.deleteTask(userInput);
      break;
    case 'task':
      myTodo.showOneTask(userInput);
      break;
    case 'complete':
      myTodo.complete(userInput);
      break;
    case 'uncomplete':
      myTodo.uncomplete(userInput);
      break;
  }
}

processUserInput(myTodo);

