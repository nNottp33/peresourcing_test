const calculateRouter = require('express').Router();
const calculateController = require('../controllers/calculate.controller');

// methods GET
calculateRouter.get('/fibonacci', calculateController.calculateFibonacci);

module.exports = calculateRouter;
