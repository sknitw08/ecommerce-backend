const express = require('express');
const router = express.Router();

const {create} = require('../controllers/product');
const {requireSign, isAuth, isAdmin} = require('./../controllers/auth');
const {userById} = require('../controllers/user');
const {productById, read, remove, update, list, listSearch, listRelated, listCategories, listBySearch, photo} = require('../controllers/product');

router.get('/product/:productId', read);
router.post('/product/create/:userId', requireSign, isAuth, isAdmin, create);
router.delete('/product/:productId/:userId', requireSign, isAuth, isAdmin, remove);
router.put('/product/:productId/:userId', requireSign, isAuth, isAdmin, update);

router.get('/products', list);
router.get("/products/search", listSearch);
router.get('/products/related/:productId', listRelated);
router.get('/products/categories', listCategories);

router.post("/products/by/search", listBySearch);
router.get("/product/photo/:productId", photo);

router.param('userId', userById);
router.param('productId', productById);

module.exports = router;