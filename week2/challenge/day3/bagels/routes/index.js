var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bagels' });
});

router.get('/bagels', function(req, res, next) {
  res.render('bagels', { title: 'Bagels' });
});

module.exports = router;
