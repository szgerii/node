const mongoose = require('mongoose');

mongoose.connect('');

const séma = new mongoose.Schema(
	{
		title: String,
		content: String,

		valaszok: [String],

		likeok: Number
	}
);

const Bejegyzesek = mongoose.model('Bejegyzesek', séma, 'Bejegyzesek');

Bejegyzesek.find({}, function(error, dokumentumok) {
	console.log(dokumentumok);
});
