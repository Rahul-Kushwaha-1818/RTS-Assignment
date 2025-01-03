const express = require("express");
const {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
} = require("../Controller/TodoController");

const router = express.Router();

// Routes
router.post("/create-task", createTask);
router.get("/tasks", getAllTasks);
router.get("/task/:id", getTaskById);
router.patch("/task/:id", updateTask);
router.delete("/task/:id", deleteTask);

module.exports = router;
