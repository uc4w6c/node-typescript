// これだ！！！ notFoundではフラグだけつけておいて、
// 最後のuseでnotFoundを返却する。ここではglobalの数を数えておくこと。
import * as express from 'express';

const app = express();

let hello = (req: express.Request, res: express.Response) => {
  res.send('Hello World');
};
app.get('/hello', hello);

let notFound = (req: express.Request, res: express.Response, next) => {
  console.log('not found');
  // throw new Error('BROKEN');
  next();
};
app.use('/', notFound);

let cat = (req: express.Request, res: express.Response) => {
  res.send('cat');
};
app.get('/cat', cat);

let catNotFound = (req: express.Request, res: express.Response, next) => {
  console.log('cat app:' + req.originalUrl);
  console.log('cat url:' + req.url);
  console.log('cat not found');
  // throw new Error('BROKEN');
  next();
};
app.use('/cat', catNotFound);

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(404).send('Something broke!')
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
