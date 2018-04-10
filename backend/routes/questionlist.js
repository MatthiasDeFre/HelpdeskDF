var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');

let Question = mongoose.model('Question');
/* GET home page. */
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
module.exports = router;
