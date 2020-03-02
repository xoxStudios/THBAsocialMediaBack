const Group = require("../models/Group");
const User = require("../models/User");
const asyncHandler = require("../middleware/asyncHandler");

exports.setGroup = asyncHandler(async (req, res) => {
  const { title, theme, description } = req.body;

  // check if user exists
  let group = await Group.findOne({ title });
  if (group) {
    return res.status(400).json({ msg: "Group already exists" });
  }

  group = new Group({
    title,
    theme,
    description
  });

  await group.save();
  res.status(200).json(group);
});

exports.getGroups = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");
  res.status(200).json(user);
});
