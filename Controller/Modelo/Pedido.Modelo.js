const mongoose = require ('mongoose')
const Schema = mongoose.Schema;
let Pedido = new Schema ({

    Create_at : {type :Date,require:true,defaul:Date.now},
    Total : Number,
    IdCliente : {type :Schema.ObjectId, ref:'Cliente' },
    Productos :[{
    IdProducto: {  type :Schema.ObjectId, ref:'Producto' },
    Cantidad: Number
    }]
},
    {
        collation: 'Pedidos'
});

module.exports = mongoose.model('Pedido', Pedido);