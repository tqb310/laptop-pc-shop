const route = require('express').Router();
const URL = 'account';

route.get('/login', (req, res) => {
    res.render('login');
});

route.get('/register', (req, res) => {
    res.render('register');
});

module.exports = {
    URL,
    route,
};
