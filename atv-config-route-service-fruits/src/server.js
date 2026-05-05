 import express from 'express'
import 'dotenv/config'
import { frutasRoute } from './routes/frutas.route.js'

const app = express()

// Se houver uma porta no .env, ele usa. Se não, usa a 5000.
const PORT = process.env.PORT || 5000 

app.use(express.json())

app.get("/", (req, res) => {
    return res.json("Hello World!")
})

app.use("/frutas", frutasRoute)

// USAMOS A VARIÁVEL PORT AQUI
app.listen(PORT, () => {
    console.log(`API rodando em http://localhost:${PORT}`);
})
