module.exports = function(){
  var mongoose = require('mongoose');
  var Schema   = mongoose.Schema;

  var fornecedor = new Schema({
    nome: String,
    cnpj: String,
    rasaosocial: String,
    data_cad: {type: Date, default: Date.now}
  });

  return mongoose.model('Fornecedores', fornecedor);
}