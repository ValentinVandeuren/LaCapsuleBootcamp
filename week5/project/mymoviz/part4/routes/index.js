var express = require('express');
var router = express.Router();
let request = require("sync-request");
let movieModel = require('../models/movies');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/new-movies', function(req, res, next) {
  let requete = request("GET",`https://api.themoviedb.org/3/movie/popular?api_key=d4805613be0bc5b6267b2c7a5506ff8d`);
  let resultWS = JSON.parse(requete.body);
  res.json({resultWS});
});

module.exports = router;
