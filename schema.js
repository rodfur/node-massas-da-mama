const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const clienteSchema = new Schema({

    nome:  String,
    cpf: Number,
    endereco:   String,
    bairro:   String,
    cidade:   String,
    estado:   String,
    cep: Number
})

const pedidoSchema = new Schema({

    nome:  String,
    cpf: Number,
    endereco:   String,
    bairro:   String,
    cidade:   String,
    estado:   String,
    cep: Number,
    itens: [itemPedidoSchema],
    cliente: clienteSchema
})

const itemPedidoSchema = new Schema({

    id_pedido: Number,
    prato: pratoSchema,
    qtde: Number

})

const pratoSchema = new Schema({

    descricao: String
})