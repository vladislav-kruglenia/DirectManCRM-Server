const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const passport = require('passport');
const indexAuth = require('./auth/indexAuth');
// const cors = require('cors');
// const passportMiddleware = require('./middlewares/passport');

/*let corsOptions = {
    origin: 'http://localhost:3000/',
    optionsSuccessStatus: 200
};*/
//app.options('*', cors());
/*app.use(cors({
    origin: "http://localhost:5000",
    credentials: true,
    methods: "GET,POST,DELETE,PUT,OPTIONS",
    allowedHeaders:
        "Origin, X-Requested-With, Content-Type, Accept, authorization, x-xsrf-token"
}));*/

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
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

require('./middlewares/passport')(passport);
indexAuth(app);


module.exports = app;