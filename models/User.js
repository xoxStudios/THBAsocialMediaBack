const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Username fehlt"]
  },
  email: {
    type: String,
    required: [true, "Useremail fehlt"],
    unique: true
  },
  password: {
    type: String,
    required: [true, "Userpassword fehlt"],
    minlength: 8,
    select: false
  },
  role: {
    type: String,
    enum: ["user", "super"],
    default: "user"
  },
  groups: {
    type: Array
  },
  posts: {
    type: Array
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("User", UserSchema);
