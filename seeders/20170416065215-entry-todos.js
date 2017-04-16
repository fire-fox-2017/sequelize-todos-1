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
      return queryInterface.bulkInsert('Tasks', 
        [
          {name: 'coding', createdAt: new Date(), updatedAt: new Date()},
          {name: 'surfing', createdAt: new Date(), updatedAt: new Date()},
          {name: 'running', createdAt: new Date(), updatedAt: new Date()},
          {name: 'dancing', createdAt: new Date(), updatedAt: new Date()},
          {name: 'jumping', createdAt: new Date(), updatedAt: new Date()}

        ], {});


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
