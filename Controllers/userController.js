const {
  Register,
  Login,
  fetchUser,
  getAllUsers,
} = require("../Services/userService");
const jwt = require("jsonwebtoken");

async function RegisterUser(req, res) {
  try {
    const { name, email, password } = req.body;

    const user = await Register(name, email, password);

    res.status(200).json({
      message: "Registration Successful",
      user,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
}

async function LoginUser(req, res) {
  try {
    const { email, password } = req.body;

    const oldUser = await Login(email, password);

    const token = jwt.sign(
      {
        id: oldUser._id,
      },
      process.env.JWT_SECRET,
    );

    res.status(200).json({
      message: "Login Successful",
      userId: oldUser._id,
      token,
      role: oldUser.role,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
}

async function getOneUser(req, res) {
  try {
    const { id } = req.params;

    const currentUser = await fetchUser(id);

    res.status(200).json({
      message: "User fetched Successfully",

      currentUser,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
}

async function getUsers(req, res) {
  try {
    

    const users = await getAllUsers();
    

    res.status(200).json({
      message: "fetched all users successfully",
      users,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
}

module.exports = { RegisterUser, LoginUser, getOneUser , getUsers };
