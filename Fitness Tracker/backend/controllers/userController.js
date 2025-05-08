import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

const createToken = (_id, email) => {
  return jwt.sign({ _id, email }, process.env.SECRET, { expiresIn: "3d" });
};

// login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id, user.email);
    res.status(200).json({
      user: {
        firstName: user.firstName,
        middleName: user.middleName,
        lastName: user.lastName,
      },
      message: "User logged in successfully",
      accessToken: token,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// signup user
const signUpUser = async function (req, res) {
  const { firstName, middleName, lastName, email, password } = req.body;
  try {
    const user = await User.signup(
      firstName,
      middleName,
      lastName,
      email,
      password
    );
    const token = createToken(user._id, user.email);
    res.status(200).json({
      user: {
        firstName: user.firstName,
        middleName: user.middleName,
        lastName: user.lastName,
      },
      message: "User created successfully",
      accessToken: token,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export { loginUser, signUpUser };
