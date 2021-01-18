const mongoose=require ('mongoose');
const Schema =mongoose.Schema;

let usuario = new Schema({
    Nombre : {type :String},
    Apellido : {type :String},
    Edad : {type :String},
    Usuario : {type :String},
    Password : {type :Boolean},
    Enable : {type :String},
},
  {
      collation:'Usuarios'
});

module.exports = mongoose.model('Usuario', usuario)