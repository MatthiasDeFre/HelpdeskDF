var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let jwt = require('express-jwt');
let auth = jwt({secret: process.env.BACKEND_SECRET});

var User = mongoose.model('User');
let Question = mongoose.model('Question');
let Answer = mongoose.model("Answer");

let path = require("path");

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
    if(req.body.title.length < 10 || req.body.body.length < 10 || req.body.title.length > 150 || req.body.body.length > 150 ) {
      return next(new Error("Woops"));
    }
    let question = new Question({poster: req.user._id, title: req.body.title, body:req.body.body, posted: req.body.datePosted});
    question.save(function(err, rec) {
      if (err)
       return next(err);
      res.json(rec);
    });
  });  

 router.delete("/API/question/:question", auth, function(req, res, next){
  if(req.user._id == req.question.poster._id) {
   

  Answer.remove({ _id: { $in: req.question.answers } }, function(err) {
    if (err) return next(err);
    req.question.remove(function(err) {
      if (err) {
        return next(err);
      }
      res.json(req.question);
    }); 
  });
  } else {
    return res.send(401);
  }
});

 router.delete("/API/question/:question/:answer", auth, function(req, res, next){
   console.log(req.user._id + " " + req.answer.poster._id);
   
  if(req.user._id == req.answer.poster._id) {
     let index = req.question.answers.indexOf(req.answer._id);
    req.question.answers.splice(index, 1);
      req.answer.remove((err) => {
    
        if(err) return next(err);
        req.question.save();
        res.json(req.answer);
      });
  } else {
    return res.send(401);
  }
});
/* req.question.remove(function(err) {
  if (err) { return next(err); }   
  res.json("removed question");
});*/

 router.put("/API/question/:question", auth,function(req, res, next){
  req.question.save(function(err) {
    if (err) { return next(err); }   
    res.json(req.question);
  });
 })
 router.param('question', function(req, res, next, id) {
   //Make sure only username is selected and not salt + hash
    let query = Question.findById(id).populate({path: 'answers', populate : {path: 'poster', select: "username avatar"}, select: "body id posted"}).populate("poster", "_id username");
   
    query.exec(function(err, question) {
      
      if (err) {
      //  console.log("ja ja");
    //    return next(err);
      return next(new Error('not found ' + id));
      }
     /* if (!question) {
       
      }*/
      console.log(question.poster);
      req.question = question;
   
      return next();
    });
  });
  router.param('answer', function(req, res, next, id) {
    //Make sure only username is selected and not salt + hash
     let query = Answer.findById(id).populate({path: "poster", select: "_id"});
    
     query.exec(function(err, answer) {
       
       if (err) {
       //  console.log("ja ja");
     //    return next(err);
       return next(new Error('not found ' + id));
       }
      /* if (!question) {
        
       }*/
       console.log(answer.poster);
       req.answer = answer;
    
       return next();
     });
   });

  router.get("/image", function(req, res, next) {
    console.log("test");
    res.sendFile(path.resolve("public/images"+req.params.image));
  })
  router.post('/API/question/:question/answers', auth,
  function(req, res, next) {
    let body = req.body.body;
    body = escapeString(body);
    
  let answer = new Answer({poster: req.user._id, body : body, posted : new Date()});
  
  answer.save(function(err, rec) {
    
    if (err) return next(err);
    
    req.question.answers.push(rec);
    
    req.question.save(function(err, rec) {
      if (err) return next(err);
      Answer.populate(answer, {path: "poster", select: "username avatar"}, function(err, answer2) {
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
