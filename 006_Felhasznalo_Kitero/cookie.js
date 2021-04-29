const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());

app.get('/', function(request, response) {
	console.log(request.cookies);

	// a felhasználó még nem volt az oldalon
	if (!request.cookies.latogatott) {
		response.cookie('latogatott', '0');
	} else {
		let lat = parseInt(request.cookies.latogatott) + 1;
		response.cookie('latogatott', lat.toString());
	}

	response.send();
});

app.listen(9000);
