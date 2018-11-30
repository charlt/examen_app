//contiene toda la logica del servidor local, rutas...
'use strict'

var express= require("express");
var bodyparser=require('body-parser');
var app= express();
var ejs = require('ejs');

//CONFIGURACIÓN DE USO DE FRAMEWORK

app.use('/public', express.static('./public'));
app.use('/angular', express.static('./controller-angular-c'));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

var gral_routes=require('./routes/general/index');
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

// configruar cabeceras 
app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Authorization,X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-method");
    res.header("Access-Control-Allow-Methods","GET, POST, OPTIONS, PUT, DELETE")
    res.header("ALlow","GET, POST, OPTIONS, PUT, DELETE");
    next();
})
//rutas base

app.use('/', gral_routes);
module.exports = app;