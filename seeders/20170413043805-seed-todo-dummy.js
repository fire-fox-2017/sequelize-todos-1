'use strict';

module.exports = {
    up: function(queryInterface, Sequelize) {
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
            name_task: 'Back a delicious blueberry-glazed cheesecake',
            completed_status: false,
            createdAt: new Date,
            updatedAt: new Date,
        }, {
            name_task: 'Write up that memo and fax it out',
            completed_status: false,
            createdAt: new Date,
            updatedAt: new Date,
        }, {
            name_task: 'Conquer the world',
            completed_status: false,
            createdAt: new Date,
            updatedAt: new Date,
        }], {});
    },

    down: function(queryInterface, Sequelize) {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkDelete('Person', null, {});
        */
    }
};
