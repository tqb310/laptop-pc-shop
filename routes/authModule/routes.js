const route = require('express').Router();
const passport = require('passport');
const URL = 'account';
const authMiddleware = require('../../middlewares/auth');
const controller = require('./controllers');

route.get(
    '/login',
    // authMiddleware.isNotLoggedIn,
    controller.getLogin,
);

route.post(
    '/login',
    [
        // authMiddleware.isNotLoggedIn,
        passport.authenticate('local.signin', {
            failureRedirect: '/account/login',
            failureMessage: true,
        }),
    ],
    controller.postLogin,
);

route.get(
    '/register',
    authMiddleware.isNotLoggedIn,
    controller.getRegister,
);

route.post(
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

module.exports = {
    URL,
    route,
};
