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
  if (req.session.set_session_time) {
    console.log('set_session_time:' + req.session.set_session_time);
    next();
  } else {
    req.session.set_session_time = Date.now();
    console.log('set_session_time set');
    next();
  }
};
app.use(sessionCheck);

let hello = (req: express.Request, res: express.Response) => {
  res.send('Hello World');
};
app.get('/hello', hello);

app.listen(3000, () => console.log('Example app listening on port 3000!'));
