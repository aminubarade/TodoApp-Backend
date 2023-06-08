const http = require('http');
const app = require('./app');

const port = process.env.PORT || 3001;

const server = http.createServer(app);
server.listen(port);
console.log("Server running at 127.0.0.1:"+port);
