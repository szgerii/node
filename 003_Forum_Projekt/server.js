const express = require('express');

const app = express();

let i = 0;
app.use(function(request, response, next) {
	console.log(i + '. ' + request.method + ' ' + request.url);
	i++;

	next();
});

app.use(express.static('public'));

const posztok = [];

app.use('/add_bejegyzes', express.urlencoded());
app.post('/add_bejegyzes', function(request, response) {
	console.log(request.body);
	posztok.push(request.body);
	response.redirect('/');
});

app.get('/get_bejegyzesek', function(request, response) {
	response.send(posztok);
});

app.listen(9000);
