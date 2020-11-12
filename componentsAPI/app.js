const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const indexAuth = require('./auth/indexAuth');

// const passportMiddleware = require('./middlewares/passport');

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization, x-xsrf-token"
    );
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods','GET,POST,DELETE,PUT,OPTIONS');
        return res.status(200).json({})
    }
    next();
});
app.use(cookieParser());
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

require('./middlewares/passport')(passport);
indexAuth(app);


module.exports = app;