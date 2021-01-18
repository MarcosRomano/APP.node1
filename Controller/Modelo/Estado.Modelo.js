const mongoose = require ('mongoose')
const Schema = mongoose.Schema;
let Estado = new Schema ({
    Descripcion : {type :String},
   
},
    {
        collation: 'Estados'
});

module.exports = mongoose.model('Estado', Estado);