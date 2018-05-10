var express = require('express');
var router = express.Router();
var path = require("path");
/* GET home page. */
router.get('/', function(req, res, next) {
 // res.send("server works");
 res.sendFile(path.resolve("public/images/"+ "1525965401169_Databanken1.png"));
});

router.get('/image/:id', function(req, res, next) {
  // res.send("server works");
  let id = req.params.id;
  console.log(id);
  res.sendFile(path.resolve("public/images/"+ id));
 });
 /*router.param('image', function(req, res, next, id) {
  //Make sure only username is selected and not salt + hash
  
     req.id = id;
  
     return next();
   
 });*/
/*let mongoose = require('mongoose');

let Question = mongoose.model('Question');

router.get('/API/Questions', function(req, res, next) {
  Question.find(function(err, questions){
    if (err) 
        return next(err);
     res.json(questions);
  })
});
router.post('/API/Questions/', function (req, res, next) {
    let question = new Question(req.body);
    question.save(function(err, rec) {
      if (err)
       return next(err);
      res.json(rec);
    });
  });
*/

module.exports = router;
