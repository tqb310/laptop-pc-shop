const route = require('express').Router();
const URL = 'auth';

route.get('/', (req, res) => {
    res.render('login');
});

module.exports = {
    URL,
    route,
};
