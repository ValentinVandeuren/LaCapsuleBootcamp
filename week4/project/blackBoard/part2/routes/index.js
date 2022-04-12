var express = require('express');
var router = express.Router();
let articlesModel = require('../models/articles');
let commandesModel = require('../models/commandes');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET tasks page. */
router.get('/tasks-page', function(req, res, next) {
  res.render('tasks');
});

/* GET Messages page. */
router.get('/messages-page', function(req, res, next) {
  res.render('messages');
});

/* GET Users page. */
router.get('/users-page', function(req, res, next) {
  res.render('users');
});

/* GET Catalog page. */
router.get('/catalog-page', async function(req, res, next) {
  let articles = await articlesModel.find();

  res.render('catalog', { articles });
});

/* GET Orders-list page. */
router.get('/orders-list-page', async function(req, res, next) {
  let commandes = await commandesModel.find();

  res.render('orders-list', { commandes });
});

/* GET Order detail page. */
router.get('/order-page', async function(req, res, next) {
  let articlesId = await commandesModel.findById(req.query.orderId).populate('articles').exec();

  res.render('order', { articlesId });
});

/* GET chart page. */
router.get('/charts', function(req, res, next) {
  res.render('charts');
});



module.exports = router;
