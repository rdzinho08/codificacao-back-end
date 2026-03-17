  const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para processar JSON
app.use(express.json());

// Rota de teste inicial
app.get('/', (req, res) => {
  res.status(200).send({ message: 'API configurada e rodando com sucesso!' });
});

// Inicialização do servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});