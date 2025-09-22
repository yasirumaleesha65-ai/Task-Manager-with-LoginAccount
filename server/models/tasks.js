const mongoose = require("mongoose");

const TasksSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: String,
  priority: String,
  userId: String,
});

module.exports = mongoose.model("Task", TasksSchema);
