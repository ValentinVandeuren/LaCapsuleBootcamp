var express = require('express');
var router = express.Router();
let uniqid = require('uniqid');
let fs = require('fs');
let request = require('sync-request');

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

  if (!resultCopy) {
    let resultCloudinary = await cloudinary.uploader.upload(pictureName);

    var options = {
      json: {
        apiKey: "5c0a5d392c1745d2ae84dc0b1483bfd2",
        image: resultCloudinary.url,
      },
    };
     
    var resultDetectionRaw = await request('POST', 'https://lacapsule-faceapi.herokuapp.com/api/detect', options);
    var resultDetection = await resultDetectionRaw.body;
    resultDetection = await JSON.parse(resultDetection);

    let gender = "";
    let age = ""
    if(resultDetection.error){
      gender = "NO FACE DETECTED"
      age = "NO FACE DETECTED"
    }else {
      if(resultDetection.detectedFaces[0].gender === "male"){
        gender = "Homme";
      }else if (resultDetection.detectedFaces[0].gender === "female"){
        gender = "Femme";
      }
  
      age = resultDetection.detectedFaces[0].age + 'ans';
    }

    res.json({resultCloudinary, gender, age})
  } else {
    res.json({error: resultCopy})
  }
  fs.unlinkSync(pictureName);

})

module.exports = router;