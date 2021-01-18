const {request} = require("express");
const mongoose = require('mongoose');
let cliente = require('../Controller/Modelo/Cliente.Modelo')
let estado = require('../Controller/Modelo/Estado.Modelo')
let pedido = require('../Controller/Modelo/Pedido.Modelo')

exports.nombrefuncion = (req, callback)=>{};

exports.findEstados = (req, callback)=>{
    estado.find({}).exec((error, respuesta)=>{
        if(error)callback(error);
        callback(respuesta);

    });
};

exports.addEstados = (req, callback)=>{
   let request={};
   request.Descripcion = req.body.Descripcion;

   const nuevoObjeto = new estado(request);
    nuevoObjeto.save().then(respuesta => {
        callback(respuesta);
    }).catch(
        error =>{
        callback(error);
        }
      );

};

exports.addCliente = (req, callback)=>{
    let request = {};
    request.Nombre=req.body.Nombre;
    request.Apellido=req.body.Apellido;
    request.Telefono=req.body.Telefono;
    request.Direccion=req.body.Direccion;

    const nuevoObjeto = new cliente(request);
    nuevoObjeto.save().then(respuesta => {
        callback(respuesta);
    }).catch(
        error =>{
        callback(error);
        }
      );

};
// agregar pedidos
exports.addPedido = (req, callback)=>{
    let request = {};
    request.Total = req.body.Total;
    request.IdCliente = req.body.IdCliente;
    request.Productos = req.body.Productos;
    

    const nuevoObjeto = new pedido(request);
    nuevoObjeto.save().then(respuesta => {
        callback(respuesta);
    }).catch(
        error =>{
        callback(error);
        }
      );
    };

//listar pedidos
      exports.findPedidos = (req, callback)=>{
        pedido.find({}).exec((error, respuesta)=>{
            if(error)callback(error);
            callback(respuesta);
    
        });  
    };

//obtener pedido
    exports.getPedido = (req, callback)=>{
        pedido.findById(req.params.id).exec((error, respuesta)=>{
            if(error)callback(error);
            callback(respuesta);
    
        });  
    };
// editar el pedido
    exports.UpdatePedido = (req, callback)=>{
        pedido.findById(req.params.id).exec((error, objetobuscado)=> {
    
            objetobuscado.Total=req.body.Total;
            objetobuscado.IdCliente=req.body.IdCliente;
            objetobuscado.Productos=req.body.Productos;
            
    
            objetobuscado.save().then(respuesta => {
                callback(respuesta);
            }).catch(
                error =>{
                callback(error);
                }
              );
        });
    };
