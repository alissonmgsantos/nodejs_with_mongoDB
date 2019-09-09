// Importando express e auto invocando
const express = require('express')();
const mongoose = require('mongoose');

const bodyParser = require('body-parser')

express.use(bodyParser.urlencoded({ extended: true }))
express.use(bodyParser.json())

// Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });

require('./src/models/Product');

// Rotas
express.use('/api', require('./src/routes/routes'));
express.listen(3000);