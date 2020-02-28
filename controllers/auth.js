const User = require("../models/User");
const asyncHandler = require("../middleware/asyncHandler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = asyncHandler(async (req, res) => {
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
});

exports.login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  let user = await User.findOne({ email });
  let userPassword = await User.findOne({ email }).select("password");

  if (!user) {
    return res.status(400).json({ msg: "Invalid Credentials" });
  }

  let isValidPassword = await bcrypt.compare(password, userPassword.password);
  if (!isValidPassword) {
    return res.status(400).json({ msg: "Invalid Credentials" });
  }

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
});

exports.getUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");
  res.status(200).json(user);
});
