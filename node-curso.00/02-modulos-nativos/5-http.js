const http = require("node:http");

const PORT = 3000;
 
const server = http.createServer((req, res) => {
    res.end("hola mundo");
});

server.listen (3000, (PORT) => {
    console.log ("servidor escuchando en puerto http://localhost:3000")
});