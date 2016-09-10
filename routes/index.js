// Inicializa o roteador
const router = require('express').Router()

// Quando uma requisição HTTP GET no Root
router.get('/', (request, response) => {
  response.render('index')
})

// Exporta o roteador como módulo
module.exports = router
