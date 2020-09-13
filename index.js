const { json } = require('express');
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors') // essa biblioteca serve para gerenciar quais outros dominios podem acessar minha API
const requireDir = require('require-dir')

//-- Iniciando o app
const app = express();
app.use(express.json())
app.use(cors()) // Aqui pode ser configurado a segurança e os dominios perrmitidos

//-- iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useUnifiedTopology: true })

//--Importando models
    //- O require dir é uma biblioteca para importa pasta em um arquivo
requireDir('./src/models')

//--Rotas
app.use('/api', require('./src/routes'))

app.listen(8080)