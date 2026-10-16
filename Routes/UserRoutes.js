const { RegisterUser,LoginUser, getOneUser ,getUsers} = require("../Controllers/userController");
const express = require("express");

const userRouter = express.Router();

userRouter.post("/register", RegisterUser);
userRouter.post("/login",LoginUser)
userRouter.get('/getCurrentUser/:id',getOneUser)
userRouter.get('/getUsers',getUsers)

module.exports= userRouter
