//extrait le routeur d'express
const { Router } = require('express');

//crée le routeur
const router = Router();

//montage des sous routes
//route produits/ami/products
router.use('/products', require('./products.routes'));
//exporte le routeur
module.exports = router;