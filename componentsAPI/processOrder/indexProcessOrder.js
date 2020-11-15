const saveOrderInfoRouter = require('./saveOrderInfo/saveOrderInfoRouters');

let processOrder = (app) => {
    app.use('/api', saveOrderInfoRouter);
};

module.exports = processOrder;

