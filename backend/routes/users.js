let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let User = mongoose.model('User');
let passport = require('passport');
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
        id: user._id
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

module.exports = router;
