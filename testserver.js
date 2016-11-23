var port = process.env.PORT || 3000;
var ip = process.env.IP || '0.0.0.0';
var http = require('http');
var url = require('url');
var moment = require('moment');
var sinon = require('sinon');
require('./server.js');
var clock = sinon.useFakeTimers(10);


http.createServer(function (req, res) {
    console.log("started request");
    var url_parts = url.parse(req.url,true);

    if (url_parts.pathname === '/settime' && req.method === 'GET') {
        if (url_parts.query && url_parts.query.timestamp) {
            console.log(parseInt(url_parts.query.timestamp));
            clock.restore();
            clock = sinon.useFakeTimers(parseInt(url_parts.query.timestamp)*1000);
        }
        res.writeHead(204, { 'Content-Type': 'text/plain' });
        res.end();
    }

}).listen(3005); //also listen to 3005 for test server