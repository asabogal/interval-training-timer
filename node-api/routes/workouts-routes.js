const express = require('express');

const router = express.Router();
const HttpError = require('../models/http-error');

const dummyWorkouts = require('../dummy_data/workouts');

router.get('/top_workouts', (req, res, next) => {
  const topWorkouts = dummyWorkouts.sort((a, b) =>(a.count > b.count) ? -1 : 1).slice(0, 1)
  if (topWorkouts.length === 0) {
    return next(
      new HttpError('Unexpected server error. Try again later.', 500)
    )
  }
  res.json({topWorkouts});
});

router.get('/:id', (req, res, next) => {
  const workoutID = parseInt(req.params.id);
  const workout = dummyWorkouts.find(wo => wo.id === workoutID);
  if (!workout) {
    return next(
      new HttpError('Workout not found with ID given', 404)
    );
  }
  res.json({workout});
});

router.get('/users/:id', (req, res, next) => {
  const userID = parseInt(req.params.id);
  const workouts = dummyWorkouts.filter(wo => wo.userID === userID);
  console.log(workouts)
  if (workouts.length === 0) {
    return next(
      new HttpError('No workouts found for given User', 404)
    )
  }
  res.json({workouts})
});


module.exports = router;