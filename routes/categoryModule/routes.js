const route = require('express').Router();
const URL = 'category';

route.get('/:category', (req, res) => {
    console.log(req.params);
    res.render('pages/category', {
        category: req.params.category,
    });
});

module.exports = {
    URL,
    route,
};
