var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Express', debug: process.env.DEBUG || 'n/a' });
});

module.exports = router;
