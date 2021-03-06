const HttpError = require('../models/http-error');
const dummyUsers = require('../dummy_data/users');

const getUserById = (req, res, next) => {
  const userID = parseInt(req.params.id);
  const user = dummyUsers.find(user => user.id === userID)
  if (!user) {
    return next(
      new HttpError('User not found with that ID', 404)
    );
  }
  res.json({user})
}

exports.getUserById = getUserById;