const express = require('express');

const router = express.Router();

const dummyWorkouts = require('../dummy_data/workouts');

router.get('/users/:id', (req, res, next) => {
  const userID = parseInt(req.params.id);
  const workouts = dummyWorkouts.filter(wo => wo.userID === userID);
  console.log({workouts})
  res.json({workouts})
});

router.get('/top_workouts', (req, res, next) => {
  const topWorkouts = dummyWorkouts.sort((a, b) =>(a.count > b.count) ? -1 : 1).slice(0, 1)
  res.json({topWorkouts});
});

router.get('/:id', (req, res, next) => {
  const workoutID = parseInt(req.params.id);
  const workout = dummyWorkouts.find(wo => wo.id === workoutID);
  res.json({workout});
});

module.exports = router;