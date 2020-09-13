const { json } = require('express');
const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

//-- Iniciando o app
const app = express();

//-- iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi')

//--Importando models
    //- O require dir é uma biblioteca para importa pasta em um arquivo
requireDir('./src/models')

//--Rotas
app.use('/api', require('./src/routes'))

app.listen(8080)