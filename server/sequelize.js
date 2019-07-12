const Sequelize = require('sequelize');

const sequelize = new Sequelize('trello', 'postgres', 'admin', {
    host: 'localhost',
    dialect: 'postgres'
});

 module.exports = function runSequelize() {
    sequelize
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });

}