var express = require('express');
var router = express.Router();
let usersModel = require('../models/users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/sign-up', async function(req, res, next) {
  let newUser = new usersModel({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  })
  newUserSave = await newUser.save();
})

router.post('/sign-in', async function(req, res, next) {
  let email = await usersModel.findOne({email: req.body.email, password: req.body.password});

  res.json({email});
})

module.exports = router;
