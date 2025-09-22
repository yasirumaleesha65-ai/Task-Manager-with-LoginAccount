const jwt = require("jsonwebtoken");
const User = require("../models/user");

const userAuthVerification = async (req, res) => {
  // console.log("Cookies received:", req.cookies.token); // Check if token cookie exists

  const token = req.cookies.token;
  if (!token) {
    return res.status(400).json({
      success: false,
      message: "Ether token has expired or user has not authenticated",
    });
  }
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_KEY);
      const userInfo = await User.findById(decoded.userId);

      if (userInfo) {
        return res.status(200).json({
          success: true,
          userInfo,
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: "Token did not verify",
      });
    }
  }
};

module.exports = { userAuthVerification };
