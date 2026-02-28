const bedrock = require('bedrock-protocol');
const io = require('socket.io-client');

const RENDER_URL = 'https://minecraftvoiceserver.onrender.com';
const socket = io(RENDER_URL);

// Join the server as a bot
const client = bedrock.createClient({
    host: 'zeingaymakmak.mc.in.th', // From your panel
    port: 27677,            // Default Bedrock port
    username: 'Zeincodgay',
    offline: false           // Set to false if server needs Xbox login
});

client.on('spawn', () => {
    console.log('Bot joined Bedrock server!');

    // Bedrock tracking is different, but this joins the game
    setInterval(() => {
        // Logic to track players via 'client' packets goes here
    }, 1000);
});