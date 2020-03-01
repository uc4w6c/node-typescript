import * as express from 'express';

const app = express();
var router = express.Router()

let hello = (req: express.Request, res: express.Response) => {
  res.send('Hello World');
};
router.get('/hello', hello);

hello = (req: express.Request, res: express.Response) => {
  res.send('Hello World override');
};
router.get('/hello', hello);

app.use('/', router);

app.listen(3000, () => console.log('Example app listening on port 3000!'));
