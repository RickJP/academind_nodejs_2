const Sequelize = require('sequelize');

const sequelize = new Sequelize('academind_nodejs', 'root', 'apache2k', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;