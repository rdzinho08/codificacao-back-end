import express from 'express'

const routes = express.Router()

routes.get("/",(req,res)=>{
    const data = fruitService.getAll()
})

//80
