const express = require("express");
const {
  registerUser,
  LogInUser,
  logOut,
} = require("../controllers/user-controllers");
const { userAuthVerification } = require("../middleware/authMiddleware");

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", LogInUser);
userRouter.get("/auth", userAuthVerification);
userRouter.post("/logout", logOut);

module.exports = userRouter;
