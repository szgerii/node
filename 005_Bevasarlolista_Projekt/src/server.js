//#region require
const express = require('express');
const mongoose = require('mongoose');

const config = require('../config.json');

//#endregion

const app = express();

//#region database

mongoose.connect(
	config.dbUrl
		.replace('<user>', config.dbUser)
		.replace('<password>', config.dbPassword)
		.replace('<database>', config.dbDatabase)
);

// egy tétel
const item = {
	name: String,
	done: Boolean
};

const userSchema = new mongoose.Schema({
	username: String,
	password: String,

	items: [item]
});

//#endregion

//#region middleware-k

// statikus fájlok
app.use(express.static('/public'));

// json kérések feldolgozása
app.use(express.json());

// form kérések feldolgozása
app.use(express.urlencoded());

//#endregion

//#region endpointok
app.post('/bejelentkezes', function(request, response) {

});

app.post('/kijelentkezes', function(request, response) {

});

app.post('/regisztracio', function(request, response) {

});

// visszaadja az összes terméket / tételt egy felhasználóhoz
app.get('/tetelek', function(request, response) {

});

app.post('/tetel_hozzaad', function(request, response) {

});

app.delete('/tetel_torol', function(request, response) {

});

// kész tételeket törli ki
app.delete('/kijelol_torol', function(request, response) {

});

app.delete('/minden_torol', function(request, response) {

});

app.put('/tetel_szerkeszt', function(request, response) {

});

// mindent visszaállít nem megvettre
app.post('/reset', function(request, response) {

});
//#endregion

app.listen(config.port);
