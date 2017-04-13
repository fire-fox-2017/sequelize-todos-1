'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Todos', [
      {
        task: 'Pair Project',
        isCompleted: false
      },
      {
        task: 'Coding',
        isCompleted: false
      },
      {
        task: 'Belanja',
        isCompleted: false
      },
      {
        task: 'Main Game',
        isCompleted: false
      },
      {
        task: 'Makan',
        isCompleted: false
      },
      {
        task: 'Tidur Siang',
        isCompleted: false
      }



      ], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Todos', null, {});
  }
};
