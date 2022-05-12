var express = require('express');
var router = express.Router();
let uniqid = require('uniqid');
let fs = require('fs');

let cloudinary = require('cloudinary').v2;

cloudinary.config({
 cloud_name: 'dgn4ygvvg',
 api_key: '332686373913911',
 api_secret: 'pnZbbn86Ab-2dulgC83FvuYGyfM' 
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/upload', async function(req, res, next) {
  let pictureName = './tmp/'+uniqid()+'.jpg';
  let resultCopy = await req.files.avatar.mv(pictureName)  
  // console.log(req.files.avatar.name)
  if (!resultCopy) {
    let resultCloudinary = await cloudinary.uploader.upload(pictureName);
    res.json(resultCloudinary)
  } else {
    res.json({error: resultCopy})
  }
  fs.unlinkSync(pictureName);
})

module.exports = router;