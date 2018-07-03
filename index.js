const server = require('./server/server');

const app = {
  init() {
    // start server
    server.init();
  }
};

// start app
app.init();
