const saveOrderInfoRouter = require('./saveOrderInfo/saveOrderInfoRouters');
const editTariffsInfoRouter = require('./editTariffsInfo/editTariffsInfoRouters');
const getTariffsInfoRouter = require('./getTariffsInfo/getTariffsInfoRouters');

let processOrder = (app) => {
    app.use('/api', saveOrderInfoRouter);
    app.use('/api', editTariffsInfoRouter);
    app.use('/api', getTariffsInfoRouter);
};

module.exports = processOrder;

