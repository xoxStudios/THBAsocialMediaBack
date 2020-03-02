const mongoose = require("mongoose");

const GroupSchema = new mongoose.Schema({
  UserID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  PostID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post"
  },
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
