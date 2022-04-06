var express = require('express');
var router = express.Router();
var mealModel = require('./bdd');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/order', async function(req, res, next){
  var meal = new mealModel({
    meal: req.body.meal,
    name: req.body.name,
    delivery: req.body.delivery,
    address: req.body.address,
    phone: req.body.phone,
    beverage: req.body.beverage
  })

  await meal.save();
  res.render('index', {  });
});

module.exports = router;
