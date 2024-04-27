const http = require('http');
const fs = require('fs');
const path = require('path');
const cowsay = require('cowsay');

const output = cowsay.say({ text: 'Hi Krisztián!! :)' });
console.log(output);

const server = http.createServer((req, res) => {
    
    let filePath = '.' + req.url;
    if (filePath === './') {
        filePath = './index.html'; // Ha a gyökérkönyvtárban van az index.html
    }

    const extname = path.extname(filePath);
    let contentType = 'text/html';

    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpeg';
            break;
    }

    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.writeHead(404);
                res.end('File not found');
            } else {
                res.writeHead(500);
                res.end('Server error');
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));