const Cart = require('../models/Cart');

exports.getCartFromDBOrSession = async (req, res, next) => {
    let userCart;
    if (req.isAuthenticated()) {
        userCart = await Cart.findOne({
            userId: req.user.id,
        });
    }
    if (!userCart) {
        if (req.session.cart) {
            userCart = new Cart(req.session.cart);
        } else {
            userCart = new Cart({});
        }
    }
    req.userCart = userCart;
    next();
};
