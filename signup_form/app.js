var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

var lastRequest = {};


app.get('/', function(req, res) {
	res.render('index', {
		lastSub: lastRequest
	});
});

// Add a handler for the About Page
app.get('/success', function(req, res) {
//Send back some HTML to the requester
	res.send('<h1>success</h1>');
});


app.post('/formSubmit', function(req,res){
	var submitData = req.body;
	lastRequest = submitData;
	res.redirect('/success');
});

var server = app.listen(5718, function() {
	console.log('Express server listening on port ' + server.address().port);
});
