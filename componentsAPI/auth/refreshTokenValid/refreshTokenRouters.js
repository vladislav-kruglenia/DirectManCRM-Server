const express = require('express');
const router = express.Router();
const controller = require('./refreshTokenController');

router.post('/refresh-token-is-valid', controller.refreshTokenController);



module.exports = router;