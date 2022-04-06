const route = require('express').Router();
const URL = 'account';

route.get('/login', (req, res) => {
    res.render('pages/login');
});

route.get('/register', (req, res) => {
    res.render('pages/register');
});

module.exports = {
    URL,
    route,
};
