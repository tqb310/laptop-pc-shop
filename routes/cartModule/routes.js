const route = require('express').Router();
const URL = 'cart';

route.get('/', (req, res) => {
    res.render('pages/cart', { title: 'Users' });
});

module.exports = {
    URL,
    route,
};
