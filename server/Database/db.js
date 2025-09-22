const mongoose = require("mongoose");
require("dotenv").config();

const connectDataBase = async () => {
  try {
    await mongoose.connect(process.env.DATA_BASE_CONNECTION);
    console.log("Database connected successfully");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDataBase;
