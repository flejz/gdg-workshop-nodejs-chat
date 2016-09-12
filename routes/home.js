// Inicializa o roteador
const router = require('express').Router()

// Quando uma requisição HTTP GET no Root
router.get('/', (req, res) => {

  res.end('<h1>Hello Guys</h1>')

  //res.render('home')
})

// Exporta o roteador como módulo
module.exports = router
