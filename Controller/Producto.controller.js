
const {request} = require("express");
const mongoose = require('mongoose');
let modeloProducto = require('../Controller/Modelo/Producto.Modelo')
let modeloCategoria = require ('../Controller/Modelo/Categoria.Modelo')

exports.addProducto = (req, callback)=>{
    let request ={};
    request.Nombre=req.body.Nombre;
    request.Detalle=req.body.Detalle;
    request.Precio=req.body.Precio;
    request.Imagen=req.body.Imagen;
    request.idUsuario=req.body.idUsuario;
    request.IdCategoria=req.body.IdCategoria;

    const nuevoObjeto = new modeloProducto(request);
    nuevoObjeto.save().then(respuesta => {
        callback(respuesta);
    }).catch(
        error =>{
        callback(error);
        }
      );
};
exports.GetAllProducto = (req, callback)=>{
    modeloProducto.find({}).exec((error, respuesta)=> {
        if (error) callback ({codigo:001, error:error});
        callback(respuesta); 
    });
};
exports.UpdateProducto = (req, callback)=>{
    modeloProducto.findById(req.params.id).exec((error, objetobuscado)=> {

        objetobuscado.Nombre=req.body.Nombre;
        objetobuscado.Detalle=req.body.Detalle;
        objetobuscado.Precio=req.body.Precio;
        objetobuscado.Imagen=req.body.Imagen;
        objetobuscado.idUsuario=req.body.idUsuario;
        objetobuscado.IdCategoria=req.body.IdCategoria;

        objetobuscado.save().then(respuesta => {
            callback(respuesta);
        }).catch(
            error =>{
            callback(error);
            }
          );
    });
};

exports.GetProducto = (req, callback)=>{
    modeloProducto.findById(req.params.id).exec((error, respuesta)=> {
        if (error) callback ({codigo:001, error:error});
        callback(respuesta); 
    });
};

exports.DeleteProducto = (req, callback)=>{
    modeloProducto.findByIdAndRemove(req.params.id).exec((error, respuesta)=> {
        if (error) callback ({codigo:001, error:error});
        callback(respuesta); 
    });
};

exports.GetCategoria = (req, callback)=>{
    modeloCategoria.find({}).exec(
        (error , respuesta)=>{
            if (error) callback(error);
            callback(respuesta);
        }
    );
};

exports.AddCategoria = (req, callback)=>{
    let request = {};
    request._id = new mongoose.Types.ObjectId();
    request.Nombre = req.body.Nombre; 

    const nuevoObjeto = new modeloCategoria(request);
    nuevoObjeto.save().then(resultado => {
        callback(resultado);
    }).catch(
        error =>{
        callback(error);
        }
      );
    };

