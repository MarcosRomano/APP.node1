const express = require('express');
const usuarioRouter = express.Router();
const controlador =require('../Controller/Usuario.controller')

usuarioRouter.get("/usuario",(req,res)=>{
    controlador.getAllUsuarios(req,(resultado)=>{
        res.status(200).send(resultado);
    })
});

usuarioRouter.get("/usuario/:id",(req,res)=>{
    controlador.getUsuario(req,(resultado)=>{
        res.status(200).send(resultado);
    })
});

usuarioRouter.post("/usuario",(req,res)=>{
    controlador.addUsuarios(req,(resultado)=>{
        res.status(200).send(resultado);
    })
});

usuarioRouter.put("/usuario/:id",(req,res)=>{
    controlador.UpdateUsuario(req,(resultado)=>{
        res.status(200).send(resultado);
    })

});

usuarioRouter.delete("/usuario/:id",(req,res)=>{
    controlador.DeleteUsuario(req, (resultado)=>{
        res.send(respuesta);
    });    
});


module.exports = usuarioRouter;