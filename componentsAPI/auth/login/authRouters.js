const express = require('express');
const router = express.Router();
const controller = require('./authController');

router.get('/login', controller.authController);


module.exports = router;