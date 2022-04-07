var express = require('express');
var router = express.Router();
var request = require('sync-request');
var cityModel = require('../models/cities');
var usersModel = require('../models/users');

/* GET home page. */
router.get('/weather', async function(req, res, next) {
  var cityList = await cityModel.find()
  res.render('index', { cityList });
});

router.get('/', function(req, res, next) {
  res.render('login', {});
});

router.post('/add-city', async function(req, res, next) {
  let newCity = req.body.cityName;
  let requete = request("GET",`https://api.openweathermap.org/data/2.5/weather?q=${newCity}&appid=87037779aa1fdbb43df93806e9f928ec&lang=fr&units=metric`);
  let resultWS = JSON.parse(requete.body);
  let status = false;
  var cityList = await cityModel.find()

  for (let i = 0; i < cityList.length; i++) {
    if (cityList[i].name.toLowerCase() == newCity.toLowerCase()) {
      status = true;
    }
  }

  try{
    if (status == false) {
      if(newCity.toLowerCase() == resultWS.name.toLowerCase()){
        var cityList = new cityModel({
          name: resultWS.name,
          climat: resultWS.weather[0].description,
          icon: resultWS.weather[0].icon,
          maxTemp: resultWS.main.temp_max,
          minTemp: resultWS.main.temp_min
        })
      
        await cityList.save();
      }
    }

  } catch (error){
    
  }

  cityList = await cityModel.find()
  res.render('index', { cityList });
});

router.get('/delete-city', async function(req, res, next){
  await cityModel.deleteMany({ name: req.query.name })
  cityList = await cityModel.find()
  res.render('index', {cityList})
})

router.get('/updateData', async function(req, res, next){
  var cityList = await cityModel.find()
  
  for(let i=0; i< cityList.length; i++){
    let newCity = cityList[i].name;
    var requete = request("GET",`https://api.openweathermap.org/data/2.5/weather?q=${newCity}&appid=87037779aa1fdbb43df93806e9f928ec&lang=fr&units=metric`);
    var resultWS = JSON.parse(requete.body);
    await cityModel.updateOne(
      { _id: cityList[i].id },
      {
        name: resultWS.name,
        climat: resultWS.weather[0].description,
        icon: resultWS.weather[0].icon,
        maxTemp: resultWS.main.temp_max,
        minTemp: resultWS.main.temp_min
      }
    );
  }

  cityList = await cityModel.find()
  res.render('index', { cityList })
})

/*sing-up*/

router.post('/sign-up', async function(req, res, next) {
  let email = await usersModel.findOne({emailAddress: req.body.emailAddressUp});

  if(!email){
    var newUser = new usersModel({
      userName: req.body.userName,
      emailAddress: req.body.emailAddressUp,
      password: req.body.password
    })
    req.session.currentId = await newUser.save();
    req.session.currentName = req.body.userName;

    res.redirect('/weather')
  }else {
    res.redirect('/')
  }
});

/*sing-in*/

router.post('/sign-in', async function(req, res, next) {
  let user = await usersModel.findOne({emailAddress: req.body.emailAdressIn});
  
  if(req.body.passwordIn == user?.password){
    req.session.currentName = user.userName;
    req.session.currentId = user.id;

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