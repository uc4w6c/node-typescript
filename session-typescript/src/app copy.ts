import { IncomingMessage, ServerResponse } from 'http';

const http = require('http')
const session = new Map<Number, Map<string, string>>();

const app = function(req: IncomingMessage, res: ServerResponse, next: Function) {
    // 暫定でurl出力を置いている
    console.log('url:' + req.url);
    console.log('headers:' + JSON.stringify(req.headers));
    app.handle(req, res, next);
};

const makeCookies = (req: IncomingMessage): Map<string, string> => {
  if (!req.headers.cookie) return null;
  let cookieMap = new Map<string, string>();
  req.headers.cookie.split(';').forEach(cookie => {
    const data = cookie.split('=');
    cookieMap.set(data[0], data[1]);
  });
  return cookieMap;
}

let id = 0;
app.handle = function handle(req: IncomingMessage, res: ServerResponse, callback: Function): void {
  const cookies = makeCookies(req);
  let sessionId = (cookies? Number(cookies.get('id')) : null);
  if (sessionId) {
    const sessionData = session.get(sessionId);
    console.log('session id:' + id + ', userName:' + sessionData.get('userName'));
  } else {
    id++;
    session.set(id, new Map<string, string>().set('userName', 'Taro_' + id));
    res.setHeader('Set-Cookie', 'id=' + id + ';');
  }
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}

http.createServer(app).listen(3000);
