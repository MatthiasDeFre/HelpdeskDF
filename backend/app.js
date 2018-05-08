
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
let passport = require('passport');
let jwt = require('express-jwt');
let auth = jwt({secret: process.env.BACKEND_SECRET});


  //Database test
var mongoose = require('mongoose');

mongoose.connect(process.env.HELPDESK_DB || 'mongodb://ServiceDeskDefre:Labo123456@ds117200.mlab.com:17200/helpdeskdb');
require("./models/Question");
require("./models/Answer");
require("./models/User");

require('./config/passport');

var index = require('./routes/index');
var users = require('./routes/users');
var questions = require("./routes/questionlist");

var app = express();

let cors = require('cors');
//app.use(cors({origin: "*"}));
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
  next();
});


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());

app.use('/', index);
app.use('/API/users', users);
app.use("/", questions);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error');
});


//socket.io
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = 3001;

io.on('connection', function(socket){
  console.log("connected");
  console.log(jwt);
  socket.on("join", function(data) {
      socket.join(data.room);
      console.log(data.user + " has joined " + data.room);
      socket.broadcast.to(data.room).emit("new user joined", {user : data.user, message: " has joined the room"});
  })

  socket.on("leave", function(data) {
   
    console.log(data.user + " has left the room: " + data.room);
    socket.broadcast.to(data.room).emit("left room", {user : data.user, message: " has left the room"});

    socket.leave(data.room);
  })

  socket.on('message', function(data){
    console.log(data);
    io.in(data.room).emit("new message", {user: data.user, message: data.message});
  });
});

/*http.listen(process.env.PORT, function(){
  console.log("port");
  console.log("port: " +process.env.PORT);
  console.log('listening on *:3001');
});*/

module.exports = app;
