const route = require('express').Router();
const URL = 'product';

const productController = require('./controllers');

route.get('/:slug', (req, res) => {
    res.render('pages/product', {
        slug: req.params.slug,
    });
});

module.exports = {
    URL,
    route,
};
