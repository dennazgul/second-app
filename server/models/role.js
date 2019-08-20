const Sequelize = require('sequelize');

module.exports = function cardModel(sequelize) {
const Role = sequelize.define('role', {
    // attributes
    name:  Sequelize.STRING
  }, {
    timestamps: false,
    // options
  });
  return Role;
}