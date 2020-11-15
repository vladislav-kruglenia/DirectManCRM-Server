const express = require('express');
const router = express.Router();
const controller = require('./saveOrderInfoController');

router.post('/saveOrderInfo', controller.saveOrderInfo);

module.exports = router;