const router = require('express').Router();
const calculateRouter = require('./calculate.route');

router.use('/calculate', calculateRouter);

module.exports = router;
