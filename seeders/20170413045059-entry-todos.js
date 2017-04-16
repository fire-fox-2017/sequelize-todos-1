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
    return queryInterface.bulkInsert('todos', [{
        task: 'Bake a delicious blueberry-glazed cheesecake',
        completed:false,
        createdAt:new Date(),
        updatedAt:new Date()
    }, {
      task: 'Write up that memo and fax it out',
      completed:false,
      createdAt:new Date(),
      updatedAt:new Date()

    }, {
      task: 'Conquer the world',
      completed:false,
      createdAt:new Date(),
      updatedAt:new Date()

    }], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
