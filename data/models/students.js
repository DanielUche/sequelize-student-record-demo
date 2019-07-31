'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define(
    'student',
    {
      name: { type: DataTypes.STRING, allowNull: false },
      level_id: { type: DataTypes.INTEGER },
    },
    {
      schema: 'public',
    },
  );
  Student.associate = models => {
    models.student.belongsTo(models.level, {
      foreignKey: 'level_id',
      targetKey: 'id',
    });
  };
  return Student;
};
