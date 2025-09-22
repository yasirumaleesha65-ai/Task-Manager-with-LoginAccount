const express = require("express");
require("dotenv").config();
const connectDataBase = require("./Database/db");
const userRouter = require("./routes/user-routes");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const TasksRoutes = require("./routes/tasks-routes");

const app = express();

connectDataBase();

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/tasks", TasksRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`App is listning to port ${PORT}`);
});
