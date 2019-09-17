const Sequelize = require('sequelize');
const cardModel = require('./models/card');
const columnModel = require('./models/column');
const userModel = require('./models/user');
const boardModel = require('./models/board');
const boardOwnerModel = require('./models/boardOwner');
const sequelize = new Sequelize('trello', 'postgres', 'admin', {
    host: 'localhost',
    dialect: 'postgres'
});

 const Card = cardModel(sequelize);
 const Column = columnModel(sequelize);
 const User = userModel(sequelize);
 const Board = boardModel(sequelize);
 const BoardOwner = boardOwnerModel(sequelize);
 Column.hasMany(Card);
 Board.hasMany(Column);
 User.belongsToMany(Board, {through: BoardOwner});
 Board.belongsToMany(User, {through: BoardOwner});

function runSequelize() {
        sequelize.authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
            sequelize.sync({force:false});
            })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });

}

module.exports = {Card, Column, Board, User, BoardOwner, runSequelize};