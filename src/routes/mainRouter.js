const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainControllers');
const productController = require('../controllers/productControllers');

router.get('/', mainController.home);
router.get('/login', mainController.login);
router.get('/register', mainController.register);
router.get('/productCart', productController.productCart);
router.get('/productDetail', productController.productDetail);


module.exports = router