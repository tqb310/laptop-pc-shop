const express = require('express');
const router = express.Router();
const {
    getPaymentPage,
} = require('../controllers/PaymentController');

router.get('/', getPaymentPage);

module.exports = router;
