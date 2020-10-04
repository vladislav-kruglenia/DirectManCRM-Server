const authRouter = require('./login/authRouters');
const regRouter = require('./registation/registrationRouters')

let indexAuth = (app) => {
    app.use('/api', authRouter);
    app.use('/api', regRouter);
};

module.exports = indexAuth;

