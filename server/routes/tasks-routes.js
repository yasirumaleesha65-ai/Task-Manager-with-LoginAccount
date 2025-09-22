const express = require("express");
const {
  addNewTask,
  getAllTasks,
  deleteTasks,
  updateTasks,
} = require("../controllers/tasks-controllers");

const TasksRoutes = express.Router();

TasksRoutes.get("/get-all-tasks/:id", getAllTasks);
TasksRoutes.post("/add-tasks", addNewTask);
TasksRoutes.delete("/delete-task/:id", deleteTasks);
TasksRoutes.put("/update-task", updateTasks);

module.exports = TasksRoutes;
