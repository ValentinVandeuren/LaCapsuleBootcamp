const express = require('express');
const { off } = require('../models/users');
const router = express.Router();
const usersModel = require('../models/users');
const bcrypt = require('bcrypt');
const uid2 = require('uid2');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/sign-up', async function(req, res, next) {
  let email = await usersModel.findOne({email: req.body.email});
  let hash = bcrypt.hashSync(req.body.password, 10);

  if(!email && req.body.name.length >= 5 && req.body.password.length >= 8 && req.body.email.length >= 5){
    let newUser = new usersModel({
      name: req.body.name,
      email: req.body.email,
      password: hash,
      token: uid2(5)
    })
    newUserSave = await newUser.save();
    res.json({newUserSave})
  }else if(req.body.name.length < 5){
    const nameMessage = "il faut minimum 5 caractères pour le nom!"
    res.json({nameMessage});
  }else if(req.body.password.length < 8){
    const passwordMessage = "il faut minimum 8 caractères pour le password!"
    res.json({passwordMessage});
  }else if(email){
    const emailMessage = "l'email existe déjà!"
    res.json({emailMessage});
  }
})

router.post('/sign-in', async function(req, res, next) {
  let isUser = await usersModel.findOne({email: req.body.email});

  if(!isUser){
    const emailMessageSignIn = "l'email n'existe pas";
    res.json({emailMessageSignIn});
  }else if(isUser && !bcrypt.compareSync(req.body.password, isUser.password)){
    const passwordFailedMessage = "le mot de passe n'est pas correct";
    res.json({passwordFailedMessage});
  }else if(isUser && req.body.token != isUser.token) {
    const tokenFailedMessage = "Le token n'est pas correct";
    res.json({tokenFailedMessage});
  }else {
    res.json({isUser});
  };

})

module.exports = router;
