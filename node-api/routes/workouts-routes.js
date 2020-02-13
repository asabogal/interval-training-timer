const express = require('express');

const router = express.Router();

router.get('/workouts', (req, res, next) => {
  console.log('GET WORKOUTS')
  res.json(
    {
      message: 'GET WORKOUTS SUCCESS'
    }
  )
});

module.exports = router;