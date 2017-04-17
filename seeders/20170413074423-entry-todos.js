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
    return queryInterface.bulkInsert('to_dos',
    [{
      task_name: 'Bangun + Subuh Jamaah',
      is_completed: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      task_name: 'Nyuci Baju',
      is_completed: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      task_name: 'Install Hackintosh',
      is_completed: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      task_name: 'Learn about ORM and NPM',
      is_completed: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      task_name: 'Pengajian',
      is_completed: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ]);
  },

  down: function (queryInterface, Sequelize) {
     /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('to_dos', [{
      task_name: 'Bangun + Subuh Jamaah',
      is_completed: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      task_name: 'Nyuci Baju',
      is_completed: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      task_name: 'Install Hackintosh',
      is_completed: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      task_name: 'Learn about ORM and NPM',
      is_completed: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      task_name: 'Pengajian',
      is_completed: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ])
  }
};
