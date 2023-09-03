 const http = require('http');

function rqListener(req, res) {
    console.log(req.url, req.method, req.headers);

    res.setHeader('Content-Type', 'text/html'); 
    res.write('<html>');
    res.write('<head><title>MFP</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('/<html>');
    res.end();
}

 const server = http.createServer(rqListener); //we point which funciton will run when our server receive request

 server.listen(3000); // keep process running for incoming request