// require node dependencies
var express = require('express');
var app = express();
var x = {app:app}
module.exports = x;
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded()); 


// require file stream
var fs = require('fs');

// router.init(app);



app.set('port', process.env.PORT || 5000);

// require mongodb and ORM dependencies
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/food2me');
// var db = mongoose.connection;
// db.on('error', (err) => console.log(err));
// db.once('open', () => {
// 	console.log('MongoDB Connected');
// });

// var Schema = mongoose.Schema;

// var RestaurantSchema = new Schema({
//   name:  String,
//   typeOfFood: String,
//   priceRange:   String,
//   avgDeliveryTime: Number,
//   date: { type: Date, default: Date.now },
//   meta: {
//     votes: Number,
//     favs:  Number
//   },
//   menuItems: [
//   	{item:String, price:Number}
//   ]
// });

// x.restaurant = mongoose.model('Restaurant', RestaurantSchema);
// // console.log(x.restaurant);
// console.log("Model and schema created");
// module.exports = x;

// set view and engines
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// serve static home page. 
// app.use(express.static('/'));

// route all others
var router = require('./routes.js');
app.get('*', router);

// turn server 'on'
app.listen(5000, function (err) {
	if (err) console.log(err)
  console.log('Food2Me app listening on port 5000!');
});