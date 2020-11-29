const express = require('express');
const router = express.Router();
const controller = require('./getTariffsInfoController');

router.get('/getTariffsInfo', controller.getTariffsInfo);

module.exports = router;