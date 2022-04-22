var express = require('express');
var router = express.Router();
let request = require("sync-request");
let movieModel = require('../models/movies');
let wishlistModel = require('../models/wishlist');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/new-movies', function(req, res, next) {
  let requete = request("GET",`https://api.themoviedb.org/3/movie/popular?api_key=d4805613be0bc5b6267b2c7a5506ff8d&language=fr`);
  let resultWS = JSON.parse(requete.body);
  res.json({resultWS});
});

router.get('/wishlist-movie', async function(req, res, next) {
  let movieList = await movieModel.find();


  res.json({movieList});
});

router.post('/wishlist-movie', async function (req, res, next) {
  let requete = request("GET",`https://api.themoviedb.org/3/movie/popular?api_key=d4805613be0bc5b6267b2c7a5506ff8d&language=fr`);
  let resultWS = JSON.parse(requete.body);

  for(let i=0; i<resultWS.results.length; i++){
    var movieList = new movieModel({
      name: resultWS.results[i].title,
      desc: resultWS.results[i].overview,
      img: "https://image.tmdb.org/t/p/w500" + resultWS.results[i].poster_path,
      note: resultWS.results[i].vote_average,
      vote: resultWS.results[i].vote_count
    });
    await movieList.save();
  }


  res.json({movieList});

});

router.delete('/wishlist-movie/:name', async function (req, res, next){
  let deleteMovie = await movieModel.delete({name : req.params.name});

  res.json(deleteMovie);
})

router.post('/add-movie', async function(req, res, next){
  let wishlist = new wishlistModel({
    name: req.body.name,
    img: req.body.img,
  });
  await wishlist.save();
})

router.post('/remove-movie', async function(req, res, next){
  await wishlistModel.deleteOne({name: req.body.name})
})

router.post('/wishlist', async function(req, res, next){
  await wishlistModel.find()
})

module.exports = router;
