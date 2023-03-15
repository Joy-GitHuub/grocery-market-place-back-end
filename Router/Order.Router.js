const express = require('express');
const Router = express.Router();
const orderController = require('../Controller/Order.Controller');



Router.get('/viewOrder/:id', orderController.getViewOrder)


Router.patch('/updateOrderStatus/:id', orderController.updateOrderStatus)

Router.post('/', orderController.createOrder)
Router.get('/', orderController.getOrder);


Router.get('/:email', orderController.getSingleUserOrder)



module.exports = Router;