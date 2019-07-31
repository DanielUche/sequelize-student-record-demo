'use strict';
module.exports = (sequelize, DataTypes) => {
  const Subject = sequelize.define(
    'subject',
    {
      name: { type: DataTypes.STRING, allowNull: false },
    },
    {
      schema: 'public',
      timestamps: false,
    },
  );
  return Subject;
};
