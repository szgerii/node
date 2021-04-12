const http = require('http');

const server = http.createServer(function(request, response) {
	console.log(request.method);
	console.log(request.url);

	// minden oké
	response.statusCode = 200;
	response.end('hello world');

});

server.listen(9000);
