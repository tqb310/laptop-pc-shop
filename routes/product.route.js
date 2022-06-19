const express = require('express');
const router = express.Router();
const controller = require('../controllers/ProductController');

router.get('/:slug', controller.getProductPage);

module.exports = router;
