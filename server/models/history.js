const Sequelize = require('sequelize');

module.exports = function historyModel(sequelize) {
const History = sequelize.define('history', {
    // attributes
    messageCode: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    userName: {
      type: Sequelize.STRING,
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
 return History;
}