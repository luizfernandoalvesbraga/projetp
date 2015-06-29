module.exports = function(app) {
	var calculadora = app.controllers.calculadora;
	
	app.get('/', calculadora.get.index);
	app.get('/somar', calculadora.get.somar);
	app.get('/subtrair', calculadora.get.subtrair);
	app.get('/multiplicar', calculadora.get.multiplicar);
	app.get('/dividir', calculadora.get.dividir);
	
	app.post('/calcular', calculadora.post.calcular);
};