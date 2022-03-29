var express = require('express');
var router = express.Router();
var dataBike = [
  {
    name: 'BIKO45',
    urlImage: '/images/bike-1.jpg',
    price: 679,
  },
  {
    name: 'ZOOK7',
    urlImage: '/images/bike-2.jpg',
    price: 799,
  },
  {
    name: 'LIKO89',
    urlImage: '/images/bike-3.jpg',
    price: 839,
  },
  {
    name: 'GEWO8',
    urlImage: '/images/bike-4.jpg',
    price: 1249,
  },
  {
    name: 'KIWIT',
    urlImage: '/images/bike-5.jpg',
    price: 899,
  },
  {
    name: 'NASAY',
    urlImage: '/images/bike-6.jpg',
    price: 1399,
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'BikeShop - Home', dataBike: dataBike});
});

var dataCardBike = [
  {
    name: 'BIKO45',
    urlImage: '/images/bike-1.jpg',
    price: 679,
    quantity: 2,
  },
  {
    name: 'ZOOK7',
    urlImage: '/images/bike-2.jpg',
    price: 799,
    quantity: 3,
  },
  {
    name: 'LIKO89',
    urlImage: '/images/bike-3.jpg',
    price: 839,
    quantity: 4,
  },
  {
    name: 'GEWO8',
    urlImage: '/images/bike-4.jpg',
    price: 1249,
    quantity: 1,
  },
  {
    name: 'KIWIT',
    urlImage: '/images/bike-5.jpg',
    price: 899,
    quantity: 2,
  },
  {
    name: 'NASAY',
    urlImage: '/images/bike-6.jpg',
    price: 1399,
    quantity: 1,
  }
];

router.get('/shop', function(req, res, next) {
  res.render('shop', {title: 'BikeShop - Shop', dataCardBike: dataCardBike});
});

module.exports = router;
