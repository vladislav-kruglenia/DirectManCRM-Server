const logRouter = require('./login/logRouters');
const regRouter = require('./registation/registrationRouters');
const getRouter = require('./get/getRouters');
const refreshTokenRouter = require('./refreshTokenValid/refreshTokenRouters');
const logOutRouter = require('./logOut/logOutRouters');

let indexAuth = (app) => {
    app.use('/api', logRouter);
    app.use('/api', regRouter);
    app.use('/api', getRouter);
    app.use('/api', refreshTokenRouter);
    app.use('/api', logOutRouter);
};

module.exports = indexAuth;

