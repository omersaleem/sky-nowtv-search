var express = require('express');
var app = express();

app.get('/getmovies', function(req, res) {
	res.status(200).sendfile('content/results.json');
});

app.get('/thumbnail', function(req, res) {
	var id = req.query.id;
	res.status(200).sendfile('content/poster.jpg');
});

app.use(express.static(__dirname + '/www'));

app.listen(3000);
console.log('Listening on port 3000');
