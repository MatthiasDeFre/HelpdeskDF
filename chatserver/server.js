'use strict';

const express = require('express');
const socketIO = require('socket.io');
const path = require('path');

const PORT = process.env.PORT || 3000;
let cors = require('cors');
const server = express()
  .use(cors({origin: "https://helpdesk-frontend.herokuapp.com", credentials: true}))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

const io = socketIO(server);


//cors({origin: "https://helpdesk-frontend.herokuapp.com", credentials: true})
//server.use((req, res) => res.sendFile(INDEX));

io.on('connection', function(socket){
  console.log("connected");
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

