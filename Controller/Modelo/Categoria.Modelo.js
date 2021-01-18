const mongoose = require ('mongoose')
const Schema = mongoose.Schema;
let Categoria = new Schema ({
    Nombre : {type :String},
},
    {
        collation: 'Categorias'
});

module.exports = mongoose.model('categoria', Categoria);
