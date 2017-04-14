'use strict'
// const repl = require('repl');

class StaticMethodCall {
  constructor() {

  }
  static staticMethod() {
    return 'Static method has been called';
  }
  static anotherStaticMethod() {
    return this.staticMethod() + ' from another static method';
  }
}
// console.log(StaticMethodCall.staticMethod());
// 'Static method has been called'
// const replServer = repl.start('> ')
// replServer.context.help = StaticMethodCall.anotherStaticMethod

console.log(StaticMethodCall.anotherStaticMethod())
// 'Static method has been called from another static method'