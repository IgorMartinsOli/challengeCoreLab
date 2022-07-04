const express = require('express');
const router = express.Router();
const Vehicle = require('./vechicle');

router.get('/', (req, res) => {
    Vehicle.findAll()
    .then(vechicles => {
        return res.status(200).json(vechicles);
    }).catch(err => {
        return res.status(204).json({msg: "Error when searching for vehicles", err: err.message});
    })
}),

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
        return res.status(200).json({msg:"success adding book"});
    }).catch(err => {
        return res.status(400).json({msg: "Error creating vehicle", err: err.message});
    })
})

router.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    if(id !== undefined || id !== null) {
        if(!isNaN(id)){
            Vehicle.destroy({
                where: {id: id}
            }).then(() => {
                return res.status(200).json({msg: "Vehicle destroyed successfully"});
            }).catch(err => {
                return res.status(400).json({msg: "Unable to delete vehicle", err: err.message});
            })
        }
    }else{
        return res.status(400).json({msg: "Error deleting vehicle, invalid id"});
    }
})

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
            return res.status(200).json({msg: "Success when updating vehicle"})
        }
    ).catch(err => {
        return res.status(400).json({msg: "Error updating vehicle", err: err.message});
    })
})

module.exports = router;