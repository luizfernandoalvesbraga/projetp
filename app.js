var express    = require('express');
var app        = express();
var path       = require('path');
var http       = require('http');
var port       = process.env.PORT || 3000;
var load       = require('express-load');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/waibtec-master', function(err){
    if (err){
        console.log('Erro ao conectar no mongodb: '+err);
    }
});

load('controllers')
	.then('routes')
	.into(app);

app.start = function() {
	server = http.createServer(app);
	server.listen(port, function() {
		console.log('Aplicação iniciada na porta ' + port + '.');
	});
};

app.stop = function() {
	server.close();
	console.log('Aplicação finalizada.');
};

module.exports = app;