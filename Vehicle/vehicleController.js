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

router.get('/new', (req, res) => {
    const name = req.params.name;
    const brand = req.params.brand;
    const color = req.params.color;
    const year = req.params.year;
    const board = req.params.board;

    Vehicle.create({
        name: name,
        brand: brand,
        color: color,
        year: year,
        board: board,
        isFavorite: false
    }).then(sucess =>{
        return res.status(200).json(sucess);
    }).catch(err => {
        res.status(400).json({msg: "Erro ao criar livro", err: err.message});
    })
})

module.exports = router;