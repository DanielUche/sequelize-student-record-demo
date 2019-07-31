'use strict';
module.exports = (sequelize, DataTypes) => {
  const Teacher = sequelize.define(
    'teacher',
    {
      name: { type: DataTypes.STRING, allowNull: false },
      level_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      schema: 'public',
      timestamps: false,
    },
  );
  Teacher.associate = models => {
    models.teacher.belongsTo(models.level, {
      foreignKey: 'level_id',
      targetKey: 'id',
    });
  };
  return Teacher;
};
