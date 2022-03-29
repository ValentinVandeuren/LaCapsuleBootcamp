var express = require('express');
var router = express.Router();
var firstname = "John";
var lastname = "Doe";
var age = 40;
var animals = 2;
var born = "New York";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Backend with NodeJS & Express', subtitle: 'Coding Classes @LaCapsule' });
});

router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Backend with NodeJS & Express', subtitle: '@LaCapsule' });
});

router.get('/userinfo', function(req, res, next) {
  res.render('userinfo', { title: 'Backend with NodeJS & Express', subtitle: '@LaCapsule', prenom: firstname, nom: lastname, age: age, animals: animals, naissance: born});
});

module.exports = router;
