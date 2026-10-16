require("dotenv").config()
const express = require ("express")
const cors= require("cors")

const ConnectDb = require("./Config/ConnectDb")

const userRouter = require('./Routes/UserRoutes')
const TaskRouter = require('./Routes/TaskRoutes')

ConnectDb()







const app = express()

app.use(express.json())

app.use(cors())

app.get("/",(req,res)=>{
    res.send("task flow backend server is running")

})

app.use('/user',userRouter)

app.use('/task',TaskRouter)





app.listen(3000,()=>{
    console.log("Task flow server is connected");
    
})