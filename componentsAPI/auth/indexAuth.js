const logRouter = require('./login/logRouters');
const regRouter = require('./registation/registrationRouters');
const getRouter = require('./get/getRouters');

let indexAuth = (app) => {
    app.use('/api', logRouter);
    app.use('/api', regRouter);
    app.use('/api', getRouter);
};

module.exports = indexAuth;

