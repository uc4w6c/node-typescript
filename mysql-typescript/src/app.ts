/**
 * mysqljs/mysqlを利用したパターン
 */
import * as http from "http";
import * as mysql from 'mysql';
import * as util from 'util';

const connection = mysql.createConnection({
  host     : 'localhost',
  port: 3307,
  user     : 'test',
  password : 'test',
  database : 'testdb'
});

const app = async (req, res) => {
  connection.connect();

  // @ts-ignore
  // const query = util.promisify(connection.query);
  connection.query = util.promisify(connection.query);
  try {
    // const data = await query("SELECT Hello AS value");
    const data = await connection.query("SELECT 'Hello' AS value");
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(data[0].value + ' World!\n');
    // res.end('Hello World\n');
  } catch(err) {
    console.log(err);
    res.writeHead(500, {'Content-Type': 'text/plain'});
  }
  connection.end();
};

http.createServer(app).listen(3000);
