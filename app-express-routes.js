// Inicializa as bibliotecas para nossa aplicação Node.js
const express = require('express')
const app = express()
const port = 3000

// Cria o servidor
const server = require('http').createServer(app)

//Importa módulo de rotas
const home = require('./routes/home') // <<< NEW
const gdg = require('./routes/gdg') // <<< NEW

// Definindo as rotas
app.use('/', home) // <<< NEW
app.use('/gdg', gdg) // <<< NEW

server.listen(3000)
