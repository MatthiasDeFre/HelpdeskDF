var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');

let Question = mongoose.model('Question');
let Answer = mongoose.model("Answer");
/* GET home page. */
router.get('/API/questions', function(req, res, next) {
  let query = Question.find();
  query.exec(function(err, questions){
    if (err) 
        return next(err);
     res.json(questions);
  })
  /* Question.find(function(err, questions){
    if (err) 
        return next(err);
     res.json(questions);
  })*/
});

router.get('/API/question/:question', function(req, res, next) {
  res.json(req.question);
});

router.post('/API/questions/', function (req, res, next) {
    let question = new Question({title: req.body.title, body:req.body.body, posted: req.body.datePosted});
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
    let query = Question.findById(id).populate("answers");
   
    query.exec(function(err, question) {
      
      if (err) {
      //  console.log("ja ja");
    //    return next(err);
      return next(new Error('not found ' + id));
      }
     /* if (!question) {
       
      }*/
      req.question = question;
      return next();
    });
  });

  router.post('/API/question/:question/answers', 
  function(req, res, next) {
    let body = req.body.body;
    body = escapeString(body);
  let answer = new Answer({body : body, posted : new Date()});
   console.log(answer);
  answer.save(function(err, rec) {
    console.log(err);
    if (err) return next(err);
    
    req.question.answers.push(rec);
    
    req.question.save(function(err, rec) {
      if (err) return next(err);
      res.json(answer);
    })
  });
});

let escapeString = function(body)  {
  body = body.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); 
  body = body.replace(new RegExp("<script>", 'g'), "<^script^>");
  body = body.replace(new RegExp("</script>", 'g'), "<^/script^>");
  return body;
}
module.exports = router;
