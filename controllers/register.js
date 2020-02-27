const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { check, validationResult } = require("express-validator");
const { asyncHandler } = require("../middleware/asyncHandler");
const User = require("../models/User");

const register = asyncHandler(async (req, res, next) => {
  [
    check("name", "Please add name")
      .not()
      .isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 })
  ],

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const password = await bcrypt.hash(req.body.password, 10);
  const { name, email } = req.body;

  // check if user exists
  let user = await User.findOne({ email });
  if (user) {
    return res.status(400).json({ msg: "User already exists" });
  }

  user = new User({
    name,
    email,
    password
  });

  await user.save();

  const payload = {
    user: {
      id: user.id
    }
  };

  jwt.sign(
    payload,
    process.env.JWT_SECRET,
    {
      expiresIn: 360000
    },
    (err, token) => {
      if (err) throw err;
      res.json({ token });
    }
  );
})



module.exports = { register };
