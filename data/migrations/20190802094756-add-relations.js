'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('subjects', ['level_id'], {
      type: 'foreign key',
      name: 'subjects_level_id_fkey',
      references: {
        table: 'levels',
        field: 'id',
      },
      onDelete: 'SET NULL',
      onUpdate: 'cascade',
    });

    await queryInterface.addConstraint('levels', ['teacher_id'], {
      type: 'foreign key',
      name: 'level_teacher_id_fkey',
      references: {
        table: 'teachers',
        field: 'id',
      },
      onDelete: 'SET NULL',
      onUpdate: 'cascade',
    });

    await queryInterface.addConstraint('students', ['level_id'], {
      type: 'foreign key',
      name: 'students_level_id_fkey',
      references: {
        table: 'levels',
        field: 'id',
      },
      onDelete: 'SET NULL',
      onUpdate: 'cascade',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('subjects', 'subjects_level_id_fkey');
    await queryInterface.removeConstraint('levels', 'level_teacher_id_fkey');
    await queryInterface.removeConstraint('students', 'students_level_id_fkey');
  },
};
