const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const dotenv = require("dotenv");

const userRouter = require("./routes/user.routes");

dotenv.config();
connectDB();

const app = express();
const path = require("path");

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());

app.use("/auth", userRouter);

module.exports = app;
