const mongoose = require("mongoose");

const GroupSchema = new mongoose.Schema({
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  ],
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post"
    }
  ],
  title: {
    type: String,
    required: [true, "Gruppentitel fehlt"]
  },
  theme: {
    type: String,
    required: [true, "Gruppenthema fehlt"],
    unique: true
  },
  description: {
    type: String,
    required: [true, "Gruppenbeschreibung fehlt"]
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Group", GroupSchema);
