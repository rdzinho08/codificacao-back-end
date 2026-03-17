 const express = require('express');
const frutaRoutes = require('./routes/frutas');

const app = express();
app.use(express.json());

// Conecta as rotas
app.use('/frutas', frutaRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});