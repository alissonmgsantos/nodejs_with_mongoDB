const express = require('express');
const mongoose = require('mongoose');

// Iniciando o app
const app = express();

// Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });

require('./src/models/Product');

// Rotas
app.use('/api', require('./src/routes/routes'));

app.listen(3000);