const express = require('express');
const app = express();
const cors = require('cors');
// const chalk = require('chalk');
const bodyParser = require('body-parser');
const chalk = require('chalk');
const server = require('http').Server(app);

// custom modules
const { port } = require('./src/configs/config');
const routes = require('./src/routes/route');
const logger = require('./src/configs/logger');

// enable cors
app.use(cors());
app.options('*', cors());

// parse json
app.use(express.json());
// parse urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);
app.use((req, res, next) => {
  return res.status(400).send({
    status: false,
    message: 'Page not found',
  });
});

// server running
server.listen(port || 8080, () =>
  logger.info(`${chalk.magenta('server is running on port')} ${chalk.blue.bold(port ? port : 8080)}`)
);
