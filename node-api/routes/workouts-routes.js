const express = require('express');
const router = express.Router();

const workoutsController = require('../controllers/workouts_controller');

router.get('/top_workouts', workoutsController.getTopWorkouts);

router.get('/:id', workoutsController.getWorkoutByID);

router.get('/users/:id', workoutsController.getWorkoutsByUserID);

module.exports = router;