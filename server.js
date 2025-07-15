const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const moment = require('moment'); // Optional for time formatting

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('public'));

const users = {}; // { room: { socket.id: username } }

io.on('connection', socket => {
  console.log('🟢 New connection:', socket.id);

  socket.on('joinRoom', ({ user, room }) => {
    socket.username = user;
    socket.room = room;
    socket.join(room);

    if (!users[room]) users[room] = {};
    users[room][socket.id] = user;

    socket.emit("roomJoined", room);
    socket.to(room).emit("userJoined", user);

    // Send updated user list
    io.to(room).emit("updateUserList", Object.values(users[room]));
  });

  socket.on('chatMessage', ({ room, msg }) => {
    const payload = {
      user: socket.username || "Anonymous",
      msg,
      room,
      time: moment().format("HH:mm:ss")
    };

    io.to(room).emit('chatMessage', payload);
  });

  socket.on("typing", room => {
    socket.to(room).emit("typing", socket.username);
  });

  socket.on('disconnect', () => {
    const { room, id } = socket;
    if (users[room]) {
      delete users[room][id];
      io.to(room).emit("updateUserList", Object.values(users[room]));
    }

    console.log('🔴 Disconnected:', id);
  });
});

server.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});
