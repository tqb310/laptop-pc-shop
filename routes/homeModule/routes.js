const route = require('express').Router();
const URL = '';
const homeController = require('./controllers');
route.get('/', homeController.homeRender);

module.exports = {
    URL,
    route,
};
