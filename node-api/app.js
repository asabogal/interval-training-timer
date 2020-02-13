const express = require('express');
const bodyParser = require('body-parser');

const workoutsRoutes = require('./routes/workouts-routes');
const usersRoutes = require('./routes/users-routes');

const app = express();

app.use(workoutsRoutes);
app.use(usersRoutes);

app.listen(5000);