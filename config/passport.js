const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const UserModel = require('../models/User');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((userId, done) => {
    UserModel.findById(userId, (err, user) => {
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

                return done(null, user);
            } catch (error) {
                console.log(error);
                return done(error);
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

                return done(null, createdUser);
            } catch (error) {
                console.log(error);
                return done(error);
            }
        },
    ),
);
