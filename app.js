const express = require("express");
const bodyparser = require("body-parser");
const methodoverride = require("method-override");
const app= express();

const configuracion = require('./configuracion');
const mongoose = require('mongoose');

mongoose.connect(configuracion.basedatos, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(resultado => {
    console.log('conectado a base de datos');
}
).catch(error =>{
    console.log('error' + error );
});



const router = express.Router();

app.use(bodyparser.urlencoded({extended:false}));

app.use(bodyparser.json());

app.use(methodoverride());

app.use('/public', express.static(__dirname + '/public'));

app.listen(3000, ()=>{
    console.log('Servicio Funcionando');
});

const productoRouter = require('./Router/Producto.router')
const usuarioRouter = require('./Router/Usuario.router')
const ventaRouter = require('./Router/Venta.router')

app.use('/api/',productoRouter);
app.use('/api/',usuarioRouter);
app.use('/api/',ventaRouter);
