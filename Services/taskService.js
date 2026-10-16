const User = require("../Model/UserSchema");
const Task = require("../Model/TaskSchema");

async function TaskCreate(props) {
  const checkUser = await User.findOne({
    email: props.assigneeEmail,
  });

  if (!checkUser) {
    throw new Error("Invalid email");
  }

  const taskCreate = await Task.create({
    title: props.title,
    description: props.description,
    assigneeEmail: props.assigneeEmail,
    priority: props.priority,
    dueDate: props.dueDate,
  });

  return taskCreate;
}

async function getAllTask() {
  const allTask = await Task.find().sort({ createdAt: -1 });

  return allTask;
}

async function oneTask(id) {
  const getOneTask = await Task.findById(id);

  return getOneTask;
}

async function getUserTask(email) {
  const getOneTask = await Task.find({
    assigneeEmail: email,
  }).sort({ createdAt: -1 });

  return getOneTask;
}

async function DeleteTask(id) {
  const deletedTask = await Task.findByIdAndDelete(id);

  if (!deletedTask) {
    throw new Error("Task not found");
  }

  return deletedTask;
}

async function updateTask(id,data) {
  const editTask = await Task.findByIdAndUpdate(id,
    data,
    {
      new: true,
      runValidators: true
    }
  );

  return editTask;
}

module.exports = { TaskCreate, getAllTask, getUserTask, DeleteTask, oneTask ,updateTask};
