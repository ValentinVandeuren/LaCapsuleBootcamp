var express = require('express');
var router = express.Router();
var request = require('sync-request');
var avatar = [
  {image: "/images/boss.svg"},
  {image: "/images/boy.svg"},
  {image: "/images/girl-1.svg"},
  {image: "/images/girl-2.svg"},
  {image: "/images/girl-3.svg"},
  {image: "/images/girl.svg"},
  {image: "/images/man-2.svg"},
  {image: "/images/man.svg"}
]

/* GET home page. */
router.get('/', function(req, res, next) {
  var requete = request("GET","https://jsonplaceholder.typicode.com/users");
  var resultWS = JSON.parse(requete.body);
  
  res.render('index', { users: resultWS, avatar: avatar });
});

router.get('/messages', function(req, res, next) {
  let userId = req.query.userId
  var requete2 = request("GET",`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  var resultWS2 = JSON.parse(requete2.body);
  res.render('posts', { post: resultWS2 });
});

router.get('/comment', function(req, res, next) {
  let postId = req.query.postId
  var requete3 = request("GET",`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
  var resultWS3 = JSON.parse(requete3.body);
  res.render('comments', { comment: resultWS3 });
});

module.exports = router;