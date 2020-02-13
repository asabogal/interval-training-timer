const express = require('express');

const router = express.Router();

router.get('/users', (req, res, next) => {
  console.log('GET USERS')
  res.json({
    message: 'GET USERS SUCCESS'
  })
});

module.exports = router;