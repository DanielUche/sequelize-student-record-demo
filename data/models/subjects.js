'use strict';
module.exports = (sequelize, DataTypes) => {
  const Subject = sequelize.define(
    'subject',
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
  Subject.associate = models => {
    models.subject.belongsTo(models.level, {
      foreignKey: 'level_id',
      targetKey: 'id',
    });
  };
  return Subject;
};
