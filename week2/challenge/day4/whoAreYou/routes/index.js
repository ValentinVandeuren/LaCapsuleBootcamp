var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/pageTwo', function(req, res, next) {
  req.session.firstName = req.body.firstName
  res.render('you', { name: req.session.firstName });
});

router.get('/pageTree', function(req, res, next) {
  res.render('youagain', { name: req.session.firstName });
});

module.exports = router;
