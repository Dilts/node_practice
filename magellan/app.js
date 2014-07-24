var express = require('express');
var controller = require('./controllers/index-controller.js')

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.get('/', controller.index);

app.get('/:name', controller.nextPage);


var server = app.listen(3463, function() {
	console.log('Express server listening on port ' + server.address().port);
});
