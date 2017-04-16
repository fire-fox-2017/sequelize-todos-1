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
    model.Todo.add(task, (cb, data) => {
      this.view.addView(cb, data)
    })
  }
  completedTask(id) {
    model.Todo.completed(id, (cb, data) => {
      this.view.completedView(cb, data)
    })
  }
  uncompletedTask(id) {
    model.Todo.uncompleted(id, (cb, data) => {
      this.view.uncompletedView(cb, data)
    })
  }
  deleteTask(id) {
    model.Todo.delete(id, (cb, data) => {
      this.view.deleteView(cb, data)
    })
  }
}
export default Controller