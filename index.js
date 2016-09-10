// Inicializa as bibliotecas para nossa aplicação Node.js
const express = require('express')
const app = express();
const server = require('http').createServer(app)
const io = require('socket.io')(server) // <<< Conector WEB SOCKET
const port = 3000;

//Importa nosso módulo
const index = require('./routes/index')

// Informa ao Express que vai acessar a pasta pública de forma estática
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/bower_components'));

// Informando onde vão estar nossos arquivos HTML
app.set('view engine', 'jade')
app.set('views', './views')

// Definindo as rotas
app.use('/', index)

// Quando receber uma conexão, executa o trecho de código abaixo
io.on('connection', (socket) => {

  console.log('Someone is connected.');

  // Se a mensagem for do identificador "message"
  socket.on('message', (username, message, color) => {

    console.log("Hey, we've got a new message from:", username);

    socket.broadcast.emit('message', username, message, color)
  });

})

server.listen(3000)
