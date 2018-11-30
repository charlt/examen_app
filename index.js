'use strict'
var mongoose = require("mongoose");

var app= require("./app.js");

var port= process.env.PORT || 3977;
var ejs = require('ejs');
//cargar rutas
app.set('view engine', 'ejs');
mongoose.connect('mongodb://localhost:27017/app',(err, res)=>{
    if(err){
        throw err;   
    }else{
        console.log("la app esta corriendo correctamente");
        app.listen(port, function(){
            console.log("Servidor corriendo en: localhost:"+port);
        })
    }
});
