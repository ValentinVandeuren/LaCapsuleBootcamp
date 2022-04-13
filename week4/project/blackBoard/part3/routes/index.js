var express = require('express');
const { aggregate } = require('../models/articles');
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
router.get('/charts', async function(req, res, next) {
  let usersList = await usersModel.find();
  let adminMT = await usersModel.findOne({ status: "admin" });
  let commandesList = await commandesModel.find();
  
  let maleCounter = 0;
  let femaleCounter = 0;
  let messagesNonLu = 0;
  let messagesLu = 0;
  let commandesPayeExpedie = 0;
  let commandesPayeNonExpedie = 0;

  for(let i=0; i<usersList.length; i++){
    if(usersList[i].gender == "male"){
      maleCounter += 1;
    } else {
      femaleCounter += 1;
    }
  };

  for(let i=0; i<adminMT.messages.length; i++){
    if(adminMT.messages[i].read){
      messagesLu += 1;
    } else {
      messagesNonLu += 1;
    }
  };

  for(let i=0; i<commandesList.length; i++){
    if( commandesList[i].status_payment == "validated" && commandesList[i].status_shipment == true ){
      commandesPayeExpedie += 1;
    } else if( commandesList[i].status_payment == "validated" && commandesList[i].status_shipment == false ){
      commandesPayeNonExpedie += 1;
    }
  };

  let aggr = commandesModel.aggregate();
  aggr.match({status_payment: "validated"});
  aggr.group({
    _id: {
      year: {$year: "$date_insert"},
      month: {$month: "$date_insert"}
    },
    total: {$sum: "$total"}
  })
  let CA = await aggr.exec();

  res.render('charts', { 
    maleCounter,
    femaleCounter,
    messagesLu,
    messagesNonLu,
    commandesPayeExpedie,
    commandesPayeNonExpedie,
    CA
  });
});



module.exports = router;
