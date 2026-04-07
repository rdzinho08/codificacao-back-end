 const express = require('express');
const router = express.Router();
const userService = require('../service/userService'); // <--- Confira se o caminho está certo!

router.get('/', (req, res) => {
    const users = userService.getUsers();
    res.json(users);
});

router.post('/', (req, res) => {
    const user = userService.createUser(req.body);
    res.status(201).json(user);
});

// ESTA LINHA ABAIXO É A QUE RESOLVE O ERRO:
module.exports = router;