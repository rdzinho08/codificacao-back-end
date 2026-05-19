 import express from 'express';
import dotenv from 'dotenv';
import SampleRouter from './routes/filmes.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(SampleRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});