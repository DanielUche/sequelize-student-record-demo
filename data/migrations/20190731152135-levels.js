'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'levels',
      {
        id: {
          type: Sequelize.UUID,
          primaryKey: true,
          defaultValue: Sequelize.UUIDV4,
          allowNull: false,
          autoIncrement: false,
        },
        name: Sequelize.STRING,
        teacher_id: {
          type: Sequelize.UUID,
        },
      },
      {
        schema: 'public',
      },
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('levels');
  },
};
