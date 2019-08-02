'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config');
const db = {};

let sequelize = new Sequelize(config[env].url, {
  dialect: 'postgres',
  protocol: 'postgres',
  ssl: true,
});

fs.readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    );
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
// OPTIONAL ITS JUST FOR TEST PURPOSE
// db.testConnection = () => {
//   sequelize
//     .authenticate()
//     .then(function() {
//       console.log('CONNECTED! ');
//     })
//     .catch(function(err) {
//       console.log('SOMETHING DONE GOOFED');
//     })
//     .done();
// };
// -- END --

module.exports = db;
