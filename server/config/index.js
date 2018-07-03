const db = require('./database');
const middleware = require('./middleware');
const port = process.env.PORT || 4000;


const config = {
  db,
  middleware,
  port
};

module.exports = config;
