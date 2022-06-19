const express = require('express');
const router = express.Router();
const controller = require('../controllers/AuthController');
const authMiddleware = require('../middlewares/auth');
const passport = require('passport');

router.get(
    '/login',
    authMiddleware.isNotLoggedIn,
    controller.getLoginPage,
);

router.post(
    '/login',
    [
        authMiddleware.isNotLoggedIn,
        passport.authenticate('local.signin', {
            failureRedirect: '/account/login',
            failureMessage: true,
        }),
    ],
    controller.postLogin,
);

router.get(
    '/register',
    authMiddleware.isNotLoggedIn,
    controller.getRegisterPage,
);

router.post(
    '/register',
    [
        authMiddleware.isNotLoggedIn,
        passport.authenticate('local.signup', {
            failureRedirect: '/account/register',
            failureMessage: true,
        }),
    ],
    controller.postRegister,
);

router.get(
    '/logout',
    authMiddleware.isLoggedIn,
    controller.getLogout,
);

module.exports = router;
