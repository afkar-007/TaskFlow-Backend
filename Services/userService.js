const User = require("../Model/UserSchema");
const bcrypt = require("bcrypt");

async function Register(name, email, password) {
  const existingName = await User.findOne({ name });

  if (existingName) {
    throw new Error(" User name already exists change user name");
  }

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new Error("E-mail already exists change e-mail   ");
  }

  const passHash = await bcrypt.hash(password, 10);

  const NewUser = await User.create({
    name,
    email,
    password: passHash,
  });

  return NewUser;
}

async function Login(email, password) {
  const oldUser = await User.findOne({ email });

  if (!oldUser) {
    throw new Error("Invalid E-mail  or password ");
  }

  const CheckPass = await bcrypt.compare(password, oldUser.password);

  if (!CheckPass) {
    throw new Error("Invalid E-mail  or password");
  }

  return oldUser;
}

async function fetchUser(id) {
  const getUser = await User.findById(id).select("-password")

  if (!getUser) {
    throw new Error("User not fetched Successfully");
  }

  return getUser;
}


async function getAllUsers() {

  const allUser= await User.find().select("-password").sort({createdAt:-1})

  return allUser




  
}














module.exports = { Register, Login, fetchUser , getAllUsers };
