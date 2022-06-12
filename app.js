var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var session = require('express-session');
var indexRouter = require('./routes/index');
var mongoSessionStore = require('connect-mongodb-session')(
    session,
);
var flash = require('connect-flash');
var passport = require('passport');
var ProductService = require('./services/ProductService');
require('dotenv').config();

var app = express();

// Setup view engine
app.set(
    'views',
    path.join(__dirname, 'resources', 'views'),
);
app.set('view engine', 'pug');

//Using Logger
app.use(logger('dev'));

//Set payload parser (json & urlencoded)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Set public directory
app.use(express.static(path.join(__dirname, 'public')));

//Set session for every request
app.use(
    session({
        secret: process.env.SECRET_KEY,
        saveUninitialized: false,
        cookie: { maxAge: 1000 * 60 * 3600 },
        resave: false,
        store: new mongoSessionStore({
            uri: process.env.DATABASE_URI,
            collection: 'sessions',
        }),
    }),
);

//Set flash message
app.use(flash());

//Initilize passport
require('./config/passport');
app.use(passport.initialize());
app.use(passport.session());

//Global variables accross routes
app.use((req, res, next) => {
    try {
        if (req.user) res.locals.user = req.user;
        if (
            req.session.passport &&
            req.session.passport.user &&
            req.session.passport.user.cart
        )
            req.session.cart =
                req.session.passport.user.cart;
        if (req.session.cart) {
            let items = req.session.cart.items.map(
                async item => {
                    const productData =
                        await ProductService.getProductById(
                            item.productId,
                        );
                    productData.qty = item.qty;
                    return productData;
                },
            );
            Promise.all(items).then(productData => {
                const cart = {
                    ...req.session.cart,
                    items: productData,
                };
                console.log(cart);
                res.locals.cart = cart || { items: [] };
                return next();
            });
        } else {
            res.locals.cart = { items: [] };
            next();
        }
    } catch (error) {
        next(error);
        // res.redirect('/');
    }
});

//Set routing for admin panel
app.use('/admin', (req, res, next) => {
    res.sendFile(
        path.join(
            __dirname,
            'public',
            'dist',
            '/index.html',
        ),
    );
});

//Set routing for client sites
app.use('/', indexRouter);

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// Error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error =
        req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
module.exports = app;
