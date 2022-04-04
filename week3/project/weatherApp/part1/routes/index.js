var express = require('express');
var router = express.Router();

var dataCity = [
  {name: "Paris", climat: "nuageux", icon: "fa-solid fa-cloud", maxTemp: 7.22, minTemp: 5.56},
  {name: "Lyon", climat: "Ciel dégagé", icon: "fa-solid fa-sun", maxTemp: 6, minTemp: 3.89}
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { dataCity: dataCity });
});

router.get('/login', function(req, res, next) {
  res.render('login', {});
});

router.post('/add-city', function(req, res, next) {
  res.render('index', { dataCity: dataCity });
});

module.exports = router;
