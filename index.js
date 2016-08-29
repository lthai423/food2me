// require node dependencies
var express = require('express');
var app = express();

// require mongodb and ORM dependencies
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', (err) => console.log(err));
db.once('open', () => console.log('MongoDB Connected'));

// route handling
app.get('/', function (req, res) {
  res.send('Hello World!');
});

// turn server 'on'
app.listen(3000, function () {
  console.log('Food2Me app listening on port 3000!');
});
