const express = require('express');
const app = express();
const connection = require('./database/database');

connection
    .authenticate()
    .then(() => {
        console.log('Conexão com bd sucess');
    }).catch(err => {
        console.log(err);
    })

app.listen(8008, () => {
        console.log('listening on 8008');
});