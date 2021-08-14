const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const dotenv = require("dotenv");

const userRouter = require("./routes/user/user.routes");
const shopRouter = require("./routes/shop/shop.routes");

dotenv.config();
connectDB();

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());

app.use("/auth", userRouter);
app.use("/shop", shopRouter);

module.exports = app;
