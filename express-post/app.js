var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

// Set up a global variable and set it to an empty object
var lastSubmission = {};

app.get('/', function(req, res) {
	res.render('index', {
		submissionData: lastSubmission
	});
});

//add a handler for the form submission
app.post('/handleForm', function(req, res){
	// pull the submitted data from the request object
	var postedData = req.body;
	// reassign the value to postedData
	lastSubmission = postedData;

	//echo the exact same data
	res.redirect( '/');
});




var server = app.listen(6313, function() {
	console.log('Express server listening on port ' + server.address().port);
});
