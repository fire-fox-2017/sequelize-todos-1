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
    return queryInterface.bulkInsert('Todos',[
      {
        task:'Bake a delicius blueberry-glazed cheesecake',
        complete:false,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        task:'Write up that memo and fax it out',
        complete:false,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        task:'Conquer the world',
        complete:false,
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ])
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
