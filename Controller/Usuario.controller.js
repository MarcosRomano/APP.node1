const mongoose = require('mongoose');

let modeloUsuario = require ('../Controller/Modelo/Usuario.Modelo');

exports.addUsuarios = (req, callback)=>{
    let request ={};
    request._id= mongoose.Types.ObjectId();
    request.Nombre=req.body.Nombre;
    request.Apellido=req.body.Apellido;
    request.Usuario=req.body.Usuario;
    request.Edad=req.body.Edad;
    request.Enable=true;

    const nuevoObjeto = new modeloUsuario(request);
    nuevoObjeto.save().then(resultado => {
        callback(resultado);
    }).catch(
        error =>{
        callback(error);
        }
      );
};
exports.getAllUsuarios = (req, callback)=>{
    modeloUsuario.find({}).exec((error,respuesta)=> {
        if (error) callback (error);
        callback(respuesta);
    });
};
exports.UpdateUsuario = (req, callback)=>{
    modeloUsuario.find({}).exec((error,respuesta)=> {

    respuesta.Nombre=req.body.Nombre;
    respuesta.Apellido=req.body.Apellido;
    respuesta.Usuario=req.body.Usuario;
    respuesta.Edad=req.body.Edad;
    respuesta.Enable=true;
    respuesta.save().then(respuesta =>{
         callback (respuesta); 
    }).catch (error => {
        callback(error);
    })
       
    });
};
exports.getUsuario = (req, callback)=>{
    modeloUsuario.find({}).exec(
        (error , respuesta)=>{
            if (error) callback(error);
            callback(respuesta);
        }
    );
};

exports.DeleteUsuario = (req, callback)=> {
    modeloUsuario.findByIdAndRemove(req.params.id).exec(
        (error , respuesta)=>{
            if (error) callback(error);
            callback(respuesta);
        }
    );
};


