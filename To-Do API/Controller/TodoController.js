const Todo = require("../Model/TodoModel");

// Create a Task
const createTask = async (req, res) => {
  const { title, description } = req.body;
  try {
    const newTask = new Todo({
      title,
      description,
    });
    await newTask.save();
    res
      .status(201)
      .json({ message: "Task created successfully!", task: newTask });
  } catch (error) {
    console.error("Error in createTask:", error);
    res
      .status(500)
      .json({ message: "Something went wrong. Please try again later." });
  }
};

// Get All Tasks
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Todo.find();
    res.status(200).json(tasks);
  } catch (error) {
    console.error("Error in getAllTasks:", error);
    res
      .status(500)
      .json({ message: "Something went wrong. Please try again later." });
  }
};

// Get a Single Task by ID
const getTaskById = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Todo.findById(id);
    if (!task) {
      return res.status(404).json({ message: "Task not found." });
    }
    res.status(200).json(task);
  } catch (error) {
    console.error("Error in getTaskById:", error);
    res
      .status(500)
      .json({ message: "Something went wrong. Please try again later." });
  }
};

// Update a Task

const updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, status } = req.body;

  try {
    // Find task by ID and update the fields that are provided in the request body
    const updatedTask = await Todo.findByIdAndUpdate(
      id,
      { title, description, status },
      { new: true, runValidators: true } // Return the updated document and validate
    );

    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found." });
    }

    res
      .status(200)
      .json({ message: "Task updated successfully!", task: updatedTask });
  } catch (error) {
    console.error("Error in updateTask:", error);
    res
      .status(500)
      .json({ message: "Something went wrong. Please try again later." });
  }
};

// Delete a Task
const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTask = await Todo.findByIdAndDelete(id);
    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found." });
    }
    res.status(200).json({ message: "Task deleted successfully!" });
  } catch (error) {
    console.error("Error in deleteTask:", error);
    res
      .status(500)
      .json({ message: "Something went wrong. Please try again later." });
  }
};

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
};
