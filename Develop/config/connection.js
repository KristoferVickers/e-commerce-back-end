require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    dialect: 'mysql',  
    host: 'localhost',
    username: 'root',
    password: 'Combat99!',
    database: 'ecommerce_db',
    });

module.exports = sequelize;
