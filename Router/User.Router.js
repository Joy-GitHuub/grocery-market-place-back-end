const express = require('express');
const Router = express.Router();
const userController = require('../Controller/User.Controller');




Router.get('/admin/:email', userController.getAdminCheck)

Router.post('/', userController.createUser)
Router.get('/', userController.getAllUser);

Router.patch('/statusUpdate/:id', userController.updateUserStatus);

Router.delete('/userDelete/:id', userController.deleteSingleUser)

module.exports = Router;