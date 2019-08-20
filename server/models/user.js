const Sequelize = require('sequelize');

module.exports = function cardModel(sequelize) {
const User = sequelize.define('user', {
    // attributes
    name: {
      type: Sequelize.STRING,
      unique: true
    },
    roleId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    }, 
  }, {
    timestamps: false,
    // options
  });
  return User;
}