const User = require("../models/User");

// @desc      Get single user
// @route     GET /api/v1/users/:id
// @access    Private/Admin
const create = (req, res, next) => {
  let newUser = new User(req.body);

  newUser.save(err => {
    if (err) {
      console.log(err);
      return;
    } else {
      res.json({
        message: "User created"
      });
    }
  });
};

const getAll = (req, res, next) => {
  User.find({}, (err, users) => {
    if (err) {
      console.log(err);
      return;
    } else {
      res.json(users);
    }
  });
};

module.exports = { create, getAll };
