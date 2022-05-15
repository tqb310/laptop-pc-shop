const route = require('express').Router();
const URL = 'category';

const categoryController = require('./controllers');

route.get('/:url', categoryController.pageRender);

module.exports = {
    URL,
    route,
};
