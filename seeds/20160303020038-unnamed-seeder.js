'use strict';

var data = [];
data.push({
  task: 'Meditated 15 minutes',
});

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('activities', data);
  },

  down: function (queryInterface, Sequelize) {
    //return queryInterface.bulkDelete('activities', null, {});
  }
};
