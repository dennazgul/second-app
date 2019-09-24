const Sequelize = require('sequelize');

module.exports = function cardModel(sequelize) {
const Board = sequelize.define('board', {
    // attributes
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
  },
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