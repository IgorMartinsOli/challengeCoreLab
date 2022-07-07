const express = require('express');
const router = express.Router();
const Vehicle = require('./vechicle');
const { QueryTypes } = require('sequelize');
const Sequelize = require('sequelize');
const db = require('../database/database');

//search all registered vehicles
router.get('/', (req, res) => {
    Vehicle.findAll()
    .then(vechicles => {
        return res.status(200).json(vechicles);
    }).catch(err => {
        return res.status(204).json({msg: "Error when searching for vehicles", err: err.message});
    })
}),

//insert a new vehicle through a frontend form
router.post('/new', (req, res) => {
    const name = req.body.name;
    const brand = req.body.brand;
    const color = req.body.color;
    const year = req.body.year;
    const board = req.body.board;

    Vehicle.create({
        name: name,
        brand: brand,
        color: color,
        year: year,
        board: board,
        isFavorite: false
    }).then(sucess =>{
        return res.status(201).json({msg:"success adding book"});
    }).catch(err => {
        return res.status(400).json({msg: "Error creating vehicle", err: err.message});
    })
})

//delete a vehicle through a parameter id
router.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    if(id !== undefined || id !== null) {
        if(!isNaN(id)){
            Vehicle.destroy({
                where: {id: id}
            }).then(() => {
                return res.status(200).json({msg: "Vehicle destroyed successfully"});
            }).catch(err => {
                return res.status(410).json({msg: "Unable to delete vehicle", err: err.message});
            })
        }
    }else{
        return res.status(400).json({msg: "Error deleting vehicle, invalid id"});
    }
})

//update a vehicle through data from a frontend form
router.post('/update', (req, res) => {
    let id = req.body.id;
    let name = req.body.name;
    let brand = req.body.brand;
    let color = req.body.color;
    let year = req.body.year;
    let board = req.body.board;
    
    Vehicle.update({
        name: name,
        brand: brand,
        color: color,
        year: year,
        board: board},
        {where:{id: id}
    }).then(() => {
            return res.status(200).json({msg: "Success when updating vehicle"});
        }
    ).catch(err => {
        return res.status(400).json({msg: "Error updating vehicle", err: err.message});
    })
})

//performs a dynamic search through a data entered in the parameter
router.get('/query/:data', (req, res) => {
    let data = req.params.data;
    
    //make a query
    db.query(`select id, name, brand, color, year, isFavorite, board from vehicles where (name like "%${data}%") or (brand like "%${data}%") or (color like "%${data}%") or (year like "%${data}%")`)
    .then(results1 => {
        //filter and replace repeated values
        let values = results1.filter(function (a) {
            return !this[JSON.stringify(a)] && (this[JSON.stringify(a)] = true);
        }, Object.create(null))

        return res.status(200).json({vehicles: values});
    });
})

router.post('/favorite/:id', function (req, res) {
    let id = req.params.id;

    Vehicle.update({
        isFavorite: true
    },{where: {id: id}}
    ).then(() => {
        return res.status(200).json({msg: 'Favoritade'});
    }).catch(err => {
        return res.status(400).json({msg: err.message});
    })
})

module.exports = router;