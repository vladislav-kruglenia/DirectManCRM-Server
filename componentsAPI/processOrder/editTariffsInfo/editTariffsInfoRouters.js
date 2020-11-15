const express = require('express');
const router = express.Router();
const controller = require('./editTariffsInfoController');

router.post('/editTariffsInfo', controller.editTariffsInfo);

module.exports = router;