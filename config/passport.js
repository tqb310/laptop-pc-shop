const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const UserModel = require('../models/User');

passport.serializeUser((result, done) => {
    done(null, {
        userId: result.user.id,
        cart: result.cart || {},
    });
});

passport.deserializeUser((result, done) => {
    UserModel.findById(result.userId, (err, user) => {
        done(null, user);
    });
});

passport.use(
    'local.signin',
    new localStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true,
        },
        async (req, email, password, done) => {
            try {
                const user = await UserModel.findOne({
                    email,
                });
                if (!user) {
                    return done(
                        null,
                        false,
                        req.flash(
                            'error',
                            "User doesn't exist",
                        ),
                    );
                }
                if (!user.validatePassword(password)) {
                    return done(
                        null,
                        false,
                        req.flash(
                            'error',
                            'Wrong password',
                        ),
                    );
                }
                let result = {
                    user,
                };
                if (req.session.cart) {
                    result.cart = req.session.cart;
                }
                return done(null, result);
            } catch (error) {
                console.log(error);
                return done(error, false);
            }
        },
    ),
);

passport.use(
    'local.signup',
    new localStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true,
        },
        async (req, email, password, done) => {
            try {
                const user = await UserModel.findOne({
                    email,
                });

                if (user) {
                    return done(
                        null,
                        false,
                        req.flash(
                            'error',
                            'Email already exist',
                        ),
                    );
                }
                if (
                    password !== req.body.verifiedPassword
                ) {
                    return done(
                        null,
                        false,
                        req.flash(
                            'error',
                            'Password must match',
                        ),
                    );
                }

                const createdUser = new UserModel();
                createdUser.firstName = req.body.firstName;
                createdUser.lastName = req.body.lastName;
                createdUser.email = email;
                createdUser.password = password;
                await createdUser.save();
                let result = {
                    user: createdUser,
                };
                if (req.session.cart) {
                    result.cart = req.session.cart;
                }
                return done(null, result);
            } catch (error) {
                console.log(error);
                return done(error, false);
            }
        },
    ),
);
