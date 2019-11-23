const http = require('http');

let app = http.createServer((req, res) => {
    res.weriteHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
});

app.listen(3000, '127.0.0.1');

