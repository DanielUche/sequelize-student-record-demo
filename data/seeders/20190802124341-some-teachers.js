'use strict';

const uuidv4 = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'teachers',
      [
        {
          id: uuidv4(),
          name: 'John Doe',
          level_id: uuidv4(),
        },
        {
          id: uuidv4(),
          name: 'Daniel Daniel',
          level_id: uuidv4(),
        },
        {
          id: uuidv4(),
          name: 'Spider Man',
          level_id: uuidv4(),
        },
      ],
      {},
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('teachers', null, {});
  },
};
