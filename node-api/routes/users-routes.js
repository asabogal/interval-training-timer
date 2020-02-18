const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users_controller');

router.get('/:id', usersController.getUserById);

module.exports = router;