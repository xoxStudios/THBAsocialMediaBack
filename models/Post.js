const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  UserID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  GroupID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Group"
  },
  text: {
    type: String,
    required: [true, "Text fehlt"]
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Post", PostSchema);
