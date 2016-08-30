var router = require('./index.js');
var fs = require('fs');

router.get('/', function(req, res){
	res.statusCode = 200;
	fs.readFile('./index.html', function(err, file){
		if(!err) {
			res.setHeader("Content-Type", "text/html");
			res.send(file);
		}
	})
});

// signup
router.post('/signup', function(req, res){
	console.log(req.body);
	res.statusCode = 202;
	res.send();
});

// catch 404's
router.get('/*', function(req, res){
	res.statusCode = 404;
	res.send("404. NOT FOUND");
});

module.exports = router;