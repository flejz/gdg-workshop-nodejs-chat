// Inicializa as bibliotecas para nossa aplicação Node.js
const express = require('express')
const app = express()
const port = 3000

// Cria o servidor
const server = require('http').createServer(app)

// Cria o web socket
const io = require('socket.io')(server)

//Importa módulo de rotas
const home = require('./routes/home')
const gdg = require('./routes/gdg')
const chat = require('./routes/chat')

// Definindo as rotas
app.use('/', home)
app.use('/gdg', gdg)
app.use('/chat', chat)

// Caminhos estáticos
app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/bower_components'))

// Informa qual o compilador de html o node.js vai usar
// bem como o caminho da pasta dos arquivos
app.set('view engine', 'jade')
app.set('views', './views')

// Quando receber uma conexão, executa o trecho de código abaixo
io.on('connection', (socket) => {

  console.log('Someone is connected.')

  // Se a mensagem for do identificador "message"
  socket.on('message', (username, message, color) => { // <<< NEW

    console.log("Hey, we've got a new message from:", username)

    socket.broadcast.emit('message', username, message, color)
  });

});

server.listen(3000)
