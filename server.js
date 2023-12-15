const express = require('express');
const bodyParser = require('body-parser');
const childrenRouter = require('./routes/child');

const app = express();

app.use(bodyParser.json());
app.use('/children', childrenRouter);

app.listen(3000, () => console.log('Server started on port 3000'));
