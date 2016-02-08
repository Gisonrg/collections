var http = require('http');

var port = process.argv[2];

var server = http.createServer(function(req, res) {
    var request_url = require('url').parse(req.url, true);
    var time = new Date(request_url.query.iso);
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    if (request_url.pathname === '/api/parsetime') {
        res.write(JSON.stringify({
            hour: time.getHours(),
            minute: time.getMinutes(),
            second: time.getSeconds()
        }));
    } else if (request_url.pathname ===
        '/api/unixtime') {
        console.log(new Date(request_url.query.iso).getTime());
        res.write(JSON.stringify({
            unixtime: time.getTime()
        }));
    }
    res.end();
});

server.listen(port);
