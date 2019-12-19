"use strict";
const http = require('http');
const app = require('./app');





const port = process.env.PORT || 3500;
const server = http.createServer(app);

server.listen(port, function() {
    console.log(`Express's started on port : ${port}`)
    
})
