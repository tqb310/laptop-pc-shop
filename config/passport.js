const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const UserModel = require('../models/User');

passport.serializeUser((result, done) => {
    console.log('serial', result);
    done(null, result);
});

passport.deserializeUser((result, done) => {
    UserModel.findById(result.userId, (err, user) => {
        if (err) done(err);
        else done(null, user);
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
                            'Tài khoản không tồn tại',
                        ),
                    );
                }
                if (!user.validatePassword(password)) {
                    return done(
                        null,
                        false,
                        req.flash(
                            'error',
                            'Mật khẩu không đúng',
                        ),
                    );
                }
                let result = {
                    userId: user.id,
                };
                if (req.session.cart) {
                    result.cart = req.session.cart;
                }
                return done(null, result);
            } catch (error) {
                // console.log(error);
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
                            'Email đã đăng ký',
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
                            'Mật khẩu không khớp',
                        ),
                    );
                }

                const createdUser = new UserModel();
                createdUser.firstName = req.body.firstName;
                createdUser.lastName = req.body.lastName;
                createdUser.email = email;
                createdUser.password = password;
                const resUser = await createdUser.save();
                let result = {
                    userId: resUser.id,
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
