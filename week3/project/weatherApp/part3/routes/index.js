var express = require('express');
var router = express.Router();
var request = require('sync-request');
let { cityModel } = require('./bdd');

var dataCity = [
  {name: "Paris", climat: "nuageux", icon: "fa-solid fa-cloud", maxTemp: 7.22, minTemp: 5.56},
  {name: "Lyon", climat: "Ciel dégagé", icon: "fa-solid fa-sun", maxTemp: 6, minTemp: 3.89}
]

/* GET home page. */
router.get('/', function(req, res, next) {
  req.session.cityList = []
  res.render('index', { cityList: req.session.cityList });
});

router.get('/login', function(req, res, next) {
  res.render('login', {});
});

router.post('/add-city', async function(req, res, next) {
  let newCity = req.body.cityName;
  var requete = request("GET",`https://api.openweathermap.org/data/2.5/weather?q=${newCity}&appid=87037779aa1fdbb43df93806e9f928ec&lang=fr&units=metric`);
  var resultWS = JSON.parse(requete.body);
  if(!req.session.cityList) req.session.cityList = [];
  let status = false;

  for (let i = 0; i < req.session.cityList.length; i++) {
    if (req.session.cityList[i].name.toLowerCase() == newCity.toLowerCase()) {
      status = true;
    }
  }

  try{
    if (status == false) {
      if(newCity.toLowerCase() == resultWS.name.toLowerCase()){
        // req.session.cityList.push({
        //   name: resultWS.name,
        //   climat: resultWS.weather[0].description,
        //   icon: resultWS.weather[0].icon,
        //   maxTemp: resultWS.main.temp_max,
        //   minTemp: resultWS.main.temp_min
        // })
        req.session.city = new cityModel({
          name: resultWS.name,
          climat: resultWS.weather[0].description,
          icon: resultWS.weather[0].icon,
          maxTemp: resultWS.main.temp_max,
          minTemp: resultWS.main.temp_min
        })
      
        await req.session.city.save();
      }
    }

  } catch (error){
    
  }
  res.render('index', { cityList: req.session.city });
});

router.get('/delete-city', function(req, res, next){
  req.session.city.splice(req.query.position, 1)
  res.render('index', {cityList: req.session.city})
})

module.exports = router;
