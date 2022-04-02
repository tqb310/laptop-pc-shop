const route = require('express').Router();
const URL = 'users';

route.get('/', (req, res) => {
  res.render('index', { title: 'Users' });
});

module.exports = {
  URL,
  route,
};
