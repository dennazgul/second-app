const Sequelize = require('sequelize');

module.exports = function cardModel(sequelize) {
const Board = sequelize.define('board', {
    // attributes
    name: {
      type: Sequelize.STRING,
      unique: true
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    }, 
  }, {
    timestamps: false,
    // options
  });
  return Board;
}