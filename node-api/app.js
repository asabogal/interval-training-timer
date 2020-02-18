const express = require('express');
const bodyParser = require('body-parser');

const workoutsRoutes = require('./routes/workouts-routes');
const usersRoutes = require('./routes/users-routes');

const app = express();

// Workouts router
app.use('/api/workouts', workoutsRoutes);

// Users router
app.use('/api/users', usersRoutes);

// Error Handler
app.use((error, req, res, next) => {
  if (res.headerSent) return next(error);

  res.status(error.code || 500)
  res.json({
    message: error.message || 'An unknown error ocurred'
  });
})

app.listen(5000);