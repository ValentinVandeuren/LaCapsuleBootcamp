var express = require('express');
var router = express.Router();

var Musics = [
  {
     artist: "Muse",
     favorite_musics: ["Uprising", "starlight"]
  }, {
     artist: "ACDC",
     favorite_musics: ["Thunderstruck", "Highway to Hell"]
  }, {
     artist: "Led Zeppelin",
     favorite_musics: ["Rock and Roll", "Stairway to Heaven"]
  }, {
     artist: "Doors",
     favorite_musics: ["LA Woman", "Riders on the Storm "]
  }, {
     artist: "Charles Aznavour",
     favorite_musics: ["La Boheme", "Hier encore"]
  }, {
     artist: "Jacques Brel",
     favorite_musics: ["Ne me quitte pas", "Quand on a que l'amour"]
  }, {
     artist: "Céline Dion",
     favorite_musics: ["S'il suffisait d'aimer", "Let's Talk About Love"]
  }, {
     artist: "Pink Floyd",
     favorite_musics: ["Shine On You Crazy Diamond", "Another Brick in the Wall"]
  }, {
     artist: "Edith Piaf",
     favorite_musics: ["La Vie en rose", "Non, je ne regrette rien"]
  }, {
     artist: "Beyonce",
     favorite_musics: ["Halo", "Crazy in Love"]
  }
  ]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/searchArtist', function(req, res) {
  var searchContent = req.body.search;
  for(let i=0; i <Musics.length; i++){
    if( searchContent === Musics[i].artist ){
      console.log('ptt')

    }
  }
  res.render('index', { title: 'Express' });
});

module.exports = router;
