 import { Router } from 'express'
import { frutasService } from '../services/frutas.service.js'

export const frutasRoute = Router()

frutasRoute.get("/", async (req, res) => {
    const frutas = await frutasService.getAll()
    res.json(frutas)
})

frutasRoute.get("/:id", async (req, res) => {
    const id = req.params.id
    const fruta = await frutasService.getById(id)
    res.json(fruta)
})

frutasRoute.post("/", async (req, res) => {
    const fruta = req.body
    const novaFruta = await frutasService.create(fruta)
    res.json(novaFruta)
})

frutasRoute.put("/:id", async (req, res) => {
    const id = req.params.id
    const fruta = req.body
    const frutaAtualizada = await frutasService.update(id, fruta)
    res.json(frutaAtualizada)
})

frutasRoute.patch("/:id", async (req, res) => {
    const id = req.params.id
    const fruta = req.body
    const frutaAtualizada = await frutasService.partialUpdate(id, fruta)
    res.json(frutaAtualizada)
})

frutasRoute.delete("/:id", async (req, res) => {
    const id = req.params.id
    await frutasService.delete(id)
    res.status(204).end()
})