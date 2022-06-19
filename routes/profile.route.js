const express = require('express');
const router = express.Router();
const {
    getProfilePage,
} = require('../controllers/ProfileController');

router.get('/', getProfilePage);

module.exports = router;
