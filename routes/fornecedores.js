module.exports = function(app){
	var fornecedores = app.controllers.fornecedores;

	app.get('/fornecedores', fornecedores.index);
	app.get('/fornecedores/create', fornecedores.create);
	app.post('/fornecedores', fornecedores.insert);
	app.get('/fornecedores/edit/:id', fornecedores.edit);
	app.put('/fornecedores/edit/:id', fornecedores.update);
	app.get('/fornecedores/show/:id', fornecedores.show);
	app.delete('/fornecedores/delete/:id', fornecedores.remove);
}
