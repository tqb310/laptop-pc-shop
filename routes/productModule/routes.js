const route = require('express').Router();
const URL = 'product';

const productController = require('./controllers');

route.get('/:slug', productController.pageRender);

module.exports = {
    URL,
    route,
};
