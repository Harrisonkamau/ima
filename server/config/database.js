if (!process.env.MONGODB_URI) {
  require('dotenv').config();
};

const mongoose = require('mongoose');
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/ami';

const dbConnect = _ => {
  mongoose.connect(dbURI);
  const dbConnection = mongoose.connection;
  // handle error in connection
  dbConnection.on('error', error => console.error(error));
  /*
  * success in connecting - use once not on:
  * EventEmitter.once registers a one-time event & only invoked when the event fires next time
  */

  dbConnection.once('open', _ => console.info('Successfully connected to db'));
};

module.exports = dbConnect;
