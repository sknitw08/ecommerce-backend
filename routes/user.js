const express = require('express');
const router = express.Router();

const {requireSign, isAuth, isAdmin} = require('./../controllers/auth');
const {userById, read, update, purchaseHistory} = require('../controllers/user');

router.get("/secret/:userId", requireSign, isAuth, (req, res) => {
    res.json({
        user: req.profile
    });
});

router.get('/user/:userId', requireSign, isAuth, read);
router.put('/user/:userId', requireSign, isAuth, update);
router.get('/orders/by/user/:userId', requireSign, isAuth, purchaseHistory);

router.param('userId', userById);

module.exports = router;