const Sequelize = require('sequelize');

module.exports = function columnModel(sequelize) {
const Column = sequelize.define('column', {
    // attributes
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  }, {
    timestamps: false,
    // options
  });
  return Column;
}