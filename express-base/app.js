//Require the express package
var express = require('express');

//Instantiate a new express application and store it in the 'app'
var app = express();


// Handle all root url requests by sendng back the string of html
app.get('/', function(req, res) {
	// Send the html string back to the client machine
	res.send('<h1>Hello Boulder</h1>');
});


// Add a handler for the About Page
app.get('/about', function(req, res) {
//Send back some HTML to the requester
	res.send('<h1>About Page</h1>');
});


// Set up the actucal HTTP listener (port, onRunning)
var server = app.listen(4312, function() {
	// Print to terminal to let us know that this thing actually works
	console.log('Express server listening on port ' + server.address().port);
});
