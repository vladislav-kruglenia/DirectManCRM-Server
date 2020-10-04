const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const indexAuth = require('./auth/indexAuth');

app.use(bodyParser.json());
indexAuth(app);


module.exports = app;