const express = require('express');
const bodyParser = require('body-parser');

const workoutsRoutes = require('./routes/workouts-routes');
const usersRoutes = require('./routes/users-routes');

const app = express();

// Workouts router
app.use('/api/workouts', workoutsRoutes);

// Users router
app.use('/api/users', usersRoutes);

app.listen(5000);