import * as http from "http";
import * as mysql from 'mysql';

const app = function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
};

http.createServer(app).listen(3000);
