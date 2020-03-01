// URLのオーバーライドを試したけどうまくいかない
import * as express from 'express';

const app = express();

let hello = (req: express.Request, res: express.Response) => {
  res.send('Hello World');
};
app.get('/hello', hello);

// app = express();  if express new, then url override
hello = (req: express.Request, res: express.Response) => {
  res.send('Hello World override');
};
app.get('/hello', hello);

app.listen(3000, () => console.log('Example app listening on port 3000!'));
