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
        isCompleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        task: 'Coding',
        isCompleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        task: 'Belanja',
        isCompleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        task: 'Main Game',
        isCompleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        task: 'Makan',
        isCompleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        task: 'Tidur Siang',
        isCompleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
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
