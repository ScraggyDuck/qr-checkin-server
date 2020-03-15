const express = require('express');
const cors = require('cors');
const rootRouter = require('./src/routes/index');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


app.use('/api/v1', rootRouter);
app.get('/', (req, res) => res.send('Hello world with Express'));

module.exports = app;