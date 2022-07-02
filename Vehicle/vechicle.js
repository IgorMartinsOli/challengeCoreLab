const Sequelize = require('sequelize');
const connection = require('../database/database');

const Vehicle = connection.define('vehicle', {
    name: {type: Sequelize.STRING(60), allowNull: true},
    brand: {type: Sequelize.STRING(60), allowNull: true},
    color: {type: Sequelize.STRING(30), allowNull: true},
    year: {type: Sequelize.INTEGER, allowNull: true},
    board: {type: Sequelize.STRING(7), allowNull: true},
    isFavorite: {type: Sequelize.BOOLEAN, allowNull: true},
});


//Vehicle.sync({force: true});

module.exports = Vehicle;