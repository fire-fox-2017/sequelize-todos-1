'use strict';

const repl = require('repl');
const Controller = require('./controller');
const View = require('./view');
//write your code here

const replServer = repl.start('> ')

replServer.context.help = Controller.help
replServer.context.list = Controller.list
replServer.context.add = Controller.add_task
replServer.context.task = Controller.task
replServer.context.del_task = Controller.delete_task
replServer.context.complete = Controller.completed_task
replServer.context.uncomplete = Controller.uncompleted_task