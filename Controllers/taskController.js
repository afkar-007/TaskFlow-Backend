const {
  TaskCreate,
  getAllTask,
  getUserTask,
  DeleteTask,
  oneTask,
  updateTask,
} = require("../Services/taskService");

const createTask = async (req, res) => {
  try {
    const { title, description, assigneeEmail, priority, dueDate } = req.body;

    const props = { title, description, assigneeEmail, priority, dueDate };

    const task = await TaskCreate(props);

    res.status(200).json({
      message: "Task created Successfully",
      task,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const AllTask = async (req, res) => {
  try {
    const getTask = await getAllTask();

    res.status(200).json({
      message: "all tasks fetched Successfully",
      getTask,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const getOneTask = async (req, res) => {
  try {
    const { id } = req.params;
    const getTask = await oneTask(id);

    res.status(200).json({
      message: "one task fetched Successfully",
      getTask,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const userTask = async (req, res) => {
  try {
    const { email } = req.params;
    const userTaskTotal = await getUserTask(email);

    res.status(200).json({
      message: "user tasks fetched successfully",
      userTaskTotal,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const deletedTask = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteTask = await DeleteTask(id);

    res.status(200).json({
      message: "task deleted Successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const editTasks = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const response = await updateTask(id, data);

    res.status(200).json({
      message: "Update successfully",
      task: response,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = { createTask, AllTask, userTask, deletedTask, getOneTask ,editTasks};
