const fs = require('fs');

const DATABASE_URL = process.env.DATABASE_URL;

module.exports = {
  development: {
    DATABASE_URL,
    // username: '',
    // password: 'database_dev',
    // database: 'database_dev',
    // host: '127.0.0.1',
    dialect: 'mysql',
  },
  test: {
    DATABASE_URL,
    dialect: 'mysql',
  },
  production: {
    url: '',
    DATABASE_URL,
    // username: process.env.DB_USERNAME,
    // password: process.env.DB_PASSWORD,
    // database: process.env.DB_NAME,
    // host: process.env.DB_HOSTNAME,
    dialect: 'mysql',
  },
};
