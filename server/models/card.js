const Sequelize = require('sequelize');

module.exports = function cardModel(sequelize) {
const Card = sequelize.define('card', {
    // attributes
    value: Sequelize.STRING,
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