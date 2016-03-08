'use strict';

module.exports = {
  up: function (queryInterface, DataTypes) {
    return queryInterface.createTable('activities', {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1
      },
      task: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
  },

  down: function (queryInterface, DataTypes) {
    return queryInterface.dropTable('activities');
  }
};
