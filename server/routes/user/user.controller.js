const User = require("../../models/user.model");

async function httpRegisterUser(req, res) {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({
        status: "error",
        message: "Please provide all the fields",
      });
    } else {
      const userExists = await User.findOne({ email });

      if (userExists) {
        return res.status(400).json({
          status: "error",
          message: "User with this email already exist",
        });
      }

      const newUser = await User.create({
        username,
        email,
        password,
      });

      if (newUser) {
        return res.status(201).json({
          status: "success",
          user: {
            id: newUser._id,
            username: newUser.username,
            email: newUser.email,
          },
        });
      } else {
        return res.status(400).json({
          status: "error",
          message: "Something went wrong try later",
        });
      }
    }
  } catch (error) {
    return res.status(400).json({
      status: "error",
      error: error.message,
    });
  }
}

async function httpLoginUser(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        status: "error",
        message: "Please provide all the fields",
      });
    } else {
      const userFound = await User.findOne({ email });

      if (userFound && (await userFound.matchPassword(password))) {
        res.status(200).json({
          status: "success",
          user: {
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
          },
        });
      } else {
        return res.status(401).json({
          status: "error",
          message: "Invalid email or password",
        });
      }
    }
  } catch (error) {
    return res.status(400).json({
      status: "error",
      error: error.message,
    });
  }
}

module.exports = { httpRegisterUser, httpLoginUser };
