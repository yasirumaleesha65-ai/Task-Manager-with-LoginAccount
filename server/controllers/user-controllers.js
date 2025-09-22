const joi = require("joi");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const registerSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
});

const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_KEY, {
    expiresIn: 3 * 24 * 60 * 60,
  });
};

const logInSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
});

const registerUser = async (req, res, next) => {
  const { name, email, password } = await req.body;

  const { error } = registerSchema.validate({ name, email, password });
  if (error) {
    return res.status(400).json({
      success: false,
      message: error.details[0].message,
    });
  }
  try {
    const checkEmail = await User.findOne({ email });
    if (checkEmail) {
      return res.status(400).json({
        success: false,
        message: "This email already exists try with another one",
      });
    } else {
      const hashPassword = await bcrypt.hash(password, 12);

      const newlyCreatedUser = await User.create({
        name,
        email,
        password: hashPassword,
      });
      if (newlyCreatedUser) {
        const token = generateToken(newlyCreatedUser?._id);
        res.cookie("token", token, {
          withCredentials: true,
          httpOnly: false,
        });
        res.status(201).json({
          success: true,
          message: "registerd successfully",
          userData: {
            name: newlyCreatedUser.name,
            email: newlyCreatedUser.email,
            id: newlyCreatedUser._id,
          },
        });
      }
    }
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

const LogInUser = async (req, res) => {
  const { email, password } = req.body;
  const { error } = logInSchema.validate({ email, password });
  if (error) {
    return res.status(400).json({
      success: false,
      message: error.details[0].message,
    });
  }
  try {
    const getUser = await User.findOne({ email });
    if (!getUser) {
      return res.status(400).json({
        success: false,
        message: "This Email is worng",
      });
    }
    const checkPassword = await bcrypt.compare(password, getUser.password);
    if (!checkPassword) {
      return res.status(400).json({
        success: false,
        message: "Worng Password",
      });
    }
    const token = generateToken(getUser._id);
    res.cookie("token", token, {
      httpOnly: false, // recommended true for security
      secure: false, // must be false if you are on HTTP (localhost)
      sameSite: "lax", // "lax" or "strict" for normal cross-site behavior
      maxAge: 24 * 60 * 60 * 1000,
    });
    return res.status(201).json({
      success: true,
      message: "Logged in successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

const logOut = async (req, res) => {
  res.cookie("token", "", {
    httpOnly: false,
    secure: false,
    sameSite: "lax",
    maxAge: 0,
  });
  res.status(200).json({
    success: true,
    message: "user has been logged out",
  });
};

module.exports = { registerUser, LogInUser, logOut };
