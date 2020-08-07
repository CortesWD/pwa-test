var express = require('express'),
	app     = express(),
    router  = express.Router(),
    bodyParser = require('body-parser'),
    http = require('http'),
    port = 5000;

app.listen(process.env.PORT || port );
//View engine
app.use(router);
app.use(express.static(__dirname + '/publication'));

// Add POST, PUT, DELETE methods to the app
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json({ type: 'application/*+json' }));

//Rutas para visualizar //

router.get('/', function (req, res, next) {
	 res.sendFile(__dirname + '/publication/index.html');

} );



console.log('Server started, please go to http://localhost:'+port+'\n');