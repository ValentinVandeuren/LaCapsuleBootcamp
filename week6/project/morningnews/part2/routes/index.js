var express = require('express');
var router = express.Router();
let usersModel = require('../models/users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/sign-up', async function(req, res, next) {
  let email = await usersModel.findOne({email: req.body.email});

  if(!email && req.body.name.length >= 5 && req.body.password.length >= 8 && req.body.email.length >= 5){
    let newUser = new usersModel({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
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
  }else if(isUser && req.body.password != isUser.password){
    const passwordFailedMessage = "le mot de passe n'est pas correct";
    res.json({passwordFailedMessage});
  }else {
    res.json({isUser});
  };

})

module.exports = router;
