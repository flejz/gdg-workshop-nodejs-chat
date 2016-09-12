// Inicializa o roteador
const router = require('express').Router()

// Quando uma requisição HTTP GET no Root
router.get('/', (req, res) => {

  res.render('chat')
})

// Exporta o roteador como módulo
module.exports = router
