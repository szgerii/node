const http = require('http');
const fs = require('fs');
const url = require('url');

let i = 0;

const server = http.createServer(function(request, response) {
    console.log(i);
    i++;
	console.log(request.method);
    console.log(request.url);
    console.log('');

    let path = url.parse(request.url).pathname;
    if (path == '/') {
        path = '/index.html';
    }

	fs.readFile('public' + path, function(error, data) {
        if (error) {
            console.error(error.message);
            response.statusCode = 404;
            response.end('File ' + path + ' does not exist.');
        } else {
            if (path.endsWith('.html')) {
                response.setHeader('Content-Type', 'text/html');
            } else if (path.endsWith('.css')) {
                response.setHeader('Content-Type', 'text/css');
            }
            response.end(data);
        }
        
    });

});

server.listen(9000);