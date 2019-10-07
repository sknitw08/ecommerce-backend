const express = require('express');
const router = express.Router();

const {requireSign, isAuth} = require('./../controllers/auth');
const {generateToken, processPayment} = require('../controllers/braintree');
const {userById} = require('../controllers/user');

router.get('/braintree/getToken/:userId', requireSign, isAuth, generateToken);
router.post('/braintree/payment/:userId', requireSign, isAuth, processPayment);

router.param('userId', userById);

module.exports = router;