const mongoose = require ('mongoose')
const Schema = mongoose.Schema;
let Cliente = new Schema ({
    Nombre : {type :String},
    Apellido : {type :String},
    Direccion : {type :String},
    Telefono : {type :String}
},
    {
        collation: 'Clientes'
});

module.exports = mongoose.model('Cliente', Cliente);