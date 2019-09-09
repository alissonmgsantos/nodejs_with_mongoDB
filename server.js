const express = require('express');
const mongoose = require('mongoose');

// Iniciando o app
const app = express();

// Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });

require('./src/models/Product');

const Product = mongoose.model('Product');

// Primeira rota
app.get('/', (req, res) => {
    Product.create({
        title: 'Mongo',
        description: 'MongoDB'
    });
    return res.send('OK');
});

app.listen(3000);