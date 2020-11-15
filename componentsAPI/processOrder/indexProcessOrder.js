const saveOrderInfoRouter = require('./saveOrderInfo/saveOrderInfoRouters');
const editTariffsInfoRouter = require('./editTariffsInfo/editTariffsInfoRouters');

let processOrder = (app) => {
    app.use('/api', saveOrderInfoRouter);
    app.use('/api', editTariffsInfoRouter);
};

module.exports = processOrder;

