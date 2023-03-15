const express = require('express');
const Router = express.Router();
const productController = require('../Controller/Product.Controller');



Router.get('/best-sell', productController.getBestSellProduct);
Router.get('/on-sell', productController.getOnSellProduct)
Router.patch('/update_product', productController.updateSingleProduct)

Router.post('/', productController.createProduct)
Router.get('/', productController.getProduct)

Router.get('/:id', productController.getSingleProduct)






module.exports = Router;