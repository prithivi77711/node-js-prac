const http = require('http');

const portname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to our homepage');
    }
    else if (req.url === '/about') {
        res.end("We don't sell kidneys");
    }
    else {
        res.end("<h1>Oops</h1><p>Sorry the page you are looking for does not exist</p>");
    }
})

server.listen(port, portname);