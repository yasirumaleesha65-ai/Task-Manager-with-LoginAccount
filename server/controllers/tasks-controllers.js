const Joi = require("joi");
const Task = require("../models/tasks");
const joi = require("joi");

const TaskSchema = joi.object({
  title: joi.string().required(),
  description: joi.string().required(),
  status: joi.string().required(),
  userId: joi.string().required(),
  priority: joi.string().required(),
});

const addNewTask = async (req, res) => {
  const { title, description, status, userId, priority } = req.body;

  const { error } = TaskSchema.validate({
    title,
    description,
    status,
    userId,
    priority,
  });
  if (error) {
    return res.status(400).json({
      success: false,
      message: error.details[0].message,
    });
  }

  try {
    const newTask = await Task.create({
      title,
      description,
      status,
      userId,
      priority,
    });
    if (newTask) {
      return res.status(201).json({
        success: true,
        data: newTask,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Something went worng",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went worng",
    });
  }
};

const getAllTasks = async (req, res) => {
  const { id } = req.params;
  try {
    const extractAllTasks = await Task.find({ userId: id });
    if (extractAllTasks) {
      return res.status(200).json({
        success: true,
        tasksList: extractAllTasks,
      });
    } else {
      return res.status(401).json({
        success: false,
        message: "There is no tasks in the list",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "something went worng",
    });
  }
};

const updateTasks = async (req, res) => {
  const { title, description, status, priority, _id, userId } = await req.body;

  const { error } = TaskSchema.validate({
    title,
    description,
    status,
    userId,
    priority,
  });
  if (error) {
    return res.status(400).json({
      success: false,
      message: error.details[0].message,
    });
  }
  try {
    const updatedSchema = await Task.findByIdAndUpdate(
      { _id },
      {
        title,
        description,
        status,
        userId,
        priority,
      },
      { new: true }
    );
    if (updatedSchema) {
      return res.status(200).json({
        success: true,
        message: "Updated successfully",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

const deleteTasks = async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      const deletedItem = await Task.findByIdAndDelete(id);
      if (deletedItem) {
        return res.status(200).json({
          success: true,
          message: "Successfully deleted",
        });
      } else {
        return res.status(500).json({
          success: false,
          message: "Deletion Failed",
        });
      }
    } else {
      return res.status(400).json({
        success: false,
        message: "There is no id comming to the backend",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went worng in the server",
    });
  }
};

module.exports = { getAllTasks, addNewTask, deleteTasks, updateTasks };
