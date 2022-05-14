const route = require('express').Router();
const URL = 'category';

const categoryController = require('./controllers');

route.get('/:category', categoryController.pageRender);

module.exports = {
    URL,
    route,
};
