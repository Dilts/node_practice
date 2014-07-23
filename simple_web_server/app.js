var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');



var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

app.get('/', function(req, res) {
	// fs.readFile('data.txt', function(err, data){
 //  		res.header('Content-Type', 'text/html');
	// 	res.send(data);
	// });
	res.render('input');

});

app.get('/:filename', function(req, res) {
 	var filename = req.params.filename
 		console.log(filename)
 		fs.readFile("/public/" + filename, function(err, data){
  		res.header('Content-Type', 'text/html');
		res.send(data);

	});
 // access value of :filename with req.params.filename
 // read the file with the specified filename
 // send the contents of the file to the user
});



var server = app.listen(9162, function() {
	console.log('Express server listening on port ' + server.address().port);
});
