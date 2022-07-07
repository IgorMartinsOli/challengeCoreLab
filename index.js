var express = require('express');
var app = express();
var connection = require('./database/database');
var Vehicle = require('./Vehicle/vechicle');
var vechicleController = require('./Vehicle/vehicleController');
var bodyParser = require('body-parser')
var cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

connection
    .authenticate()
    .then(() => {
        console.log('Conexão com bd sucess');
    }).catch(err => {
        console.log(err);
    })

app.use('/vehicles', vechicleController);

app.use(function (req, res, next){
    let err = new Error("Not Found");
    err.status = 404;
    next(err);
});

app.use(function (err, req, res, next){
    return res.status(err.status || 500)
    .json({error: err.message || "INTERNAL ERROR"});
});

app.listen(3001, () => {
    console.log('listening on 3001');
}); 

module.exports = app;