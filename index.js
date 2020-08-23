const express = require('express')

const app = express()

app.get("/cliente/:cpf", function (req, res) {

  const cpf = req.params.cpf;

  res.send(cpf)
})

app.post("/pedido", function (req, res) {

  const data = req.body.Pedido;

})

app.post("/prato", function (req, res) {

})

app.get("/", function (req, res) {

  res.send('tá no ar')
})

app.listen(3000)

