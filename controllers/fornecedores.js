var moment = require('moment');

module.exports = function(app){

	var Fornecedor = app.models.fornecedores;

	var FornecedorController = {
		index: function(req,res){
			Fornecedor.find(function(err, data){
				if (err){
					console.log(err);
				}
				res.render("fornecedores/index", {lista: data, moment: moment});
			});
		},

		create: function(req,res){
			res.render("fornecedores/create");
		},

		insert: function(req,res){
			var model = new Fornecedor(req.body);
			model.save(function(err){
				if(err){
					console.log(err);
				}
				req.flash('info','Fornecedor cadastrado com sucesso!');
				res.redirect('/fornecedores');
			});
		},

		edit: function(req,res){
			Fornecedor.findById(req.params.id, function(err, data){
				if(err){
					console.log(err);
				}else{
						res.render('fornecedores/edit', {value: data});
				}
			});
		},

		update: function(req,res){
			Fornecedor.findById(req.params.id, function(err, data){
				if(err){
					console.log(err);
				}else{
						var model   = data;
						model.nome  = req.body.nome;
						model.cnpj = req.body.cpnj;
						model.rasaosocial = req.body.rasaosocial;
						model.save(function(err){
							if(err){
								console.log(err);
							}else{
								req.flash('info', 'Fornecedor atualizado com sucesso!');
							  res.redirect('/fornecedores');
							}
						});
				}
			});
		},

		show: function(req,res){
			Fornecedor.findById(req.params.id, function(err, data){
				if(err){
					console.log(err);
				}else{
						res.render('fornecedores/show', {value: data});
				}
			});
		},

		remove: function(req,res){
			Fornecedor.remove({_id: req.params.id}, function(err){
				if (err){
					console.log(err);
				}else{
					req.flash('info', 'Fornecedor excluído com sucesso!');
					res.redirect('/fornecedores');
				}
			});
		}
	}

	return FornecedorController;
}
