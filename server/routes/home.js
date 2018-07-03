const { Router } = require('express');
const router = Router();

router.get('/', (req, res) =>  {
  res.send({
    message: 'Welcome to IMA. Here we manage your inventories cleverly'
  });
});

module.exports = router;
