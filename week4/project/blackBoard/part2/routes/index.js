var express = require('express');
var router = express.Router();
let articlesModel = require('../models/articles');
let commandesModel = require('../models/commandes');
let usersModel = require('../models/users');

/* GET home page. */
router.get('/', async function(req, res, next) {
  let articles = await articlesModel.find();
  let adminMT = await usersModel.findOne({ status: "admin" })
  let messagesNonLu = [];
  let tacheNonCloturer = [];
  for(let i=0; i<adminMT.messages.length; i++){
    if(adminMT.messages[i].read == false){
      messagesNonLu.push(adminMT.messages[i]);
    }
  };
  for(let i=0; i<adminMT.tasks.length; i++){
    if(adminMT.tasks[i].dateCloture == null){
      tacheNonCloturer.push(adminMT.tasks[i]);
    }
  };

  res.render('index', { articles, tacheNonCloturer, messagesNonLu });
});

/* GET tasks page. */
router.get('/tasks-page', async function(req, res, next) {
  let admin = await usersModel.findOne({ status : "admin" });
  let adminTasks = admin.tasks;
  
  res.render('tasks', { adminTasks });
});

/* GET Messages page. */
router.get('/messages-page', async function(req, res, next) {
  let admin = await usersModel.findOne({ status : "admin" });
  let adminMessages = admin.messages

  res.render('messages', { adminMessages });
});

/* GET Users page. */
router.get('/users-page', async function(req, res, next) {
  let usersList = await usersModel.find({ status: "customer" });

  res.render('users', { usersList });
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
