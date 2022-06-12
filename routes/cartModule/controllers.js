const Cart = require('../../models/Cart');
const ProductService = require('../../services/ProductService');

exports.getCartPage = (req, res, next) => {
    // console.log(res.locals.cart);
    res.render('pages/cart', { title: 'Users' });
};

exports.addToCart = async (req, res, next) => {
    const productId = req.params.id;
    try {
        //Get the cart, either from DB or session
        let userCart;
        if (req.isAuthenticated()) {
            userCart = await Cart.findOne({
                userId: req.user.id,
            });
        }
        if (!userCart) {
            if (
                req.session.passport &&
                req.session.passport.user &&
                req.session.cart
            ) {
                userCart = new Cart(req.session.cart);
            } else {
                userCart = new Cart({});
            }
        }
        // console.log('USER_CART ', userCart);

        //Add product
        const productDetail =
            await ProductService.getProductById(productId);
        const itemIndex = userCart.items.findIndex(item =>
            item.productId.equals(productId),
        );
        // console.log('ITEM_INDEX ', itemIndex);
        if (itemIndex !== -1) {
            userCart.items[itemIndex].qty++;
        } else {
            userCart.items.push({ productId, qty: 1 });
        }
        userCart.totalQty++;
        userCart.totalCost += productDetail.discountedPrice;

        //If user logged in, add cart to user's cart
        if (req.isAuthenticated()) {
            userCart.userId = req.user.id;
            userCart.save();
        }

        //Add cart to session
        req.session.cart = userCart;

        req.flash(
            'success',
            'San pham da duoc them vao gio hang',
        );
        res.redirect('/cart');
    } catch (error) {
        req.flash('error', error.message);
        res.redirect('back');
    }
};
