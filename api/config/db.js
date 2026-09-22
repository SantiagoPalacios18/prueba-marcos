const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ex', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});

module.exports = {
    sequelize
}