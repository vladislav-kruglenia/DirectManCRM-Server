const express = require('express');
const router = express.Router();
const controller = require('./logOutController');
const passport = require('passport');

router.post('/logout',
    passport.authenticate('jwt', {session:false},null),
    controller.logOutController);

module.exports = router;