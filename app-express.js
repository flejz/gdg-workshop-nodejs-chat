// Inicializa as bibliotecas para nossa aplicação Node.js
const express = require('express') // <<< NEW
const app = express() // <<< NEW
const port = 3000

// Cria o servidor
const server = require('http').createServer(app) // <<< NEW

// Define os caminhos
app.get('/', (req, res) => { // <<< NEW
  res.end('<h1>Hello Guys</h1>')
})

app.get('/gdg', (req, res) => { // <<< NEW
  res.end('<h1>Hello <i>GDG!!</i></h1><u>Sem. Tecno. Bilac</u>')
})

// Server up
server.listen(port)
