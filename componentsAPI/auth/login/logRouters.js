const express = require('express');
const router = express.Router();
const controller = require('./logController');

router.post('/login', controller.logController);


module.exports = router;