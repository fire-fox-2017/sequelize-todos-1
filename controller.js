let model = require('./models')
import View from "./view"
class Controller {
  constructor() {
    this.view = new View()
  }
  listTask() {
    model.Todo.list((cb) => {
      this.view.listView(cb)
    })
  }
  addTask(task) {
    model.Todo.add(task, (cb) => {
      this.view.addView(cb)
    })
  }
  completedTask(id) {
    model.Todo.completed(id, (cb) => {
      this.view.completedView(cb)
    })
  }
  uncompletedTask(id) {
    model.Todo.uncompleted(id, (cb) => {
      this.view.uncompletedView(cb)
    })
  }
  deleteTask(id) {
    model.Todo.delete(id, (cb) => {
      this.view.deleteView(cb)
    })
  }
}
export default Controller