const mongoose = require("mongoose");

const GroupSchema = new mongoose.Schema({
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
    required: [true, "Gruppenbeschreibung fehlt"],
    minlength: 8
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Group", GroupSchema);
