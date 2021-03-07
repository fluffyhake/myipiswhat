const http = require('http');
const path = require('path');
const fs = require('fs');


const server = http.createServer ((req,res) => {
    console.log(req.url)
    if(req.url ==='/'){

    
        var srcip = req.headers['x-forwarded-for'] || 
        req.socket.remoteAddress || 
        req.socket.remoteAddress ||
        (req.socket ? req.socket.remoteAddress : null);
            res.writeHead(200, { 'Content-Type': 'text/html'});
            res.write('<html>');
            res.write('<body>');
            res.write('<h1>Your IP is:</h1>');
            res.write(srcip);
            res.write('</html>');
            res.end();

        }else{
            res.writeHead(404, { 'Content-Type': 'text/html'});
            res.end('<h1>404 not found</h1>');
        }
    });


const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));