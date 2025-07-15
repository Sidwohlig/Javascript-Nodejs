const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app); // Create an HTTP server
const io = new Server(server, {
    cors: {
        origin: "*", // Allow all origins for development. Be specific in production!
        methods: ["GET", "POST"]
    }
});

const PORT = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/socketio-client.html');
});

let users = {}; // Store connected users and their socket IDs

io.on('connection', (socket) => {
    console.log(`User connected: ${socket.id}`);

    // When a user joins the chat
    socket.on('join', (username) => {
        users[socket.id] = username;
        console.log(`${username} joined.`);
        io.emit('chat message', {
            user: 'System',
            text: `${username} has joined the chat.`
        });
        io.emit('user list', Object.values(users)); // Update user list for everyone
    });

    // When a user sends a chat message
    socket.on('chat message', (msg) => {
        const username = users[socket.id] || `User_${socket.id.substring(0, 4)}`;
        console.log(`Message from ${username}: ${msg}`);
        io.emit('chat message', { // Emit to all connected clients
            user: username,
            text: msg
        });
    });

    // When a user disconnects
    socket.on('disconnect', () => {
        const username = users[socket.id];
        delete users[socket.id];
        console.log(`User disconnected: ${socket.id} (${username || 'unknown'})`);
        if (username) {
            io.emit('chat message', {
                user: 'System',
                text: `${username} has left the chat.`
            });
        }
        io.emit('user list', Object.values(users)); // Update user list for everyone
    });

    // Handle private messages (example)
    socket.on('private message', ({ targetId, message }) => {
        const senderUsername = users[socket.id] || 'Unknown';
        const targetUsername = users[targetId] || 'Unknown';
        if (io.sockets.sockets.has(targetId)) {
            io.to(targetId).emit('chat message', {
                user: `Private from ${senderUsername}`,
                text: message
            });
            socket.emit('chat message', { // Sender also gets confirmation
                user: `Private to ${targetUsername}`,
                text: message
            });
            console.log(`Private message from ${senderUsername} to ${targetUsername}: ${message}`);
        } else {
            socket.emit('chat message', {
                user: 'System',
                text: `User ${targetUsername} is not online.`
            });
            console.warn(`Attempted private message to offline user: ${targetId}`);
        }
    });
});

server.listen(PORT, () => {
    console.log(`Socket.IO server running on http://localhost:${PORT}`);
});