const express = require('express');
const router = express.Router();
const controller = require('./regController');

router.post('/login/saveUser', controller.saveUser);

module.exports = router;