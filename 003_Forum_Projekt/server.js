const express = require('express');
const mongoose = require('mongoose');

// ------------------- DATABASE ------------------ //
const dbUser = 'Felhasznalo';
const dbPassword = 'Y0PtKvXylmbso1wO';
const database = 'ForumDB';

//mongodb+srv://Felhasznalo:<password>@cluster0.soxr8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongoose.connect('mongodb+srv://' + dbUser + ':' + dbPassword +
		'@cluster0.soxr8.mongodb.net/' + database + '?retryWrites=true&w=majority');

const séma = new mongoose.Schema({
	title: String,
	content: String
});

const Bejegyzesek = mongoose.model('Bejegyzesek', séma, 'Bejegyzesek');

// ------------------- ROUTING ------------------- //
const app = express();

let i = 0;
app.use(function(request, response, next) {
	console.log(i + '. ' + request.method + ' ' + request.url);
	i++;

	next();
});

app.use(express.static('public'));

app.use('/add_bejegyzes', express.urlencoded());
app.post('/add_bejegyzes', function(request, response) {
	console.log(request.body);
	
	if (!request.body || !request.body.title || !request.body.content) {
		response.statusCode = 400;
		response.send('Nincs elég adat');
		return;
	}
	
	const ujB = new Bejegyzesek({
		title: request.body.title,
		content: request.body.content
	});
	ujB.save();

	response.redirect('/');
});

app.get('/get_bejegyzesek', function(request, response) {
	
	Bejegyzesek.find({}, function(error, dokumentumok) {
		if (error) {
			response.statusCode = 500;
			response.send('Nem tudtuk lekérni a bejegyzeseket');
			return;
		}

		/*
		[
			{
				title: 'title',
				content: 'content'
			},
			{
				title: 'title',
				content: 'content'
			}
		]
		*/
		response.send(dokumentumok);

	});

});

app.listen(9000);
