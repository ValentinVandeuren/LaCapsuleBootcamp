var express = require('express');
var router = express.Router();
var dataBike = [
  { name: 'BIKO45', urlImage: '/images/bike-1.jpg', price: 679 },
  { name: 'ZOOK7', urlImage: '/images/bike-2.jpg', price: 799 },
  { name: 'LIKO89', urlImage: '/images/bike-3.jpg', price: 839 },
  { name: 'GEWO8', urlImage: '/images/bike-4.jpg', price: 1249 },
  { name: 'KIWIT', urlImage: '/images/bike-5.jpg', price: 899 },
  { name: 'NASAY', urlImage: '/images/bike-6.jpg', price: 1399 }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'BikeShop - Home', dataBike: dataBike});
});

router.get('/shop', function(req, res, next) {
  if(!req.session.dataCardBike) req.session.dataCardBike = [];
  var status = false;

  for (var i = 0; i < req.session.dataCardBike.length; i++) {
    if (req.session.dataCardBike[i].name == req.query.name) {
      req.session.dataCardBike[i].quantity += 1;
      status = true;
    }
  }

  if (status == false) {
    req.session.dataCardBike.push({
      name: req.query.name,
      urlImage: req.query.urlImage,
      price: req.query.price,
      quantity: 1,
    });
  }
  res.render('shop', {title: 'BikeShop - Shop', dataCardBike: req.session.dataCardBike});
});

router.get('/delete-shop', function(req, res, next){
  req.session.dataCardBike.splice(req.query.id, 1)
  res.render('shop', {title: 'BikeShop - Shop', dataCardBike: req.session.dataCardBike})
})

router.post('/quantity', function(req, res){
  let newQuantity = req.body.quantity;
  req.session.dataCardBike[req.body.quantityId].quantity = newQuantity;
  res.render('shop', {title: 'BikeShop - Shop', dataCardBike: req.session.dataCardBike})
})

module.exports = router;