const express = require("express")

const TaskRouter = express.Router()
const {createTask,AllTask ,userTask ,deletedTask,getOneTask,editTasks}=require('../Controllers/taskController')

TaskRouter.post('/createTask',createTask)
TaskRouter.get('/getTask',AllTask)
TaskRouter.get('/getUserTask/:email',userTask)
TaskRouter.delete("/taskDelete/:id" ,deletedTask)
TaskRouter.get('/getOneTask/:id',getOneTask)
TaskRouter.put('/editTask/:id',editTasks)

module.exports = TaskRouter