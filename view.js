let Table = require('cli-table');
class View {
  constructor() {}
  listView(cb) {
    let check = '\u2714';
    let uncheck = '\u2718';
    let table = new Table({
      head: ['No', 'ID', 'TASK', 'COMPLETED'],
      colWidths: [5, 5, 20, 15]
    });
    for (let i = 0; i < cb.length; i++) {
      table.push(
        [`${i+1}`, `${cb[i].id}`, `${cb[i].task}`, `${cb[i].completed ? check : uncheck}`])
    }
    console.log(table.toString());
  }
  addView(cb) {
    if (cb) {
      console.log('Task saving to database is success')
    } else {
      console.log('Failed saving to database !')
    }
  }
  completedView(cb) {
    if (cb) {
      console.log('Task changed to complete is success')
    } else {
      console.log('Failed Task changed to complete !')
    }
  }
  uncompletedView(cb) {
    if (cb) {
      console.log('Task changed to uncomplete is success')
    } else {
      console.log('Failed Task changed to uncomplete !')
    }
  }
  deleteView(cb) {
    if (cb) {
      console.log('Task delete is success')
    } else {
      console.log('Failed delete task !')
    }
  }
}
export default View