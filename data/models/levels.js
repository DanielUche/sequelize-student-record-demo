'use strict';
module.exports = (sequelize, DataTypes) => {
  const Level = sequelize.define(
    'level',
    {
      name: { type: DataTypes.STRING, allowNull: false },
      teacher_id: { type: DataTypes.INTEGER },
    },
    {
      schema: 'public',
      timestamps: false,
    },
  );
  Level.associate = models => {
    models.level.hasMany(models.student, {
      foreignKey: 'level_id',
      sourceKey: 'id',
    });
    models.level.belongsTo(models.teacher, {
      foreignKey: 'teacher_id',
      targetKey: 'id',
    });
  };
  return Level;
};
