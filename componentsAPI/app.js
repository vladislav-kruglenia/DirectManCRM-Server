const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const passport = require('passport');
const indexAuth = require('./auth/indexAuth');
//const passportMiddleware = require('./middlewares/passport');



app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

require('./middlewares/passport')(passport);
indexAuth(app);


module.exports = app;