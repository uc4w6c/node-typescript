const http = require('http')

const app = function(req, res, next: Function) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
};

http.createServer(app).listen(3000);
