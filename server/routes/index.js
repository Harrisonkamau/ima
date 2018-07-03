const homeRoute = require('./home');

const router = app =>  {
  app.use('/api/', homeRoute);
  app.use('/api/index', homeRoute);
};

module.exports = router;
