 const express = require('express');
const router = express.Router(); 

const frutas = [
    { id: 1, nome: 'Maçã', cor: 'Vermelha' },
    { id: 2, nome: 'Banana', cor: 'Amarela' },
    { id: 3, nome: 'Uva', cor: 'Roxa' },
];


router.get('/', (req, res) => {
    res.json(frutas);
});


router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const fruta = frutas.find(f => f.id === id);
    if (!fruta) return res.status(404).json({ mensagem: 'Fruta não encontrada' });
    res.json(fruta);
});

module.exports = router; 