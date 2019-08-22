const Sequelize = require('sequelize');
const cardModel = require('./models/card');
const columnModel = require('./models/column');
const roleModel = require('./models/role');
const userModel = require('./models/user');
const sequelize = new Sequelize('trello', 'postgres', 'admin', {
    host: 'localhost',
    dialect: 'postgres'
});

 const Card = cardModel(sequelize);
 const Column = columnModel(sequelize);
 const Role = roleModel(sequelize);
 const User = userModel(sequelize);
 Column.hasMany(Card);
 Role.hasMany(User);

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

module.exports = {Card, Column, runSequelize};