const express = require('express')
const router = express.Router()

const { Product } = require('../models')

router.get('/',(req,res)=>{
    Product.findAll()
    .then(result => res.send(result))
})

router.get('/:id', (req,res)=>{
    const id = req.params.id
    Product.findByPk(id)
    .then(result => res.send(result))
})

router.post('/', (req,res)=>{
    const producto = req.body
    Product.create(producto)
    .then(result => res.status(201).send(result))
})

router.put('/:id', (req,res)=>{
    //Me genera dudas esta ruta, Funciona el edit, pero depende de como configuran el front, no necesitamos pasarle el id para que reconozca al admin y pueda editar.
    Product.update(req.body,{where:{
        id:req.params.id
      },returning:true})
      .then((([e,product])=>res.status(201).send(product)))
})

router.delete('/:id',(req,res)=>{
    Product.destroy({where:{
        id: req.params.id
    }})
    .then(()=>res.sendStatus(204))
})

module.exports = router;