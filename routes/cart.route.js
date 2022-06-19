const express = require('express');
const router = express.Router();
const controller = require('../controllers/CartController');
const cartMiddleware = require('../middlewares/cart.middleware');

router.get('/', controller.getCartPage);

router.get(
    '/add/:id',
    cartMiddleware.getCartFromDBOrSession,
    controller.addToCart,
);

router.get(
    '/reduce/:id',
    cartMiddleware.getCartFromDBOrSession,
    controller.reduceQuantity,
);

router.get(
    '/remove/:id',
    cartMiddleware.getCartFromDBOrSession,
    controller.removeCart,
);

module.exports = router;
