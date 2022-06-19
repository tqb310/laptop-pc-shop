const CartModel = require('../models/Cart');

//[GET] '/account/login'
exports.getLoginPage = (req, res, next) => {
    res.render('pages/login');
};

//[POST] '/account/login'
exports.postLogin = async (req, res) => {
    try {
        const userCart = await CartModel.findOne({
            userId: req.user.userId,
        });

        if (
            req.session.passport &&
            req.session.passport.user &&
            req.session.passport.user.cart
        ) {
            if (userCart) {
                // Add user's cart to session
                await userCart.concatCart(
                    req.session.passport.user.cart,
                );
                // Add session cart to user's cart
                req.session.cart = userCart;
            } else {
                const createdCart = new CartModel(
                    req.session.passport.user.cart,
                );
                createdCart.userId = req.user.user.id;
                createdCart.save();
            }
        } else {
            if (userCart) {
                req.session.cart = userCart;
            }
        }

        // Redirect to the previous URL
        if (req.session.oldUrl) {
            let oldUrl = req.session.oldUrl;
            req.session.oldUrl = '';
            res.redirect(oldUrl);
        } else {
            res.redirect('/');
        }
    } catch (error) {
        req.flash('error', error.message);
        res.redirect('back');
    }
};

//[GET] '/account/register'
exports.getRegisterPage = (req, res, next) => {
    res.render('pages/register');
};

//[POST] '/account/register'
exports.postRegister = async (req, res) => {
    try {
        //If there is a cart session, save it to the user's cart in DB
        if (req.session.cart) {
            const cart = new CartModel(req.session.cart);
            cart.userId = req.user.id;
            cart.save();
        }
        // Redirect to the previous URL
        if (req.session.oldUrl) {
            let oldUrl = req.session.oldUrl;
            req.session.oldUrl = '';
            res.redirect(oldUrl);
        } else {
            res.redirect('/');
        }
    } catch (error) {
        req.flash('error', error.message);
        res.redirect('back');
    }
};

//[GET] '/account/logout'
exports.getLogout = (req, res, next) => {
    req.logout(err => {
        if (err) return next(err);
        res.redirect('/');
    });
    // req.session.cart = null;
};
