'use strict';

const db = require('./models');
const repl = require('repl');
let replServer = repl.start({prompt: '> '});

let insertTask = (name, completed) => {
  db.Task.create({"name":name, "completed": completed})
  .then(task => {
    console.log(JSON.stringify(task.toJSON(), null, 2));
  })
  .catch(err => {
    console.log(err);
  });
}

replServer.context.insertTask = insertTask;
