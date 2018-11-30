'use strict'
//var Empresa = require('../models/empresas');

var router = require('express').Router();

router.get('/', (req, res) => {

    res.render('index')
});



module.exports = router