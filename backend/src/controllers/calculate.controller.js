const logger = require('../configs/logger');

const calculateFibonacci = (req, res) => {
  try {
    let { number } = req.query;

    if (number < 0) {
      number = 0;
    }

    let x = 0,
      y = 1,
      z = number;

    for (let i = 0; i < number; i++) {
      z = x + y;
      x = y;
      y = z;
    }

    logger.info(`[DEBUG] Result: ${z}`);

    return res.status(200).send({
      status: true,
      message: 'Success',
      result: {
        fibonucci: z,
      },
    });
  } catch (error) {
    return res.status(500).send({
      status: false,
      message: 'Server Internal Error',
    });
  }
};

module.exports = {
  calculateFibonacci,
};
