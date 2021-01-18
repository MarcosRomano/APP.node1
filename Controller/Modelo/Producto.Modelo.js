const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

let Producto = new Schema({
    Nombre : {type :String},
    Detalle : {type :String},
    Precio : {type :Number},
    Imagen : {type :String},
    IdUsuario : { type: mongoose.Schema.Types.ObjectId, ref:'Usuario'},
    IdCategoria : {type : mongoose.Schema.Types.ObjectId, ref:'Categoria'}
    

},
    {
        collation: 'Productos'
});

module.exports = mongoose.model('Producto', Producto);
