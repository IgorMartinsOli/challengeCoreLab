var express = require('express');
var app = express();
var connection = require('./database/database');
var Vehicle = require('./Vehicle/vechicle');
var vechicleController = require('./Vehicle/vehicleController');
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json());

connection
    .authenticate()
    .then(() => {
        console.log('Conexão com bd sucess');
    }).catch(err => {
        console.log(err);
    })

app.use('/vehicles', vechicleController);

app.listen(3000, () => {
        console.log('listening on 3000');
});