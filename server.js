var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
	res.send('Hello World');
})

const uuidv4 = require('uuid/v4');
var users = { test123 : {vorname :"Max", nachname : "Mustermann", userid : "test123"}}

app.get('/api/v1/users/:userID', (req, res) => {
	var user = users[req.params.userID]
	return res.send(user);
});

app.get('/api/v1/users', (req, res) => {
	return res.send(Object.keys(users));
});

app.post('/api/v1/users', (req, res) => {
	var user = req.body
	user.userid = uuidv4();
	users[user.userid] = user;
	return res.send(user.userid)
});

var server = app.listen(8080, function () {
	var host = server.address().address
	var port = server.address().port

	console.log("Webserver running at http://%s:%s", host, port)
})
