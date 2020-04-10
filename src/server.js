import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

const app = express();
const port = process.env.PORT || 1111;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(morgan('tiny'));

app.get('/', (req, res) => {
  res.json({
    message: 'PAM PROFILE CHECK',
  });
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));
