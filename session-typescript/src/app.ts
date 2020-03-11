import { IncomingMessage, ServerResponse } from 'http';

const http = require('http')

const app = function(req: IncomingMessage, res: ServerResponse, next: Function) {
    // 暫定でurl出力を置いている
    console.log('url:' + req.url);
    console.log('headers:' + JSON.stringify(req.headers));
    app.handle(req, res, next);
};
app.handle = function handle(req: IncomingMessage, res: ServerResponse, callback: Function): void {
  res.setHeader('Set-Cookie', 'last_access=' + Date.now() + ';');
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}

http.createServer(app).listen(3000);
