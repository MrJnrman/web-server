var express = require('express');
var app = express();
var middleware = require('./middleware.js');

var PORT = 8000;

app.use(middleware.logger);

// defaults to index.html

app.get('/about', middleware.requrieAuthentication, function (req, res) {
	res.send('Who\'s asking?');
});

// '__dirname' - prints current directory
app.use(express.static(__dirname + '/public'));


app.listen(PORT, function() {
	console.log('Express server running on ' + PORT + '!');
});