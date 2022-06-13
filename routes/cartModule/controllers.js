const ProductService = require('../../services/ProductService');
const CartModel = require('../../models/Cart');

exports.getCartPage = (req, res, next) => {
    res.render('pages/cart', { title: 'Users' });
};

exports.addToCart = async (req, res, next) => {
    const productId = req.params.id;
    try {
        //Get the cart, either from DB or session
        const userCart = req.userCart || { items: [] };
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
            'Sản phẩm đã được thêm vào giỏ hàng',
        );
        res.redirect('/cart');
    } catch (error) {
        req.flash('error', error.message);
        res.redirect('back');
    }
};

exports.reduceQuantity = async (req, res, next) => {
    const productId = req.params.id;
    try {
        //Get the cart, either from DB or session
        const userCart = req.userCart || { items: [] };
        // console.log('USER_CART ', userCart);
        if (userCart.totalQty <= 1) {
            req.flash(
                'warning',
                'Sản phẩm phải đặt số lượng tối thiểu là 1',
            );
            return res.redirect('/cart');
        }
        //Add product
        const productDetail =
            await ProductService.getProductById(productId);
        const itemIndex = userCart.items.findIndex(item =>
            item.productId.equals(productId),
        );
        // console.log('ITEM_INDEX ', itemIndex);
        if (itemIndex !== -1) {
            userCart.items[itemIndex].qty--;
            userCart.totalQty--;
            userCart.totalCost -=
                productDetail.discountedPrice;
        } else {
            req.flash('error', 'Không tìm thấy sản phẩm');
            return res.redirect('/cart');
        }

        //If user logged in, update cart to user's cart
        if (req.isAuthenticated()) {
            userCart.userId = req.user.id;
            userCart.save();
        }
        //Update cart to session
        req.session.cart = userCart;

        req.flash('success', 'Đã giảm 1 sản phẩm');
        res.redirect('/cart');
    } catch (error) {
        req.flash('error', error.message);
        res.redirect('back');
    }
};

exports.removeCart = async (req, res, next) => {
    const productId = req.params.id;
    try {
        //Get the cart, either from DB or session
        const userCart = req.userCart || { items: [] };
        // console.log('USER_CART ', userCart);

        //Add product
        const productDetail =
            await ProductService.getProductById(productId);
        const itemIndex = userCart.items.findIndex(item =>
            item.productId.equals(productId),
        );
        // console.log('ITEM_INDEX ', itemIndex);
        if (itemIndex !== -1) {
            userCart.totalQty -=
                userCart.items[itemIndex].qty;
            userCart.totalCost -=
                productDetail.discountedPrice *
                userCart.items[itemIndex].qty;
            userCart.items.splice(itemIndex, 1);
        } else {
            req.flash('error', 'Không tìm thấy sản phẩm');
            return res.redirect('/cart');
        }

        if (userCart.totalQty > 0) {
            //If user logged in, update cart to user's cart
            if (req.isAuthenticated()) {
                userCart.userId = req.user.id;
                userCart.save();
            }
            //Update cart to session
            req.session.cart = userCart;
        } else {
            //If user logged in, update cart to user's cart
            if (req.isAuthenticated()) {
                CartModel.deleteOne({
                    userId: req.user.user.id,
                });
            }
            //Update cart to session
            req.session.cart = null;
        }

        req.flash(
            'success',
            'Đã xóa 1 sản phẩm khỏi giỏ hàng',
        );
        // res.redirect('/cart');
        res.status(200).json('ok');
    } catch (error) {
        req.flash('error', error.message);
        // res.redirect('back');
        res.status(500).json('error');
    }
};
