import express from 'express'
import fruitRoutes from './routes/fruitRoutes.js'

const app = express()
const port = 3000

// Middleware para ler JSON no corpo da requisição
app.use(express.json())

// Rotas principais
app.use("/fruits", fruitRoutes)

app.listen(port, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${port}`)
})