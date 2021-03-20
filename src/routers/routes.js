const express = require('express')
const routes = express.Router();

const ProductController = require('../controlers/Product/ProductController')

routes.get('/products', ProductController.index);
routes.get('/product/:id', ProductController.show);
routes.put('/products-update/:id', ProductController.update);
routes.post('/product-register', ProductController.store);
routes.delete('/product-destroy/:id', ProductController.destroy);

module.exports = routes;