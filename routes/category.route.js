const express = require('express');
const router = express.Router();
const {
    getCategoryPage,
} = require('../controllers/CategoryController');

router.get('/:categoryId', getCategoryPage);

module.exports = router;
