const express = require('express');
const http = require('http');
const { Server } = require("socket.io");
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*", // Allow connections from anywhere
        methods: ["GET", "POST"]
    }
});

// Serve the index.html file
app.use(express.static(path.join(__dirname)));

io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    // Receive audio data from the web page
    socket.on('voice-data', (data) => {
        // Broadcast audio to all connected bots
        socket.broadcast.emit('play-voice', data);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});