const mongoose = require("mongoose");


const UserSchema = mongoose.Schema({
  id: {
    type: Number,
    required: [true, "User id is required"],
    unique: true,
  },
  todo: {
    type: String,
    required: [true, "ToDo is required"],
  },
  date: {
    type: String,
    default: "Daily Snooze",
  },
  time: {
    type: String,
  },
  contact: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
});

module.exports = mongoose.model("todos", UserSchema);