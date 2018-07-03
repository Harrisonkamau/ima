/**
 * Configure Express app middleware
 */

const bodyParser = require('body-parser');
const logger = require('morgan');
const router = require('../routes');

const expressConfig = app => {
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());

  // log requests to the console in morgan's dev format (colored output)
  app.use(logger('dev'));
  router(app);
};

module.exports = expressConfig;
