const homeRoute = require('./home.route');
const authRoute = require('./auth.route');
const cartRoute = require('./cart.route');
const categoryRoute = require('./category.route');
const paymentRoute = require('./payment.route');
const productRoute = require('./product.route');
const profileRoute = require('./profile.route');

function router(app) {
    app.use('/account', authRoute);
    app.use('/cart', cartRoute);
    app.use('/payment', paymentRoute);
    app.use('/category', categoryRoute);
    app.use('/product', productRoute);
    app.use('/profile', profileRoute);
    app.use('/', homeRoute);
}

module.exports = router;
