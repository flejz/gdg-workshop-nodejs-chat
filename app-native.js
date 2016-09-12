// Declaração das variáveis
const http = require('http')
const port = 3000

// Cria o servidor
const server = http.createServer((req, res) => {

  // Verifica o caminho relativo da url
  if (req.url == '/')
    res.end('<h1>Hello Guys</h1>')

  //else if (req.url == '/gdg')
  //  res.end('<h1>Hello <i>GDG!!</i></h1><u>Sem. Tecno. Bilac</u>')

})

// Server up
server.listen(port)
