const route = require('express').Router();
const URL = 'cart';
const cartController = require('./controllers');
const cartMiddleware = require('./middlewares');

route.get('/', cartController.getCartPage);

route.get(
    '/add/:id',
    cartMiddleware.getCartFromDBOrSession,
    cartController.addToCart,
);

route.get(
    '/reduce/:id',
    cartMiddleware.getCartFromDBOrSession,
    cartController.reduceQuantity,
);

route.get(
    '/remove/:id',
    cartMiddleware.getCartFromDBOrSession,
    cartController.removeCart,
);
module.exports = {
    URL,
    route,
};
