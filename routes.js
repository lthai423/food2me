var index = require('./index.js');
var router = index.app;
var fs = require('fs');
var Restaurant = index.restaurant;


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
	res.redirect('/restSignup');
	
});

router.get('/restSignup', function(req, res){
	res.statusCode = 200;
	fs.readFile('./restSignup.html', function(err, file){
		if(!err) {
			res.setHeader("Content-Type", "text/html");
			res.send(file);
		}
	});
});

router.post('/restSignup', function(req, res){
	res.redirect('/addmenu');
});

router.get('/addmenu', function(req, res){
	res.render('addmenu');
});

router.get('/home', function(req,res){
	res.statusCode = 200;
	res.send('home');
});


// catch 404's
router.get('/*', function(req, res){
	res.statusCode = 404;
	res.send("404. NOT FOUND");
});

module.exports = router;




// router.get('/testdb', function(req, res){
// 	var newEntry = new Restaurant({
// 		name: req.body.name,
// 	});
// 	newEntry.save((err, entry) => {
// 		if (err) throw err;
// 		console.log(entry, "ENTERED");
// 	});
// })