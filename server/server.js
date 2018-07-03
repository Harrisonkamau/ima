'use strict';
const config = require('./config');
const express = require('express');
const app = express();

let server = {};
/**
 * connects to the db
 * sets up auth strategies
 * connects to server
 */

server.init = _ => {
  // connect to db
  config.db();
  // config application middleware
  config.middleware(app);
  // start server
  server.expressServer();
}

server.expressServer = _ => {
  app.listen(config.port, _ => {
    console.log(`Server running on http://localhost/${config.port}`);
  });
}

module.exports = server;
