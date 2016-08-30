// require node dependencies
var express = require('express');
var app = express();

// require file stream
var fs = require('fs');

// require mongodb and ORM dependencies
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', (err) => console.log(err));
db.once('open', () => console.log('MongoDB Connected'));

// route handling
app.get('/', function (req, res) {
  fs.readFile('./index.html', (err, file) => {
  	res.statusCode = 200;
	  res.contentType('text/html');
	  res.send(file);
  })
});

// turn server 'on'
app.listen(3000, function () {
  console.log('Food2Me app listening on port 3000!');
});
