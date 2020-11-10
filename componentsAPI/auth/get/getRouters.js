const express = require('express');
const router = express.Router();
const controller = require('./getController');
const passport = require('passport');

router.get('/get-users',
    passport.authenticate('jwt', {session:false},null),
    controller.getUsers
);

module.exports = router;