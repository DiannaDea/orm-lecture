/* eslint-disable no-console */
const Sequelize = require('sequelize');

const sequelize = new Sequelize('testapp', 'root', 'helloworld', {
  host: 'localhost',
  port: 3308,
  dialect: 'mysql',
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
