const express = require('express');
const router = express.Router();
const Vehicle = require('./vechicle');

router.get('/', (req, res) => {
    Vehicle.findAll()
    .then(vechicles => {
        return res.status(200).json(vechicles);
    }).catch(err => {
        res.status(204).json({msg: "Erro ao buscar veiculos", err: err.message});
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
        res.status(400).json({msg: "Erro ao criar livro", err: err.message});
    })
})

router.delete('/:id', (req, res) => {

})

module.exports = router;