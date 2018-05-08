var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let jwt = require('express-jwt');
let auth = jwt({secret: process.env.BACKEND_SECRET});

var User = mongoose.model('User');
let Question = mongoose.model('Question');
let Answer = mongoose.model("Answer");

/* GET home page. */
router.get('/API/questions', function(req, res, next) {
  console.log("questions");
  console.log("mongo " + process.env.HELPDESK_DB);
  let query = Question.find();
  query.exec(function(err, questions){
    if (err) 
        return next(err);
      
     res.json(questions);
  })
  /* Question.find(function(err, questions)gig{
    if (err) 
        return next(err);
     res.json(questions);
  })*/
});
/*router.get('/socket.io', function(req, res, next) {
  console.log("socket");
});*/

router.get('/API/question/:question', function(req, res, next) {
  res.json(req.question);
});

router.post('/API/questions/', auth, function (req, res, next) {
    let question = new Question({poster: req.body.poster, title: req.body.title, body:req.body.body, posted: req.body.datePosted});
    question.save(function(err, rec) {
      if (err)
       return next(err);
      res.json(rec);
    });
  });  

 router.delete("/API/question/:question", auth, function(req, res, next){
  req.question.remove(function(err) {
    if (err) { return next(err); }   
    res.json("removed question");
  });
 })

 router.put("/API/question/:question", auth,function(req, res, next){
  req.question.save(function(err) {
    if (err) { return next(err); }   
    res.json(req.question);
  });
 })
 router.param('question', function(req, res, next, id) {
   //Make sure only username is selected and not salt + hash
    let query = Question.findById(id).populate({path: 'answers', populate : {path: 'poster', select: "username"}, select: "body id"}).populate("poster", "username");
   
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

  router.post('/API/question/:question/answers', auth,
  function(req, res, next) {
    let body = req.body.body;
    body = escapeString(body);
    
  let answer = new Answer({poster: req.body.poster, body : body, posted : new Date()});
  
  answer.save(function(err, rec) {
    
    if (err) return next(err);
    
    req.question.answers.push(rec);
    
    req.question.save(function(err, rec) {
      if (err) return next(err);
      Answer.populate(answer, {path: "poster", select: "username"}, function(err, answer2) {
        answer.poster = answer2.poster;
        console.log(answer2);
        res.json(answer2);
      })
   //   console.log("a1");
    //  console.log(answer);
     // res.json(answer);
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
