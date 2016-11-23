var port = process.env.PORT || 3000;
var ip = process.env.IP || '0.0.0.0';
var http = require('http');
var url = require('url');
var moment = require('moment-timezone');

http.createServer(function (req, res) {
    console.log("started request");
    var url_parts = url.parse(req.url, true);

    if (url_parts.pathname === '/sms') {
        console.log('sms receipt');
    } else if (url_parts.pathname === '/ping') {
        console.log('ping');
    } else if (url_parts.pathname === '/whattime') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        if (url_parts.query && url_parts.query.city == 'new_york') {
            res.end(moment().tz("America/New_York").format());
        }
        else {
            res.end(moment().format('X'));
        }
        return;
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end("Page could not be found");
    }
    if (req.body) {
        console.log(req.body);
    }
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Success');

}).listen(port, ip);


console.log("started server on " + ip + ":" + port);