const Sequelize = require('sequelize');

module.exports = function cardModel(sequelize) {
const Card = sequelize.define('card', {
    // attributes
    value: Sequelize.STRING,
    creatorId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    }, 
    columnId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    }, 
  }, {
    timestamps: false,
    // options
  });
  return Card;
}