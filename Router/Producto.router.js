const express = require('express');
const multer = require('multer');
const productoRouter = express.Router();
const controlador = require('../Controller/Producto.controller');

const DIR ='./public/';

const storage = multer.diskStorage({
    destination:(req, file, cb) =>{
        cb(null, DIR);
    },

    filename:(req, file, cb) =>{
        const filename = Date.now() + '-' + file.originalname.toLocaleLowerCase();
        cb(null, filename);
    }
});

var uploap = multer({
   storage:storage,
   limits:{
       fileSize:1024*1024*5
   },
   fileFilter:(req,file,cb) =>{
       if(file.mimetype=='image/png'){
           cb(error, true)
       }else{
           cb(error, false)
       }
   }

})


productoRouter.get("/producto",(req,res)=>{
    console.log('hola operacion GET');
    controlador.GetAllProducto(req,(respuesta)=>{
        res.status(200).send(respuesta);
    })

});

productoRouter.get("/categorias",(req,res)=>{
    console.log('hola operacion GET');
    controlador.AddCategoria(req,(respuesta)=>{
        res.status(200).send(respuesta);
    })

});

productoRouter.post("/categoria",(req,res)=>{
    console.log('hola operacion POST');
    controlador.AddCategoria(req,(respuesta)=>{
        res.status(200).send(respuesta);
    })

});

productoRouter.get("/producto/:id",(req,res)=>{
    console.log('hola operacion GET');
    controlador.GetProducto(req,(respuesta)=>{
        res.status(200).send(respuesta);
    })
    
});

productoRouter.post("/producto",uploap.fields([{name:'image',maxCount:1}]) ,(req,res)=>{
    console.log('hola operacion POST');
    controlador.addProducto(req,(respuesta)=>{
        res.status(200).send(respuesta);
    })

});

productoRouter.put("/producto/:id",uploap.fields([{name:'image',maxCount:1}]) ,(req,res)=>{
    console.log('hola operacion GET');
    controlador.UpdateProducto(req,(respuesta)=>{
        res.status(200).send(respuesta);
    })

});

productoRouter.delete("/producto/:id",(req,res)=>{
    console.log('hola operacion GET');
    controlador.DeleteProducto(req,(respuesta)=>{
        res.status(200).send(respuesta);
    })
   
});


module.exports = productoRouter;