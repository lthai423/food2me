var express = require('express');
var router = express.Router();

// index
router.get('/', function(req, res){
	res.render('index', {});
});

router.get('/hello', function(req, res){
	res.send("hello");
});

// 404
router.get('/*', function(req, res){
	res.statusCode = 404;
	res.send("404. NOT FOUND");
});

module.exports = router;