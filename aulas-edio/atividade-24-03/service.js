 // service.js (o arquivo que centraliza tudo no server.js)
const express = require('express');
const app = express();
const userRoutes = require('./src/routes/userRoutes');

app.use(express.json());

// Centralizando as rotas
app.use('/jogos', userRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
    console.log(`Teste a rota GET em: http://localhost:${PORT}/jogos`);
});