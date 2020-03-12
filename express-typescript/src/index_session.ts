import * as express from 'express';
import * as session from 'express-session';

const app = express();

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 30 * 60 * 1000
  }
}));

var sessionCheck = function(req, res, next) {
  if (req.session.last_access) {
    console.log('last_access:' + req.session.last_access);
    next();
  } else {
    req.session.last_access = Date.now();
    console.log('last_access set');
  }
};
app.use(sessionCheck);

let hello = (req: express.Request, res: express.Response) => {
  res.send('Hello World');
};
app.get('/hello', hello);

app.listen(3000, () => console.log('Example app listening on port 3000!'));
