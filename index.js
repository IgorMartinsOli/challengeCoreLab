const express = require('express');
const app = express();
const connection = require('./database/database');
const Vehicle = require('./Vehicle/vechicle');
const vechicleController = require('./Vehicle/vehicleController');

connection
    .authenticate()
    .then(() => {
        console.log('Conexão com bd sucess');
    }).catch(err => {
        console.log(err);
    })

app.use('/', vechicleController);

app.listen(8008, () => {
        console.log('listening on 8008');
});