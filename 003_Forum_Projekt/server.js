const express = require('express');

const app = express();

let i = 0;
app.use(function(request, response, next) {
	console.log(i + '. ' + request.method + ' ' + request.url);
	i++;

	next();
});

app.use(express.static('public'));

app.listen(9000);
