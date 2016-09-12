// Inicializa as bibliotecas para nossa aplicação Node.js
const express = require('express')
const app = express()
const port = 3000

// Cria o servidor
const server = require('http').createServer(app)

//Importa módulo de rotas
const home = require('./routes/home')
const gdg = require('./routes/gdg')
const chat = require('./routes/chat')

// Definindo as rotas
app.use('/', home)
app.use('/gdg', gdg)
app.use('/chat', chat)

// Caminhos estáticos
app.use(express.static(__dirname + '/public')) // <<< NEW
app.use(express.static(__dirname + '/bower_components')) // <<< NEW

// Informa qual o compilador de html o node.js vai usar
// bem como o caminho da pasta dos arquivos
app.set('view engine', 'jade')
app.set('views', './views')

server.listen(3000)
