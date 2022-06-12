const route = require('express').Router();
const URL = 'cart';
const cartController = require('./controllers');

route.get('/', cartController.getCartPage);

route.get('/add/:id', cartController.addToCart);

module.exports = {
    URL,
    route,
};
