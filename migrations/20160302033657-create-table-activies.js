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
      },
      tags: {
        type: DataTypes.ARRAY(DataTypes.STRING)
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      finished: {
        type: DataTypes.DATE
      },
      data: {
        type: DataTypes.JSONB
      }
    });
  },

  down: function (queryInterface, DataTypes) {
    return queryInterface.dropTable('activities');
  }
};
