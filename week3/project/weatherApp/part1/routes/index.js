var express = require('express');
var router = express.Router();

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

router.post('/add-city', function(req, res, next) {
  let newCity = req.body.cityName;
  if(!req.session.cityList) req.session.cityList = [];
  let status = false;

  for (let i = 0; i < req.session.cityList.length; i++) {
    if (req.session.cityList[i].name.toLowerCase() == newCity.toLowerCase()) {
      status = true;
    }
  }

  if (status == false) {
    for(let i=0; i <dataCity.length; i++){
      if(newCity.toLowerCase() == dataCity[i].name.toLowerCase()){
        req.session.cityList.push({
          name: dataCity[i].name,
          climat: dataCity[i].climat,
          icon: dataCity[i].icon,
          maxTemp: dataCity[i].maxTemp,
          minTemp: dataCity[i].minTemp
        })
      }
    }
  }
  res.render('index', { cityList: req.session.cityList });
});

router.get('/delete-city', function(req, res, next){
  req.session.cityList.splice(req.query.position, 1)
  res.render('index', {cityList: req.session.cityList})
})

module.exports = router;
