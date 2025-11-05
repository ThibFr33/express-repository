const { Router } = require('express');
const productsController = require('../controllers/products.controller');

const router = Router();
//définir les endpoints

router.get('/test', productsController.test);

module.exports = router;