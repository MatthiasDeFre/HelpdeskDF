var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');

let Question = mongoose.model('Question');
/* GET home page. */
router.get('/API/questions', function(req, res, next) {
  Question.find(function(err, questions){
    if (err) 
        return next(err);
     res.json(questions);
  })
});

router.get('/API/question/:question', function(req, res, next) {
  res.json(req.question);
});

router.post('/API/questions/', function (req, res, next) {
    let question = new Question(req.body);
    question.save(function(err, rec) {
      if (err)
       return next(err);
      res.json(rec);
    });
  });  

 router.delete("/API/question/:question", function(req, res, next){
  req.question.remove(function(err) {
    if (err) { return next(err); }   
    res.json("removed question");
  });
 })

 router.put("/API/question/:question", function(req, res, next){
  req.question.save(function(err) {
    if (err) { return next(err); }   
    res.json(req.question);
  });
 })
 router.param('question', function(req, res, next, id) {
    let query = Question.findById(id);
    query.exec(function(err, question) {
      if (err) {
        return next(err);
      }
      if (!question) {
        return next(new Error('not found ' + id));
      }
      req.question = question;
      return next();
    });
  });
module.exports = router;
