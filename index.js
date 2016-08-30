// require node dependencies
var express = require('express');
var app = express();

// require file stream
var fs = require('fs');

var router = require('./routes.js');

app.set('port', process.env.PORT || 5000);

// require mongodb and ORM dependencies
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://herokuapp/tranquil-hollows-38103/test');
// var db = mongoose.connection;
// db.on('error', (err) => console.log(err));
// db.once('open', () => console.log('MongoDB Connected'));


// set view and engines
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// route all to router
app.get('*', router);

// turn server 'on'
app.listen(process.env.PORT, function () {
  console.log('Food2Me app listening on port 5000!');
});
