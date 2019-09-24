const Sequelize = require('sequelize');

module.exports = function boardOwnerModel(sequelize) {
const BoardOwner = sequelize.define('boardOwner', {
    // attributes
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
  },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    boardId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  }, {
    timestamps: false,
    // options
  });
  return BoardOwner;
}