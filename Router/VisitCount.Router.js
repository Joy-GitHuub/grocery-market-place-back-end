const express = require('express');
const Router = express.Router();
const visitCountController = require('../Controller/VisitCount.Controller');


Router.put('/', visitCountController.visitCount)


module.exports = Router;