const route = require('express').Router();
const URL = '';

route.get('/', (req, res) => {
    res.render('pages/home');
});

module.exports = {
    URL,
    route,
};
