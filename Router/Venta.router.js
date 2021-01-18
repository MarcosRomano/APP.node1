const express = require('express');
const ventaRouter = express.Router();
const controlador =require('../Controller/Venta.Controller')

ventaRouter.get("/estado",(req,res)=>{
    controlador.findEstados(req,(resultado)=>{
        res.send(resultado);
    })
});

ventaRouter.post("/estado",(req,res)=>{
    controlador.addEstado(req,(resultado)=>{
        res.send(resultado);
    })
});

ventaRouter.post("/cliente",(req,res)=>{
    controlador.addCliente(req,(resultado)=>{
        res.send(resultado);
    })
});

module.exports = ventaRouter;