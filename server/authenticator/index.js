const jwt = require('jsonwebtoken');

const authenticate = {
  token(req, res, next) {
    const token = req.headers['X-Acess-Headers'];

    if(token) {

    } else {
      console.log('Token not provided');
    }
  }
};

module.exports = authenticate;
