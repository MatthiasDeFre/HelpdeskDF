let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let User = mongoose.model('User');
let Question = mongoose.model('Question');
let Answer = mongoose.model("Answer");

let passport = require('passport');
let jwt = require('express-jwt');
let auth = jwt({secret: process.env.BACKEND_SECRET});

var multer  = require('multer');
var storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'public/images'),
  filename: (req, file, cb) => {
    console.log("changen names");
    console.log("name" + file.originalname);
    if(!file.originalname.match(/\.(jpeg|png|jpg|wav)$/)) {
      console.log("error");
      var err = new Error();
      err.code = 'filetype';
      return cb(err);
    } else  {
      console.log("done") 
      cb(null, + Date.now() + "_" + file.originalname);
    }

  } 
});
var upload = multer({ 
  storage: storage,
  limits: {fileSize: 10000000}
});

router.get('/all', function(req, res, next) {
  
  let query = User.find();
  query.exec(function(err, users){
    if (err) 
        return next(err);
      
     res.json(users);
  })

  /* Question.find(function(err, questions)gig{
    if (err) 
        return next(err);
     res.json(questions);
  })*/
});
 router.put("/admin/:userA", auth, function(req, res, next){
 if(req.user.admin){
  req.userA.admin = req.body.adminA;
  req.userA.save();
  res.json("jobsdone");
 } else {
   return res.send(401);
 }
  
});
router.post('/register', function(req, res, next) {
  if (!req.body.username || !req.body.password || !req.body.avatar) {
    return res.status(400).json({ message: 'Please fill out all fields' });
  }
  if (req.body.username.length < 4 || req.body.password < 6) {
    return res.status(400).json({ message: 'Fields to short' });
  }
  
  let user = new User();
  user.username = req.body.username;
  user.avatar = req.body.avatar;
  user.admin = false;
  user.setPassword(req.body.password);
  user.save(function(err) {
    if (err) {
      return next(err);
    }
    return res.json({ token: user.generateJWT() });
  });
});

router.post('/login', function(req, res, next) {
  if (!req.body.username || !req.body.password) {
    return res.status(400).json({ message: 'Please fill out all fields' });
  }
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (user) {
     
      return res.json({ 
        token: user.generateJWT(), 
        id: user._id,
        admin: user.admin
      });
    } else {
      return res.status(401).json(info);
    }
  })(req, res, next);
});

router.post('/checkusername', function(req, res, next) {
  User.find({ username: req.body.username }, function(err, result) {
    if (result.length) {
      res.json({ username: 'alreadyexists' });
    } else {
      res.json({ username: 'ok' });
    }
  });
});

router.post('/upload', upload.single("image"), function(req, res, next) {
  console.log("upload");
  console.log(req.file);
  return res.json({fileName: req.file.filename});
});

//Find questions
//Delete answers for questions
//Delete answers
//Delete user
router.delete("/admin/delete/:userId", auth, function(req, res, next){
  if(req.user.admin){

   let questionsA; 
   let query = Question.find({poster: req.params.userId});
   let query2 = Answer.find({poster: req.params.userId});
   query.exec(function(err, questions){
     
     questions.forEach((item)=> {
     
      Answer.remove({ _id: { $in: item.answers } }, function(err) {
        if (err) return next(err);
        item.remove();
      });
     });
     query2.exec(function(err, answers){
      answers.forEach((item)=> {
        console.log("a");
        console.log(item._id);
         let query3 = Question.findOne({ answers: item._id });
         query3.exec(function(err, question){
           console.log("q");
           console.log(question);
           let index = question.answers.indexOf(item._id);
           console.log(index);
           question.answers.splice(index, 1);
             item.remove((err) => {
               if(err) return next(err);
               question.save();
               
             });
         });
      });
   });
   });
  User.remove({_id: req.params.userId}, function(err) {
    if (err) return next(err);
  })
  res.json("job done");
  } else {
    return res.send(401);
  }
});


router.param('userA', function(req, res, next, id) {
  //Make sure only username is selected and not salt + hash
   let query = User.findById(id);
  
   query.exec(function(err, userA) {
     
     if (err) {
     //  console.log("ja ja");
   //    return next(err);
     return next(new Error('not found ' + id));
     }
    /* if (!question) {
      
     }*/

     req.userA = userA;
     return next();
   });
 });

module.exports = router;
