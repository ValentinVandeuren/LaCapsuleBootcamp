var express = require('express');
var router = express.Router();
var request = require('sync-request');
var usersModel = require('../models/users');

/*sing-up*/

router.post('/sign-up', async function(req, res, next) {
  let email = await usersModel.findOne({emailAddress: req.body.emailAddressUp});

  if(!email){
    var newUser = new usersModel({
      userName: req.body.userName,
      emailAddress: req.body.emailAddressUp,
      password: req.body.password
    })
    newUserSave = await newUser.save();
    req.session.user = {
      name: newUserSave.userName,
      id: newUserSave._id
    }

    res.redirect('/weather')
  }else {
    res.redirect('/')
  }
});

/*sing-in*/

router.post('/sign-in', async function(req, res, next) {
  let user = await usersModel.findOne({emailAddress: req.body.emailAdressIn});
  
  if(req.body.passwordIn == user?.password){
    req.session.user = {
      name: user.userName,
      id: user._id
    }

    res.redirect('/weather');
  } else {
    res.redirect('/');
  }
});

/*logout*/

router.get('/logout', async function(req, res, next) {
  req.session.user = null;

  res.redirect('/')
});


module.exports = router;
