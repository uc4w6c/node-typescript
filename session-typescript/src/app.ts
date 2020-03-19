import { IncomingMessage, ServerResponse } from 'http';

const http = require('http')
const session = new Map<string, Map<string, string>>();
let id = 0;

// CookieをMap型に変換する
const getCookies = (req: IncomingMessage): Map<string, string> => {
  if (!req.headers.cookie) return null;

  let cookieMap = new Map<string, string>();
  req.headers.cookie.split(';').forEach(cookie => {
    const data = cookie.split('=');
    cookieMap.set(data[0], data[1]);
  });
  return cookieMap;
};

const app = function(req: IncomingMessage, res: ServerResponse, next: Function) {
  const cookies = getCookies(req);
  let sessionId = (cookies? cookies.get('id') : null);

  if (sessionId) {
    const sessionData = session.get(sessionId);
    console.log('session id:' + id + ', userName:' + sessionData.get('userName'));
  } else {
    id++;
    session.set(String(id), new Map<string, string>().set('userName', 'Taro_' + id));
    res.setHeader('Set-Cookie', 'id=' + id + ';');
  }

  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
};

http.createServer(app).listen(3000);
