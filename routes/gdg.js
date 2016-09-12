// Inicializa o roteador
const router = require('express').Router()

// Quando uma requisição HTTP GET no Root
router.get('/', (req, res) => {

  res.end('<h1>Hello <i>GDG!!</i></h1><u>Sem. Tecno. Bilac</u>')

  //res.redirect('http://gdgsjc.com.br/');
})

// Exporta o roteador como módulo
module.exports = router
