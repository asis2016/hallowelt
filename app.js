const http = require('http');
const os = require('os');
console.log("hallo welt, ...");
var handler = function(request, response) {
    console.log("Received request from " + request.connection.remoteAddress);
    response.writeHead(200);
    response.end("Hallo, " + os.hostname() + "! Die Erde hat Musik für diejenigen, die zuhören. - G. Santayana");
};
var www = http.createServer(handler);
www.listen(8080);
